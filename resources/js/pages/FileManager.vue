<script setup lang="ts">
import {computed, inject} from 'vue';
import {Head, usePage} from '@inertiajs/vue3';
import type {route as routeFn} from 'ziggy-js';
import AppLayout from '@/js/layouts/AppLayout.vue';

const page = usePage();

const route = inject('route') as typeof routeFn;

const iframeSrc = computed(() => {
  const url = new URL(page.url, 'http://localhost');
  return route('jasmine.file-manager.standalone', Object.fromEntries(url.searchParams));
});
</script>

<template>
  <Head :title="$t('FileManager.title')" />
  <AppLayout>
    <div class="h-full flex flex-col">
      <h1
        v-text="$t('FileManager.title')"
        class="font-display text-3xl leading-none font-semibold text-gray-900 mb-6"
      />
      <iframe :src="iframeSrc" frameborder="0" class="w-full grow border-none" />
    </div>
  </AppLayout>
</template>
