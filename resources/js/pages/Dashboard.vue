<script setup lang="ts">
import DashboardCard, {type DashboardCardData} from '@/js/components/DashboardCard.vue';
import AppLayout from '@/js/layouts/AppLayout.vue';
import {Head} from '@inertiajs/vue3';

defineProps<{cards: DashboardCardData[]}>();

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
</script>

<template>
  <Head :title="$t('Dashboard.title')" />
  <AppLayout>
    <div class="grid grid-cols-12 gap-4">
      <DashboardCard v-for="card in cards" :key="card.id" :card="card" :class="getColSpan(card.width)" />
    </div>
  </AppLayout>
</template>

<style scoped></style>
