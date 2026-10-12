<script setup>
import {inject, ref} from 'vue';
import {Link} from '@inertiajs/vue3';

const card = inject('jasmine:card');

const article = ref(null);
const empty = ref(false);
const busy = ref(false);

async function pick() {
  busy.value = true;
  try {
    const res = await card.call('random');
    article.value = res.article;
    empty.value = !res.article;
  } finally {
    busy.value = false;
  }
}
</script>

<template>
  <div class="flex h-full flex-col p-4">
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Spotlight</span>

    <div class="mt-2 flex-1">
      <Link
        v-if="article"
        :href="article.url"
        class="line-clamp-2 font-semibold text-gray-900 hover:text-brand-600 dark:text-white"
        v-text="article.title"
      />
      <p v-if="article" class="mt-1 text-sm text-gray-500 dark:text-gray-400">by {{ article.author ?? 'nobody' }}</p>
      <p v-else-if="empty" class="text-sm text-gray-500">Nothing matches the current filters.</p>
      <p v-else class="text-sm text-gray-500">A random article from the ones listed below.</p>
    </div>

    <button
      type="button"
      :disabled="busy"
      @click="pick"
      class="mt-3 self-start rounded-xl border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-600 transition-colors hover:border-brand-400 hover:text-brand-600 disabled:opacity-50 dark:bg-gray-900 dark:text-gray-300 cursor-pointer"
    >
      {{ article ? 'Another one' : 'Pick one' }}
    </button>
  </div>
</template>
