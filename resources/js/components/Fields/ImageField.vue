<script setup lang="ts">
import {computed, inject, ref, watch} from 'vue';
import type {route as routeFn} from 'ziggy-js';
import {useI18n} from 'vue-i18n';
import {usePage} from '@inertiajs/vue3';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import Swal from '@/js/lib/Swal';
import {useFileManager} from '@/js/composeables/useFileManager.ts';
import {getCookie} from '@/js/utils.ts';

const page = usePage();
const route = inject('route') as typeof routeFn;

const {t} = useI18n();

type ImageValue = {
  src: string | null;
  alt: string | null;
  w: number | null;
  h: number | null;
};

const props = defineProps<{
  id: string;
  name: string;
  options: {
    class?: string;
    w?: number;
    h?: number;
    flexible?: boolean;
    disk?: string | null;
    path?: string | null;
    [key: string]: any;
  };
  rtl: boolean;
  validation: Array<string>;
  invalid: boolean;
  errors: Record<string, string>;
  path: string;
}>();

const model = defineModel<ImageValue | null>({required: true});

const opts = computed(() => ({w: 150, h: 150, flexible: false, ...props.options}));

const loading = ref(false);
const imgError = ref(false);
const dragDepth = ref(0);
const dragging = computed(() => dragDepth.value > 0);

// Reset the broken-image state whenever a new source is set.
watch(
  () => model.value?.src,
  () => (imgError.value = false),
);

const IMG_EXTENSIONS = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'];
const IMG_TYPE_RE = /^image\/(png|gif|jpeg|svg\+xml|webp)$/;
const EXT_TO_MIME: Record<string, string> = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  webp: 'image/webp',
  svg: 'image/svg+xml',
};

const alt = computed({
  get: () => model.value?.alt ?? '',
  set: (v: string) => (model.value = {...model.value!, alt: v.trim() || null}),
});

function timestamped(name: string): string {
  const base = name.split('.').slice(0, -1).join('.');
  const ext = name.split('.').pop();
  return `${base}-${Math.floor(Date.now() / 1000)}.${ext}`;
}

function imageDimensions(src: string): Promise<{w: number; h: number}> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({w: img.naturalWidth, h: img.naturalHeight});
    img.onerror = () => reject(new Error(t('ImageField.ImageFailedToLoad')));
    img.src = src;
  });
}

function fits(dims: {w: number; h: number}): boolean {
  const rw = opts.value.w / dims.w;
  const rh = opts.value.h / dims.h;
  return rw > 0.99 && rw < 1.1 && rh > 0.99 && rh < 1.1;
}

function relative(url: string): string {
  return url.startsWith(document.location.origin) ? url.replace(document.location.origin, '') : url;
}

async function upload(file: File) {
  loading.value = true;
  try {
    const disk = opts.value.disk;
    const path = opts.value.path ?? [(page.props as any)?.breadable?.key, page.props?.id].filter(Boolean).join('/');

    const fd = new FormData();
    fd.append('disk', String(disk ?? ''));
    fd.append('path', String(path ?? ''));
    fd.append('overwrite', '0');
    fd.append('files[]', file);
    fd.append('_token', getCookie('XSRF-TOKEN') ?? '');

    const res = await fetch(route('fm.upload'), {method: 'POST', body: fd}).then((r) => r.json());
    if (res.result?.status !== 'success') throw new Error(res.result?.message ?? t('ImageField.UploadFailed'));

    const {url} = await fetch(route('fm.url', {disk, path: `${path}/${file.name}`})).then((r) => r.json());

    const dims = await imageDimensions(url);
    model.value = {...model.value!, src: relative(url), w: dims.w, h: dims.h};
  } catch (e) {
    await Swal.fire({
      icon: 'error',
      title: t('ImageField.UploadFailed'),
      text: e instanceof Error ? e.message : String(e),
    });
  } finally {
    loading.value = false;
  }
}

async function openCropper(src: string, fileName: string, fileType: string) {
  let cropper: Cropper | null = null;

  const res = await Swal.fire<Blob | null>({
    title: t('ImageField.Crop'),
    html: '<div style="max-height:60vh;overflow:hidden"><img id="jf-cropper-img" alt="" style="display:block;max-width:100%"></div>',
    width: 'min(680px, 92vw)',
    showCancelButton: true,
    confirmButtonText: t('ImageField.Save'),
    cancelButtonText: t('ImageField.Cancel'),
    allowOutsideClick: false,
    didOpen: (popup) => {
      const img = popup.querySelector<HTMLImageElement>('#jf-cropper-img')!;
      img.src = src;
      cropper = new Cropper(img, {
        aspectRatio: opts.value.w / opts.value.h,
        viewMode: 1,
        autoCropArea: 1,
      });
    },
    preConfirm: () =>
      new Promise<Blob | null>((resolve) =>
        cropper!.getCroppedCanvas({width: opts.value.w, height: opts.value.h}).toBlob(resolve, fileType),
      ),
    willClose: () => cropper?.destroy(),
  });

  if (!res.isConfirmed || !res.value) return;

  const base = fileName.split('.').slice(0, -1).join('.');
  const ext = fileName.split('.').pop();
  await upload(new File([res.value], `${base}_cropped_${opts.value.w}x${opts.value.h}.${ext}`, {type: res.value.type}));
}

