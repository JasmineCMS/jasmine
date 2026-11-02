<script setup lang="ts">
import DashboardCard, {type DashboardCardData} from '@/js/components/DashboardCard.vue';

defineProps<{cards: DashboardCardData[]}>();

// paper is narrower than md, so the widths are kept for print on their own
const getColSpan = (width: number): string => {
  const spans: Record<number, string> = {
    1: 'md:col-span-1 print:col-span-1',
    2: 'md:col-span-2 print:col-span-2',
    3: 'md:col-span-3 print:col-span-3',
    4: 'md:col-span-4 print:col-span-4',
    5: 'md:col-span-5 print:col-span-5',
    6: 'md:col-span-6 print:col-span-6',
    7: 'md:col-span-7 print:col-span-7',
    8: 'md:col-span-8 print:col-span-8',
    9: 'md:col-span-9 print:col-span-9',
    10: 'md:col-span-10 print:col-span-10',
    11: 'md:col-span-11 print:col-span-11',
    12: 'md:col-span-12 print:col-span-12',
  };
  return `col-span-12 ${spans[width] || 'md:col-span-12 print:col-span-12'}`;
};
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <DashboardCard
      v-for="card in cards"
      :key="card.id"
      :card="card"
      :class="getColSpan(card.width)"
      class="print:break-inside-avoid"
    />
  </div>
</template>
