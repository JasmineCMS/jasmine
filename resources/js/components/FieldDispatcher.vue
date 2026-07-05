<script setup lang="ts">
import {computed, defineAsyncComponent, shallowRef, watchEffect, getCurrentInstance, useTemplateRef, toRaw} from 'vue';
import {useSortable} from '@vueuse/integrations/useSortable';
import {type GridItem} from '@/js/components/BreadGrid.vue';
import {useLabel} from '@/js/composeables/useLabel.ts';

export interface Field extends GridItem {
  type: string;
  component: string;
  name: string;
  options: Record<string, any>;
  validation: Array<string>;
  label: string | null;
  description: string | null;
  repeats: boolean | number;
  repeaterWidth: number;
  default: unknown;
}

const props = withDefaults(
  defineProps<{
    field: Field;
    errors?: Record<string, string>;
    path: string;
    rtl?: boolean;
    namespace?: string;
  }>(),
  {
    rtl: undefined,
  },
);

const model = defineModel<any | Array<any>>();

const isRtl = computed(() => {
  if (props.rtl !== undefined) return props.rtl;
  if (typeof document !== 'undefined') return document.dir === 'rtl';
  return false;
});

const parseLabel = useLabel();

const label = computed(() => parseLabel(props.field.label || '', props.namespace || '', 'fields'));

const sortableEl = useTemplateRef('sortable');

useSortable(sortableEl, model, {
  handle: '.dnd-handle',
  ghostClass: 'opacity-50',
});

// Tailwind col-span classes: full width on mobile, `width`/12 from the md breakpoint up.
// (Kept local to match BreadGrid's inline approach. If you'd rather not duplicate the
//  map, move this + isRepeater to a shared helper and import it in both components.)
const getColSpan = (width: number): string => {
  const spans: Record<number, string> = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
    4: 'md:col-span-4',
    5: 'md:col-span-5',
    6: 'md:col-span-6',
    7: 'md:col-span-7',
    8: 'md:col-span-8',
    9: 'md:col-span-9',
    10: 'md:col-span-10',
    11: 'md:col-span-11',
    12: 'md:col-span-12',
  };
  return `col-span-12 ${spans[width] || 'md:col-span-12'}`;
};

const getPath = (index?: number): string => {
  let k = props.path;
  if (typeof index === 'number') k += `.${index}`;
  return k;
};

const isRepeater = computed(() => {
  const repeats = props.field.repeats;
  if (typeof repeats === 'boolean') return repeats;
  return typeof repeats === 'number' && repeats > 1;
});

const error = computed(() => {
  if (!props.errors || isRepeater.value) return null;
  return props.errors[getPath()];
});

// `repeats: number` is a maximum instance count; `repeats: true` is unlimited.
const maxItems = computed(() => (typeof props.field.repeats === 'number' ? props.field.repeats : Infinity));

const itemCount = computed(() => (Array.isArray(model.value) ? model.value.length : 0));

const canAddItem = computed(() => itemCount.value < maxItems.value);

const addItem = () => {
  if (!canAddItem.value) return;
  if (!Array.isArray(model.value)) model.value = [];
  model.value.push(props.field.default !== undefined ? structuredClone(toRaw(props.field.default)) : null);
};

const removeItem = (index: number) => {
  if (Array.isArray(model.value)) model.value.splice(index, 1);
};

if (isRepeater.value && !Array.isArray(model.value)) model.value = [];

const toPascalCase = (str: string) =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

const resolvedComponent = shallowRef<any>(null);
const vm = getCurrentInstance();

watchEffect(() => {
  if (!props.field.component) return;
  const kebabName = props.field.component;
  const pascalName = toPascalCase(kebabName);
  const globalComponents = vm?.appContext.components || {};
  if (globalComponents[kebabName] || globalComponents[pascalName]) resolvedComponent.value = kebabName;
  else {
    resolvedComponent.value = defineAsyncComponent(async () => {
      // TODO: attempt to load from app space

      try {
        return await import(`@/js/components/Fields/${pascalName}.vue`);
      } catch (e) {
        console.error(`Failed to lazily load field component: ${pascalName}.vue`, e);
        return null;
      }
    });
  }
});
</script>

<template>
  <div class="flex flex-col">
    <label
      v-if="label && !isRepeater"
      class="block text-sm font-semibold text-gray-700 mb-1"
      :for="field.id"
      v-text="label"
    />

    <!-- Repeater -->
    <div v-if="isRepeater" class="space-y-4">
      <label v-if="label" class="block text-sm font-semibold text-gray-700" v-text="label" />

      <!--
        Nested 12-col grid. Each instance spans `field.width` columns (the instance width),
        full width on mobile. The container itself is sized upstream in BreadGrid via
        `repeaterWidth` (default 12). Controls (drag + remove) sit on their own row on top
        so the field gets the full cell width.
      -->
      <div ref="sortable" class="grid grid-cols-12 gap-4">
        <div v-for="(item, index) in model" :key="index" class="flex flex-col gap-1" :class="getColSpan(field.width)">
          <!-- Controls row -->
          <div class="flex items-center justify-between text-gray-400">
            <button
              type="button"
              class="dnd-handle p-1 -ms-1 rounded-md hover:text-gray-600 cursor-move"
              :aria-label="`Reorder item ${index + 1}`"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </button>
            <button
              type="button"
              @click="removeItem(index)"
              class="p-1 -me-1 rounded-md transition-colors hover:bg-rose-50 hover:text-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/40 cursor-pointer"
              :title="$t('FieldDispatcher.remove', {n: index + 1})"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path
                  d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                />
              </svg>
            </button>
          </div>

          <!-- Field (full cell width) -->
          <div class="min-w-0">
            <component
              v-if="resolvedComponent"
              :is="resolvedComponent"
              :id="`${field.id}-${index}`"
              :name="`${field.name}.${index}`"
              :options="field.options"
              :rtl="isRtl"
              :validation="field.validation"
              :invalid="!!errors?.[getPath(index)]"
              v-model="model[index]"
              :errors="errors"
              :path="path"
              :namespace="namespace"
            />
            <p v-if="errors?.[getPath(index)]" class="mt-2 text-sm text-rose-600 font-medium">
              {{ errors[getPath(index)] }}
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        @click="addItem"
        :disabled="!canAddItem"
        class="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white disabled:hover:border-gray-300"
      >
        <svg
          class="-ms-1 me-2 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
          />
        </svg>
        {{ $t('FieldDispatcher.add') }}
      </button>
    </div>

    <!-- Single -->
    <template v-else>
      <component
        v-if="resolvedComponent"
        :is="resolvedComponent"
        :id="field.id"
        :name="field.name"
        :options="field.options"
        :rtl="isRtl"
        :validation="field.validation"
        :invalid="!!error"
        v-model="model"
        class="mt-1"
        :errors="errors"
        :path="path"
        :namespace="namespace"
      />
    </template>

    <p
      v-if="field.description"
      class="mt-2 text-sm text-gray-500"
      v-text="parseLabel(field.description, namespace || '', 'descriptions')"
    />

    <p v-if="error" class="mt-2 text-sm text-rose-600 font-medium" v-text="error" />
  </div>
</template>
