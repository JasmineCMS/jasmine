<script setup lang="ts">
import {computed} from 'vue';
import {useFileManager} from '@/js/composeables/useFileManager.ts';

const props = defineProps<{
  id: string;
  name: string;
  options: {
    class?: string;
    placeholder?: string;
    disk?: string;
    path?: string;
    extensions?: string[];
    [key: string]: any;
  };
  rtl: boolean;
  validation: Array<string>;
  invalid: boolean;
  errors: Record<string, string>;
  path: string;
}>();

const model = defineModel<string | null>({required: true});

const opts = computed(() => {
  const {disk, path, extensions, ...rest} = props.options;
  return rest;
});

const val = computed({
  get: () => model.value ?? '',
  set: (v: string) => (model.value = v.trim() || null),
});

const {openFileManager} = useFileManager();

function browse() {
  openFileManager({
    disk: props.options.disk,
    path: props.options.path,
    extensions: props.options.extensions,
    onSelect: (v: string) => (val.value = v),
  });
}
</script>

<template>
  <div>
    <div class="flex gap-2">
      <input
        :id="id"
        :name="name"
        v-model="val"
        dir="ltr"
        type="text"
        class="block w-full rounded-md shadow-xs sm:text-sm transition-colors duration-200"
        :class="
          invalid
            ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500'
            : 'border-gray-300 text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
        "
        :placeholder="options.placeholder"
        :required="validation.includes('required')"
        :aria-invalid="invalid || undefined"
        v-bind="opts"
      />
      <button
        type="button"
        class="shrink-0 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 shadow-xs transition-colors duration-200 hover:bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 cursor-pointer"
        @click.prevent="browse"
        v-text="$t('FileField.Browse')"
      />
    </div>
  </div>
</template>
