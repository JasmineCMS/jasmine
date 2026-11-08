// what a dynamic page (Dynamic.vue) can import besides the @jasmine/* sources.
// scripts/dynamic-types.ts reads this file to ship the types of every module listed here (tsconfig.dynamic.json),
// so it must stay plain: no imports, nothing that runs on load.

// handed to every page up front
export const provided = ['vue', '@inertiajs/vue3'] as const;

// fetched the first time a page imports one. these resolve to the app's own instances, so injection based
// apis (useI18n, headlessui's providers) see the same plugin state as the rest of the app
export const lazy: Record<string, () => Promise<object>> = {
  '@vueuse/integrations/useSortable': () => import('@vueuse/integrations/useSortable'),
  'vue-i18n': () => import('vue-i18n'),
  '@headlessui/vue': () => import('@headlessui/vue'),
};