async function handleDrop(evt: DragEvent) {
  dragDepth.value = 0;

  const file = evt.dataTransfer?.files.length === 1 ? evt.dataTransfer.files[0] : null;
  if (!file || !IMG_TYPE_RE.test(file.type)) return;

  const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
  const name = timestamped(file.name);
  const renamed = () => new File([file], name, {type: file.type});

  if (ext === 'svg' || opts.value.flexible) return upload(renamed());

  const objectUrl = URL.createObjectURL(file);
  try {
    if (fits(await imageDimensions(objectUrl))) return upload(renamed());
    await openCropper(objectUrl, name, file.type);
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

const {openFileManager} = useFileManager();

function browse() {
  openFileManager({
    disk: opts.value.disk,
    path: opts.value.path,
    extensions: IMG_EXTENSIONS,
    onSelect: handleSelect,
  });
}

async function handleSelect(val: string) {
  const ext = val.split('.').pop()?.toLowerCase() ?? '';

  try {
    const dims = await imageDimensions(val);

    if (ext === 'svg' || opts.value.flexible || fits(dims)) {
      model.value = {...model.value!, src: val, w: dims.w, h: dims.h};
    } else {
      void openCropper(val, val.split('/').pop()!, EXT_TO_MIME[ext] ?? 'image/png');
    }
  } catch {
    model.value = {...model.value!, src: val, w: null, h: null};
  }
}

function removeImg() {
  model.value = {...model.value!, src: null, w: null, h: null};
}

const box = computed(() => {
  const w = Number(model.value?.w) || Number(opts.value.w);
  const h = Number(model.value?.h) || Number(opts.value.h);

  if (!w || !h) return null;

  const scale = Math.min(1, 200 / h);
  return {width: Math.round(w * scale), height: Math.round(h * scale)};
});
</script>

<template>
  <div>
    <div
      class="block w-full max-w-full rounded-md border-2 p-1 transition-colors duration-200"
      :style="box ? {width: box.width + 'px'} : undefined"
      :class="[dragging ? 'border-indigo-500 opacity-75' : invalid ? 'border-red-300' : 'border-gray-300']"
    >
      <div
        class="jf-checkerboard group relative flex min-h-50 items-center justify-center"
        @dragover.prevent
        @dragenter.prevent="dragDepth++"
        @dragleave="dragDepth = Math.max(0, dragDepth - 1)"
        @drop.prevent="handleDrop"
      >
        <!-- Keeps native "required" validation working while no image is set -->
        <input
          v-if="!model?.src && validation.includes('required')"
          type="text"
          required
          tabindex="-1"
          class="sr-only"
          :aria-invalid="invalid || undefined"
        />

        <img
          v-if="model?.src && !imgError"
          :src="model.src"
          :alt="model.alt ?? ''"
          class="mx-auto block max-h-50 w-full bg-gray-100 object-contain"
          @error="imgError = true"
        />
        <!-- Broken image -->
        <div v-else-if="imgError" class="flex flex-col items-center gap-1 px-2 py-4 text-center text-amber-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="h-10 w-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 5.25h16.5M3.75 5.25 20.25 21.75M3.75 5.25 3 4.5"
            />
          </svg>
          <span class="text-xs font-medium">{{ $t('ImageField.ImageFailedToLoad') }}</span>
        </div>

        <!-- Empty placeholder -->
        <svg
          v-else
          class="mx-auto block max-h-50 max-w-full"
          xmlns="http://www.w3.org/2000/svg"
          :width="opts.w"
          :height="opts.h"
          fill="#d1d1d1"
          viewBox="-16 -16 48 48"
        >
          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          <path
            d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"
          />
        </svg>

        <!-- Delete -->
        <button
          v-if="model?.src"
          type="button"
          class="absolute top-3 flex h-8 w-8 scale-0 cursor-pointer items-center justify-center rounded-full bg-white text-red-600 shadow-lg transition-transform duration-100 ease-out group-hover:scale-100 hover:bg-red-50"
          :class="rtl ? 'left-3' : 'right-3'"
          :aria-label="$t('ImageField.Remove')"
          @click.prevent="removeImg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>

        <!-- Browse / edit -->
        <button
          type="button"
          class="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 scale-0 cursor-pointer items-center justify-center rounded-full bg-white text-indigo-600 shadow-lg transition-transform duration-100 ease-out group-hover:scale-100 hover:bg-indigo-50"
          :aria-label="$t('ImageField.Browse')"
          @click.prevent="browse"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>

        <!-- Loading overlay -->
        <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-white/75">
          <div class="h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" role="status">
            <span class="sr-only" v-text="$t('ImageField.Loading') + '...'" />
          </div>
        </div>
      </div>

      <input
        :id="id"
        v-model="alt"
        type="text"
        class="mt-2 block w-full rounded-md border-gray-300 text-gray-900 shadow-xs transition-colors duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
        :placeholder="$t('ImageField.Alt')"
        :dir="rtl ? 'rtl' : 'ltr'"
      />
    </div>
  </div>
</template>

<style scoped>
.jf-checkerboard {
  background: #f2f2f2
    url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" fill-opacity=".1"><rect x="200" width="200" height="200"/><rect y="200" width="200" height="200"/></svg>');
  background-size: 13px 13px;
}
</style>
