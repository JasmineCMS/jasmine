<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps<{
  id: string;
  name: string;
  options: {
    class?: string;
    options?: Record<string, string>;
    multiple?: boolean;
    readonly?: boolean;
    placeholder?: string;
    [key: string]: any;
  };
  rtl: boolean;
  validation: Array<string>;
  invalid: boolean;
  errors: Record<string, string>;
  path: string;
}>();

const model = defineModel<any>({required: true});

// Pull out the keys that aren't valid <select> attributes so they don't
// leak through v-bind.
const opts = computed(() => {
  const {options, placeholder, ...rest} = props.options;
  return rest;
});

const items = computed(() => Object.entries(props.options.options ?? {}).map(([value, label]) => ({value, label})));
</script>

<template>
  <select
    :id="id"
    :name="name"
    v-model="model"
    class="block w-full rounded-md shadow-xs sm:text-sm transition-colors duration-200"
    :class="
      invalid
        ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-1 focus:ring-red-500'
        : 'border-gray-300 text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
    "
    :required="validation.includes('required')"
    :aria-invalid="invalid || undefined"
    :dir="rtl ? 'rtl' : 'ltr'"
    v-bind="opts"
  >
    <option v-if="options.placeholder && !options.multiple" value="" disabled v-text="options.placeholder" />
    <option v-for="item in items" :key="item.value" :value="item.value" v-text="item.label" />
  </select>
</template>
