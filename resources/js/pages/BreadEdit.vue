<script setup lang="ts">
import {Head, router, useForm, usePage} from '@inertiajs/vue3';
import {computed, ref, toRaw} from 'vue';
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue';
import {vPopoverFlip} from '@/js/directives/popoverFlip';
import AppLayout from '@/js/layouts/AppLayout.vue';
import Breadcrumb from '@/js/components/Breadcrumb.vue';
import BreadGrid, {type GridItem} from '@/js/components/BreadGrid.vue';
import type {Field} from '@/js/components/FieldDispatcher.vue';
import Swal from '@/js/lib/Swal';
import {useI18n} from 'vue-i18n';
import {useLabel} from '@/js/composeables/useLabel.ts';

const RTL_LOCALES = new Set(['ar', 'dv', 'fa', 'ha', 'he', 'ks', 'ku', 'ps', 'sd', 'ur', 'yi']);

const props = defineProps<{
  breadable: {
    key: string;
    singular: string;
    plural: string;
    manifest: GridItem[];
    fields: Field[];
  };
  locales: string[];
  locale: string;
  can: Array<'b' | 'r' | 'e' | 'a' | 'd'>;
  id: null | number | string;
  ent: Record<string, any>;
  title: string | null;
  publicUrl: string | null;
  revisions: Array<{
    rev: string;
    locale: string | null;
    date: string;
    user: {name: string; email: string; avatar_url: string} | null;
  }>;
}>();

const page = usePage();
const {t} = useI18n();

const breadLocale = computed<string | null>({
  get(): string | null {
    return new URLSearchParams(page.url.split('?')[1] || '').get('_locale') ?? props.locale;
  },
  async set(v: string | null) {
    if (!(await confirmDiscard())) return;
    router.get(navTo({_locale: v, rev: null}), {}, {replace: true});
  },
});

const isRepeater = (field: Field) => {
  const repeats = field.repeats;
  if (typeof repeats === 'boolean') return repeats;
  return typeof repeats === 'number' && repeats > 1;
};

const isPlainObject = (v: any): v is Record<string, any> => v !== null && typeof v === 'object' && !Array.isArray(v);

const deepMerge = (base: any, patch: any): any => {
  if (patch === undefined) return base;

  if (isPlainObject(base)) {
    if (patch === null || Array.isArray(patch)) return base;

    if (isPlainObject(patch)) {
      const out: Record<string, any> = {...base};
      for (const key of Object.keys(patch)) out[key] = deepMerge(base[key], patch[key]);
      return out;
    }
  }

  return patch;
};

const getFormData = () => {
  const data: Record<string, any> = {};

  for (const f of props.breadable.fields) {
    const def = structuredClone(toRaw(f.default)); // per-ITEM default for repeaters

    data[f.name] = isRepeater(f) ? [] : def;

    if (typeof props.ent[f.name] === 'undefined') continue;

    const val = structuredClone(toRaw(props.ent[f.name]));

    if (isRepeater(f)) {
      if (!Array.isArray(val)) continue; // malformed → keep []
      data[f.name] = val.map((item: any) => {
        if (item === null) return isPlainObject(def) ? structuredClone(def) : '';
        return isPlainObject(def) && isPlainObject(item) ? deepMerge(structuredClone(def), item) : item;
      });
      continue;
    }

    data[f.name] = isPlainObject(def) ? deepMerge(def, val) : val;
  }

  return data;
};

const form = useForm({v: getFormData()});

const isRtl = computed(() => {
  const loc = breadLocale?.value;
  if (!loc) return false;
  const base = loc.toLowerCase().split(/[-_]/)[0];
  return RTL_LOCALES.has(base);
});

const activeRevKey = computed(() => new URLSearchParams(page.url.split('?')[1] || '').get('rev'));
const viewingRev = computed(() => activeRevKey.value !== null);
const activeRev = computed(() => props.revisions.find((r) => r.rev === activeRevKey.value) ?? null);

const confirmDiscard = async () => {
  if (!form.isDirty) return true;
  const {isConfirmed} = await Swal.fire({
    title: t('BreadEdit.are_you_sure'),
    text: t('BreadEdit.unsaved_changes_warning'),
    showCancelButton: true,
  });
  return isConfirmed;
};

