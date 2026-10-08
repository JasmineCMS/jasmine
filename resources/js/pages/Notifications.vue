<script setup lang="ts">
import {inject} from 'vue';
import {Head, Link, router} from '@inertiajs/vue3';

import type {route as routeFn} from 'ziggy-js';

import AppLayout from '@/js/layouts/AppLayout.vue';
import Breadcrumb from '@/js/components/Breadcrumb.vue';
import NotificationItem, {type NotificationData} from '@/js/components/NotificationItem.vue';
import type {Paginator} from '@/js/components/DataTable.vue';

defineProps<{notifications: Paginator<NotificationData>}>();

const route = inject('route') as typeof routeFn;

const open = (n: NotificationData) => router.post(route('jasmine.notifications.open', n.id));

const read = (n: NotificationData) =>
  router.post(route('jasmine.notifications.read', n.id), {}, {preserveScroll: true});

const readAll = () => router.post(route('jasmine.notifications.read-all'), {}, {preserveScroll: true});
</script>

<template>
  <Head :title="$t('notifications.title')" />

  <AppLayout>
    <template #breadcrumbs>
      <Breadcrumb current>{{ $t('notifications.title') }}</Breadcrumb>
    </template>

    <template #actions>
      <button
        v-if="$page.props._notifications_unread"
        type="button"
        class="px-3 py-1.5 rounded-lg text-sm font-medium text-brand-600 hover:bg-brand-50 transition-colors cursor-pointer"
        @click="readAll"
      >
        {{ $t('notifications.mark_all_read') }}
      </button>
    </template>

    <div class="max-w-3xl">
      <div class="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <ul v-if="notifications.data.length" class="divide-y divide-slate-100">
          <li v-for="n in notifications.data" :key="n.id" class="group relative">
            <button type="button" class="block w-full cursor-pointer hover:bg-slate-50" @click="open(n)">
              <NotificationItem :notification="n" />
            </button>
            <button
              v-if="!n.read"
              type="button"
              class="absolute top-2.5 inset-e-8 px-2 py-1 rounded text-xs text-slate-500 bg-white border border-slate-200 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-slate-900 transition-opacity cursor-pointer"
              @click="read(n)"
            >
              {{ $t('notifications.mark_read') }}
            </button>
          </li>
        </ul>

        <div v-else class="px-4 py-16 text-center text-sm text-slate-500">
          {{ $t('notifications.empty') }}
        </div>
      </div>

      <nav
        v-if="notifications.last_page > 1"
        class="mt-4 flex items-center justify-between text-sm text-slate-600"
        :aria-label="$t('notifications.pagination')"
      >
        <Link
          v-if="notifications.prev_page_url"
          :href="notifications.prev_page_url"
          class="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50"
          preserve-scroll
        >
          {{ $t('notifications.newer') }}
        </Link>
        <span v-else />

        <span>{{
          $t('notifications.page_of', {page: notifications.current_page, pages: notifications.last_page})
        }}</span>

        <Link
          v-if="notifications.next_page_url"
          :href="notifications.next_page_url"
          class="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50"
          preserve-scroll
        >
          {{ $t('notifications.older') }}
        </Link>
        <span v-else />
      </nav>
    </div>
  </AppLayout>
</template>
