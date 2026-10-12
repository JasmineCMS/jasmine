<script setup lang="ts">
import CardGrid from '@/js/components/CardGrid.vue';
import type {DashboardCardData} from '@/js/components/DashboardCard.vue';
import AppLayout from '@/js/layouts/AppLayout.vue';
import {Head} from '@inertiajs/vue3';

defineProps<{cards: DashboardCardData[]}>();
</script>

<template>
  <Head :title="$t('Dashboard.title')" />
  <AppLayout>
    <CardGrid :cards="cards" />
  </AppLayout>
</template>

<style scoped></style>
