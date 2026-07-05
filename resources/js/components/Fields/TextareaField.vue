<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps<{
  id: string;
  name: string;
  options: {
    class?: string;
    rows?: number;
    [key: string]: any;
  };
  rtl: boolean;
  validation: Array<string>;
  invalid: boolean;
  errors: Record<string, string>;
  path: string;
}>();

const model = defineModel<any>({required: true});

const opts = computed(() => ({rows: 3, ...props.options}));
</script>

<template>
  <textarea
    :id="id"
    :name="name"
    v-model="model"
    class="block w-full rounded-md shadow-xs sm:text-sm transition-colors duration-200"
    :class="
      invalid
        ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500'
        : 'border-gray-300 text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
    "
    :required="validation.includes('required')"
    :aria-invalid="invalid || undefined"
    :dir="rtl ? 'rtl' : 'ltr'"
    v-bind="opts"
  />
</template>
