<script setup lang="ts">
import {computed} from 'vue';
import JsonEditorVue from 'json-editor-vue';
import type {Mode} from 'vanilla-jsoneditor';

const props = defineProps<{
  id: string;
  name: string;
  options: {
    class?: string;
    mode?: 'tree' | 'text' | 'table';
    readonly?: boolean;
    [key: string]: any;
  };
  rtl: boolean;
  validation: Array<string>;
  invalid: boolean;
  errors: Record<string, string>;
  path: string;
}>();

const model = defineModel<any>({required: true});

const opts = computed(() => {
  const {readonly, mode, ...rest} = props.options;

  return {
    mode: (mode ?? 'tree') as Mode,
    readOnly: readonly ?? false,
    stringified: false,
    mainMenuBar: true,
    navigationBar: false,
    askToFormat: false,
    ...rest,
  };
});
</script>

<template>
  <JsonEditorVue
    :id="id"
    :name="name"
    v-model="model"
    dir="ltr"
    class="jse-field block w-full overflow-hidden rounded-md border shadow-xs sm:text-sm transition-colors duration-200"
    :class="
      invalid
        ? 'border-red-300 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500'
        : 'border-gray-300 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500'
    "
    :aria-invalid="invalid || undefined"
    v-bind="opts"
  />
</template>

<style scoped>
.jse-field {
  /* Align the editor's theme with the rest of the field suite. */
  --jse-theme-color: var(--color-indigo-600);
  --jse-theme-color-highlight: var(--color-indigo-500);
  --jse-error-color: var(--color-red-500);
  /* The wrapper carries the border + focus ring; drop the editor's own. */
  --jse-main-border: none;
}
</style>
