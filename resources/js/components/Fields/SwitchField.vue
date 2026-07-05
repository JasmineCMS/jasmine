<script setup lang="ts">
import {computed} from 'vue';
import {Switch} from '@headlessui/vue';

const props = defineProps<{
  id: string;
  name: string;
  options: {
    class?: string;
    [key: string]: any;
  };
  rtl: boolean;
  validation: Array<string>;
  invalid: boolean;
  errors: Record<string, string>;
  path: string;
}>();

const model = defineModel<boolean>({required: true});

const opts = computed(() => {
  const {class: _, ...rest} = props.options;
  return rest;
});
</script>

<template>
  <Switch
    :id="id"
    :name="name"
    v-model="model"
    :aria-invalid="invalid || undefined"
    :class="[
      'relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      model ? 'bg-indigo-600' : 'bg-gray-200',
      invalid ? 'ring-2 ring-red-300 focus:ring-red-500' : 'focus:ring-indigo-500',
      options.class,
    ]"
    v-bind="opts"
  >
    <span
      aria-hidden="true"
      :class="model ? 'ltr:translate-x-6 rtl:-translate-x-6' : 'ltr:translate-x-1 rtl:-translate-x-1'"
      class="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition duration-200 ease-in-out"
    />
  </Switch>
</template>
