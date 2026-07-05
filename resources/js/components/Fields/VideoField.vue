<script setup lang="ts">
import {computed} from 'vue';
import {useFileManager} from '@/js/composeables/useFileManager.ts';

type VideoValue = {
  type: 'youtube' | 'vimeo' | 'url' | null;
  url: string | null;
};

defineProps<{
  id: string;
  name: string;
  options: {
    class?: string;
    placeholder?: string;
    [key: string]: any;
  };
  rtl: boolean;
  validation: Array<string>;
  invalid: boolean;
  errors: Record<string, string>;
  path: string;
}>();

const model = defineModel<VideoValue>({required: true});

const YOUTUBE_RE =
  /(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:[^#]*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/;
const VIMEO_RE = /vimeo\.com\/(?:video\/)?(\d+)(?:\/([\da-f]+))?/;

function parse(url: string): VideoValue {
  const trimmed = url.trim();
  if (!trimmed) return {type: null, url: null};

  if (YOUTUBE_RE.test(trimmed)) return {type: 'youtube', url: trimmed};
  if (VIMEO_RE.test(trimmed)) return {type: 'vimeo', url: trimmed};

  return {type: 'url', url: trimmed};
}

const url = computed({get: () => model.value?.url ?? '', set: (v: string) => (model.value = parse(v))});

const embedSrc = computed(() => {
  if (!model.value?.url) return null;
  const {type, url: u} = model.value;
  if (type === 'youtube') {
    const m = u.match(YOUTUBE_RE);
    return m ? `https://www.youtube-nocookie.com/embed/${m[1]}` : null;
  }
  if (type === 'vimeo') {
    const m = u.match(VIMEO_RE);
    if (!m) return null;
    return `https://player.vimeo.com/video/${m[1]}${m[2] ? `?h=${m[2]}` : ''}`;
  }
  return null;
});

const {openFileManager} = useFileManager();
</script>

<template>
  <div>
    <div class="flex gap-2">
      <input
        :id="id"
        :name="name"
        v-model="url"
        dir="ltr"
        type="url"
        inputmode="url"
        class="block w-full rounded-md shadow-xs sm:text-sm transition-colors duration-200"
        :class="
          invalid
            ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500'
            : 'border-gray-300 text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
        "
        :placeholder="options.placeholder ?? 'YouTube / Vimeo / video URL'"
        :required="validation.includes('required')"
        :aria-invalid="invalid || undefined"
        v-bind="options"
      />
      <button
        type="button"
        class="shrink-0 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 shadow-xs transition-colors duration-200 hover:bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 cursor-pointer"
        @click.prevent="
          openFileManager({
            extensions: ['mp4', 'webm', 'ogv', 'ogg', 'mov', 'm3u8'],
            onSelect: (v) => (url = v),
          })
        "
        v-text="$t('VideoField.Browse')"
      />
    </div>

    <div v-if="!!model?.url" class="mt-2 overflow-hidden rounded-md border border-gray-200 bg-black">
      <iframe
        v-if="embedSrc"
        :src="embedSrc"
        class="aspect-video w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
      />

      <video
        v-else-if="model.type === 'url'"
        :key="model.url"
        :src="model.url"
        class="aspect-video w-full"
        controls
        preload="metadata"
        playsinline
      />
    </div>
  </div>
</template>
