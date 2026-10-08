<script setup lang="ts">
import {computed, inject, ref} from 'vue';
import {Link, router, usePage} from '@inertiajs/vue3';
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue';

import type {route as routeFn} from 'ziggy-js';

import NotificationItem, {type NotificationData} from '@/js/components/NotificationItem.vue';

const route = inject('route') as typeof routeFn;

const unread = computed(() => usePage().props._notifications_unread ?? 0);
const badge = computed(() => (unread.value > 99 ? '99+' : String(unread.value)));

const items = ref<NotificationData[]>([]);
const loading = ref(false);
const loaded = ref(false);

let seq = 0;

const load = async () => {
  const mine = ++seq;
  loading.value = true;
  try {
    const data = await fetch(route('jasmine.notifications.recent'), {headers: {Accept: 'application/json'}}).then((r) =>
      r.json(),
    );
    if (mine !== seq) return;
    items.value = data?.items ?? [];
    loaded.value = true;
  } catch {
    if (mine !== seq) return;
    items.value = [];
  } finally {
    if (mine === seq) loading.value = false;
  }
};

const open = (n: NotificationData) => router.post(route('jasmine.notifications.open', n.id));

const readAll = () =>
  router.post(
    route('jasmine.notifications.read-all'),
    {},
    {preserveScroll: true, preserveState: true, onSuccess: load},
  );

const bellIcon =
  'M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0';
</script>

<template>
  <Menu as="div" class="relative">
    <MenuButton
      class="relative p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
      :aria-label="$t('notifications.title')"
      @click="load"
    >
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path :d="bellIcon" />
      </svg>
      <span
        v-if="unread"
        class="absolute top-1 inset-e-1 min-w-4 h-4 px-1 rounded-full bg-rose-500 text-[10px] font-semibold leading-4 text-white text-center"
        v-text="badge"
      />
    </MenuButton>

    <transition
      enter-active-class="transition duration-150 ease-out"
      leave-active-class="transition duration-100 ease-in"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <MenuItems
        class="absolute inset-e-0 mt-2 w-80 max-w-[calc(100vw-2rem)] bg-white border border-slate-200 rounded-xl shadow-lg z-50 origin-top-end focus:outline-none overflow-hidden"
      >
        <div class="flex items-center justify-between px-4 py-3 border-b border-slate-100">
          <span class="text-sm font-semibold">{{ $t('notifications.title') }}</span>
          <button
            v-if="unread"
            type="button"
            class="text-xs font-medium text-brand-600 hover:text-brand-700 cursor-pointer"
            @click="readAll"
          >
            {{ $t('notifications.mark_all_read') }}
          </button>
        </div>

        <div class="max-h-96 overflow-y-auto divide-y divide-slate-100">
          <MenuItem v-for="n in items" :key="n.id" v-slot="{active}">
            <button type="button" class="block w-full cursor-pointer" @click="open(n)">
              <NotificationItem :notification="n" :active="active" />
            </button>
          </MenuItem>

          <div v-if="loaded && !items.length" class="px-4 py-10 text-center text-sm text-slate-500">
            {{ $t('notifications.empty') }}
          </div>
          <div v-else-if="!loaded && loading" class="px-4 py-10 text-center text-sm text-slate-400">
            {{ $t('notifications.loading') }}
          </div>
        </div>

        <MenuItem v-slot="{active}">
          <Link
            :href="route('jasmine.notifications.index')"
            class="block px-4 py-2.5 border-t border-slate-100 text-center text-sm font-medium text-slate-700"
            :class="active ? 'bg-slate-50' : ''"
          >
            {{ $t('notifications.view_all') }}
          </Link>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
