<script setup>
defineProps({
  shown: Number,
  total: Number,
  filtered: Boolean,
});
</script>

<template>
  <div class="p-4">
    <div class="flex items-center justify-between">
      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Articles</span>
      <span v-if="filtered" class="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-600"
        >filtered</span
      >
    </div>
    <div class="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{{ shown }}</div>
    <div class="mt-1 text-sm text-gray-500 dark:text-gray-400">
      <template v-if="filtered">of {{ total }} in total</template>
      <template v-else>in total</template>
    </div>
    <div v-if="total" class="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
      <div class="h-full rounded-full bg-brand-500 transition-all" :style="{width: (shown / total) * 100 + '%'}" />
    </div>
  </div>
</template>