const navTo = (params: Record<string, string | null>) => {
  const sp = new URLSearchParams(page.url.split('?')[1] || '');
  for (const [k, v] of Object.entries(params)) v === null ? sp.delete(k) : sp.set(k, v);
  const qs = sp.toString();
  return `${page.url.split('?')[0]}${qs ? `?${qs}` : ''}`;
};

const viewRevision = async (rev: string) => {
  if (!(await confirmDiscard())) return;
  router.get(navTo({rev}), {}, {preserveScroll: true});
};

const backToCurrent = () => router.get(navTo({rev: null}), {}, {preserveScroll: true});

const fileInput = ref<HTMLInputElement | null>(null);

const exportContent = () => {
  const data = JSON.stringify(structuredClone(toRaw(props.ent)) ?? {}, null, 2);
  const blob = new Blob([data], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${[props.breadable.key, props.id].filter(Boolean).join('-')}.jasmine.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};

const importContent = async (e: Event) => {
  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];
  input.value = ''; // reset so re-importing the same file fires change again
  if (!file) return;

  if (!(await confirmDiscard())) return;

  try {
    form.v = JSON.parse(await file.text());
  } catch {
    await Swal.fire({
      title: t('BreadEdit.import_failed'),
      text: t('BreadEdit.import_failed_invalid_json'),
      icon: 'error',
    });
  }
};

const restore = async () => {
  const {isConfirmed} = await Swal.fire({
    title: t('BreadEdit.restore_version_title'),
    text: t('BreadEdit.restore_version_text'),
    icon: 'warning',
    showCancelButton: true,
  });
  if (!isConfirmed) return;
  form.put(navTo({rev: null}));
};

const parseLabel = useLabel();
</script>

