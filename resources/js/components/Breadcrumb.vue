<script setup lang="ts">
import {Link} from '@inertiajs/vue3';

defineProps<{
  href?: string | null;
  current?: boolean;
}>();

const chevron = 'm8.25 4.5 7.5 7.5-7.5 7.5';
</script>

<template>
  <li class="flex items-center gap-1.5 min-w-0">
    <svg
      class="w-4 h-4 text-slate-300 shrink-0 rtl:-scale-x-100"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path :d="chevron" />
    </svg>

    <Link v-if="href" :href="href" class="text-slate-500 hover:text-slate-900 truncate transition-colors">
      <slot />
    </Link>
    <span
      v-else
      class="truncate"
      :class="current ? 'text-slate-900 font-medium' : 'text-slate-500'"
      :aria-current="current ? 'page' : undefined"
    >
      <slot />
    </span>
  </li>
</template>
