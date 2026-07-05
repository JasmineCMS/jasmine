<script setup lang="ts">
import {computed, onMounted, watch} from 'vue';

const props = defineProps<{
  id: string;
  name: string;
  options: {
    class?: string;
    type?: string;
    [key: string]: any;
  };
  rtl: boolean;
  validation: Array<string>;
  invalid: boolean;
  errors: Record<string, string>;
  path: string;
}>();

const model = defineModel<any>({required: true});

const opts = computed(() => ({type: 'text', ...props.options}));

onMounted(() => {
  if (['checkbox', 'radio', 'file'].includes(opts.value.type)) {
    console.warn(
      `${props.name} is using <input-field>. Please use <${opts.value.type}-field> instead of <input-field> for ${opts.value.type} fields.`,
    );
  }
});

watch(
  model,
  (v) => {
    if (v && opts.value.type === 'date') {
      const m = String(v).match(/(\d{4}-\d{2}-\d{2})/);
      if (m && m[1] !== v) model.value = m[1];
    }
  },
  {immediate: true},
);
</script>

<template>
  <input
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