<template>
  <Head :title="title ? `${$t('Edit')} ${title}` : $t('New')" />

  <AppLayout>
    <template #breadcrumbs>
      <Breadcrumb v-if="breadable.key === 'pages'">
        {{ $t('layout.pages') }}
      </Breadcrumb>
      <Breadcrumb v-else :href="route('jasmine.bread.index', {breadable: breadable.key})">
        {{ parseLabel(breadable.plural, breadable.key) }}
      </Breadcrumb>
      <Breadcrumb current>
        {{ title || $t('BreadEdit.new') }}
      </Breadcrumb>
    </template>

    <template #actions>
      <a
        v-if="publicUrl"
        :href="publicUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:border-gray-300 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 cursor-pointer"
      >
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path
            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M15 3h6v6M10 14 21 3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        {{ $t('BreadEdit.view') }}
      </a>

      <div
        v-if="locales.length > 1"
        class="inline-flex flex-wrap items-center rounded-xl border border-gray-200 bg-white p-1 text-sm font-medium"
        role="group"
        :aria-label="$t('BreadEdit.content_locale')"
      >
        <button
          v-for="l in locales"
          :key="l"
          type="button"
          @click="breadLocale = l"
          :aria-pressed="breadLocale === l"
          :title="$t('locales.' + l)"
          :aria-label="$t('locales.' + l)"
          class="px-3 py-0.5 rounded-lg uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 cursor-pointer"
          :class="[breadLocale === l ? 'bg-brand-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900']"
          v-text="l"
        />
      </div>

      <Popover v-if="revisions.length" class="relative">
        <PopoverButton
          class="inline-flex items-center gap-1.5 rounded-xl border bg-white px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 cursor-pointer"
          :class="
            viewingRev
              ? 'border-amber-300 bg-amber-50 text-amber-700'
              : 'border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300'
          "
        >
          <svg
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="M3 3v5h5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 7v5l3 2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          {{ $t('BreadEdit.history') }}
          <span class="rounded-md bg-black/5 px-1.5 text-xs">{{ revisions.length }}</span>
        </PopoverButton>

        <PopoverPanel
          v-popover-flip
          class="absolute z-30 mt-2 w-80 max-h-96 overflow-y-auto rounded-xl border border-gray-200 bg-white p-1.5 shadow-xl shadow-gray-900/5"
        >
          <button
            type="button"
            @click="backToCurrent"
            class="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm transition-colors cursor-pointer"
            :class="!viewingRev ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-50'"
          >
            <span class="flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-brand-600">
              <svg
                class="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span class="font-medium">{{ $t('BreadEdit.current_version') }}</span>
            <span v-if="!viewingRev" class="ms-auto text-xs text-brand-600">{{ $t('BreadEdit.live') }}</span>
          </button>

          <div class="my-1 border-t border-gray-100" />

          <button
            v-for="r in revisions"
            :key="r.rev"
            type="button"
            @click="viewRevision(r.rev)"
            class="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-start text-sm transition-colors cursor-pointer"
            :class="activeRevKey === r.rev ? 'bg-amber-50 text-amber-800' : 'text-gray-700 hover:bg-gray-50'"
          >
            <img
              v-if="r.user"
              :src="r.user.avatar_url"
              :alt="r.user.name"
              class="h-7 w-7 shrink-0 rounded-full bg-gray-100 object-cover"
            />
            <span
              v-else
              class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-400"
              aria-hidden="true"
              >?</span
            >
            <span class="min-w-0">
              <span class="block truncate font-medium">{{ r.user?.name ?? $t('BreadEdit.unknown_user') }}</span>
              <span class="block truncate text-xs text-gray-400">{{ r.date }}</span>
            </span>
            <span
              v-if="locales.length > 1 && r.locale"
              class="ms-auto shrink-0 rounded-md bg-black/5 px-1.5 text-xs uppercase text-gray-500"
              >{{ r.locale }}</span
            >
          </button>
        </PopoverPanel>
      </Popover>

      <input ref="fileInput" type="file" accept=".json,application/json" class="hidden" @change="importContent" />

      <button
        type="button"
        @click="exportContent"
        class="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:border-gray-300 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 cursor-pointer"
      >
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7 10l5 5 5-5M12 15V3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        {{ $t('BreadEdit.export') }}
      </button>

      <button
        v-if="can.includes(id ? 'e' : 'a') && !viewingRev"
        type="button"
        @click="fileInput?.click()"
        class="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:border-gray-300 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 cursor-pointer"
      >
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 8l-5-5-5 5M12 3v12" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        {{ $t('BreadEdit.import') }}
      </button>

      <button
        v-if="can.includes(id ? 'e' : 'a') && !viewingRev"
        type="button"
        @click="form[id ? 'put' : 'post']('')"
        :disabled="form.processing"
        :class="[
          'inline-flex items-center justify-center rounded-xl py-1.5 px-6 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors cursor-pointer',
          form.isDirty
            ? 'bg-brand-500 hover:bg-brand-600 shadow-lg shadow-brand-500/25 focus-visible:ring-brand-500'
            : 'bg-gray-400 hover:bg-gray-500 focus-visible:ring-gray-400',
          form.processing ? 'opacity-75 cursor-not-allowed' : '',
        ]"
      >
        <svg v-if="form.processing" class="animate-spin -ms-1 me-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        {{ $t('BreadEdit.save') }}
      </button>
    </template>

    <div
      v-if="viewingRev"
      role="status"
      class="sticky top-0 z-20 mb-6 flex flex-wrap items-center gap-3 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-amber-800"
    >
      <svg
        class="h-5 w-5 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <div class="min-w-0 text-sm">
        <span class="font-semibold">{{ $t('BreadEdit.viewing_historical') }}</span>
        <span v-if="activeRev" class="text-amber-700">
          — {{ activeRev.date }}<template v-if="activeRev.user"> · {{ activeRev.user.name }}</template>
        </span>
      </div>
      <div class="ms-auto flex items-center gap-2">
        <button
          type="button"
          @click="backToCurrent"
          class="rounded-lg border border-amber-300 bg-white px-3 py-1.5 text-sm font-medium text-amber-800 transition-colors hover:bg-amber-100 cursor-pointer"
        >
          {{ $t('BreadEdit.back_to_current') }}
        </button>
        <button
          v-if="can.includes(id ? 'e' : 'a')"
          type="button"
          @click="restore"
          :disabled="form.processing"
          class="rounded-lg bg-amber-600 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-amber-700 disabled:opacity-60 cursor-pointer"
        >
          {{ $t('BreadEdit.restore') }}
        </button>
      </div>
    </div>

    <form @submit.prevent="!viewingRev && form[id ? 'put' : 'post']('')" class="bread-edit space-y-6">
      <fieldset
        :disabled="viewingRev"
        class="m-0 min-w-0 border-0 p-0"
        :class="viewingRev && 'pointer-events-none select-none opacity-60'"
      >
        <BreadGrid
          :items="breadable.manifest"
          v-model="form.v"
          :errors="form.errors"
          prefix="v"
          :rtl="isRtl"
          :namespace="breadable.key"
        />
      </fieldset>
    </form>
  </AppLayout>
</template>
