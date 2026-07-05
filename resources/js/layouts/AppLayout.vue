<script setup lang="ts">
import {computed, inject, onBeforeUnmount, onMounted, ref, watch} from 'vue';
import {Link, router, usePage} from '@inertiajs/vue3';
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue';
import {Dialog, DialogPanel} from '@headlessui/vue';
import {TransitionRoot, TransitionChild} from '@headlessui/vue';
import {Combobox, ComboboxInput, ComboboxOption, ComboboxOptions} from '@headlessui/vue';

import type {route as routeFn} from 'ziggy-js';

import {useFlashSwal} from '@/js/composeables/useFlashSwal.ts';
import SidebarMenu from '@/js/components/SidebarMenu.vue';
import LocaleLinks from '@/js/components/LocaleLinks.vue';

import MascotHead from '@/svg/mascot-head.svg';

const route = inject('route') as typeof routeFn;

useFlashSwal();

const user = computed(() => usePage().props._user);
const info = computed(() => usePage().props._info);

/* ---------- State ---------- */
const sidebarCollapsed = ref(false);
const mobileOpen = ref(false);

const toggleSidebar = () => (sidebarCollapsed.value = !sidebarCollapsed.value);
const closeMobile = () => (mobileOpen.value = false);

/* ---------- Search ---------- */
type SearchItem = {title: string; url: string};
type SearchGroup = {key: string; label: string; icon: string; items: SearchItem[]};

const searchOpen = ref(false);
const searchQuery = ref('');
const searchGroups = ref<SearchGroup[]>([]);
const searchLoading = ref(false);

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/i.test(navigator.platform || navigator.userAgent);

let searchDebounce: ReturnType<typeof setTimeout> | undefined;
let searchSeq = 0;

const runSearch = async (q: string) => {
  const seq = ++searchSeq;
  searchLoading.value = true;
  try {
    const data = await fetch(route('jasmine.search', {q})).then((r) => r.json());
    if (seq !== searchSeq) return;
    searchGroups.value = data?.groups ?? [];
  } catch {
    if (seq !== searchSeq) return;
    searchGroups.value = [];
  } finally {
    if (seq === searchSeq) searchLoading.value = false;
  }
};

watch(searchQuery, (q) => {
  clearTimeout(searchDebounce);
  const query = q.trim();

  if (query.length < 2) {
    searchSeq++; // invalidate in-flight requests
    searchGroups.value = [];
    searchLoading.value = false;
    return;
  }

  searchDebounce = setTimeout(() => runSearch(query), 250);
});

const resetSearch = () => {
  clearTimeout(searchDebounce);
  searchSeq++;
  searchQuery.value = '';
  searchGroups.value = [];
  searchLoading.value = false;
};

const onSearchSelect = (item: SearchItem | null) => {
  if (!item) return;
  searchOpen.value = false;
  router.visit(item.url);
};

const onGlobalKeydown = (e: KeyboardEvent) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    searchOpen.value = !searchOpen.value;
  }
};

onMounted(() => window.addEventListener('keydown', onGlobalKeydown));
onBeforeUnmount(() => window.removeEventListener('keydown', onGlobalKeydown));

/* ---------- Icon paths (Heroicons outline) for fixed chrome ---------- */
const icons = {
  chevronStart: 'M15.75 19.5 8.25 12l7.5-7.5',
  search: 'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
  globe:
    'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418',
  check: 'm4.5 12.75 6 6 9-13.5',
  menu: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5',
  close: 'M6 18 18 6M6 6l12 12',
  home: 'm2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
};
</script>

<template>
  <div class="h-screen flex bg-slate-50 text-slate-900 overflow-hidden">
    <TransitionRoot as="template" :show="mobileOpen">
      <Dialog class="relative z-40 sm:hidden" @close="mobileOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-slate-900/40" aria-hidden="true" />
        </TransitionChild>

        <div class="fixed inset-y-0 inset-s-0 flex max-w-full">
          <TransitionChild
            as="template"
            enter="transition-transform duration-300 ease-in-out"
            enter-from="-translate-x-full rtl:translate-x-full"
            enter-to="translate-x-0"
            leave="transition-transform duration-200 ease-in-out"
            leave-from="translate-x-0"
            leave-to="-translate-x-full rtl:translate-x-full"
          >
            <DialogPanel class="w-64 bg-ink-900 text-slate-300 flex flex-col">
              <div class="h-16 flex items-center px-4 border-b border-white/5">
                <MascotHead
                  class="w-9 h-9 rounded-lg bg-linear-to-br from-brand-500 to-magenta-500 shrink-0 shadow-lg shadow-brand-500/25"
                />
                <span class="ms-3 font-display text-xl font-semibold tracking-tight text-white"> Jasmine </span>
                <button
                  type="button"
                  @click="mobileOpen = false"
                  class="ms-auto p-1.5 rounded-lg text-white/60 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                  :aria-label="$t('layout.close_menu')"
                >
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path :d="icons.close" />
                  </svg>
                </button>
              </div>

              <SidebarMenu @navigate="closeMobile" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <TransitionRoot as="template" :show="searchOpen" @after-leave="resetSearch">
      <Dialog class="relative z-50" @close="searchOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity duration-200"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity duration-150"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-slate-900/40" aria-hidden="true" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-20">
          <TransitionChild
            as="template"
            enter="transition duration-200 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="transition duration-150 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-slate-900/5"
            >
              <Combobox nullable @update:model-value="onSearchSelect">
                <div class="relative">
                  <svg
                    class="absolute inset-s-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path :d="icons.search" />
                  </svg>
                  <ComboboxInput
                    class="w-full h-12 ps-11 pe-10 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none border-0 focus:ring-0"
                    :placeholder="$t('layout.search_placeholder')"
                    autocomplete="off"
                    @change="searchQuery = $event.target.value"
                  />
                  <svg
                    v-if="searchLoading"
                    class="absolute inset-e-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3a9 9 0 1 0 9 9" />
                  </svg>
                </div>

                <ComboboxOptions
                  v-if="searchGroups.length"
                  static
                  class="max-h-80 overflow-y-auto border-t border-slate-100 pb-2"
                >
                  <template v-for="group in searchGroups" :key="group.key">
                    <div
                      class="flex items-center gap-1.5 px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-slate-400"
                    >
                      <i v-if="group.icon" :class="group.icon" />
                      {{ group.label }}
                    </div>
                    <ComboboxOption
                      v-for="item in group.items"
                      :key="item.url"
                      :value="item"
                      v-slot="{active}"
                      as="template"
                    >
                      <li
                        :class="[
                          active ? 'bg-brand-50/60 text-slate-900' : 'text-slate-700',
                          'list-none px-4 py-2 text-sm cursor-pointer transition-colors',
                        ]"
                      >
                        {{ item.title }}
                      </li>
                    </ComboboxOption>
                  </template>
                </ComboboxOptions>

                <div
                  v-else-if="!searchLoading && searchQuery.trim().length >= 2"
                  class="border-t border-slate-100 px-4 py-10 text-center text-sm text-slate-500"
                >
                  {{ $t('layout.search_no_results') }}
                </div>

                <div v-else class="border-t border-slate-100 px-4 py-10 text-center text-sm text-slate-400">
                  {{ $t('layout.search_hint') }}
                </div>
              </Combobox>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <aside
      class="hidden sm:flex bg-ink-900 text-slate-300 flex-col shrink-0 transition-[width] duration-300 ease-in-out"
      :class="sidebarCollapsed ? 'w-16' : 'w-64'"
    >
      <div class="h-16 flex items-center px-4 border-b border-white/5">
        <MascotHead
          class="w-9 h-9 rounded-lg bg-linear-to-br from-brand-500 to-magenta-500 shrink-0 shadow-lg shadow-brand-500/25"
        />
        <span v-if="!sidebarCollapsed" class="ms-3 font-display text-xl font-semibold tracking-tight text-white">
          Jasmine
        </span>
      </div>

      <SidebarMenu :collapsed="sidebarCollapsed" />

      <button
        type="button"
        @click="toggleSidebar"
        class="hidden sm:flex h-12 items-center justify-center border-t border-white/5 text-white/45 hover:bg-white/5 hover:text-white transition-colors shrink-0 cursor-pointer"
        :aria-label="sidebarCollapsed ? $t('layout.expand_sidebar') : $t('layout.collapse_sidebar')"
      >
        <svg
          class="w-5 h-5 transition-transform duration-200"
          :class="sidebarCollapsed ? 'rtl:-scale-x-100' : 'rotate-180 rtl:-scale-x-100'"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path :d="icons.chevronStart" />
        </svg>
      </button>
    </aside>

    <div class="flex-1 flex flex-col min-w-0">
      <header class="h-16 bg-white border-b border-slate-200 flex items-center gap-2 px-3 sm:px-4 shrink-0">
        <button
          type="button"
          @click="mobileOpen = true"
          class="sm:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          :aria-label="$t('layout.open_menu')"
        >
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path :d="icons.menu" />
          </svg>
        </button>

        <button
          type="button"
          @click="searchOpen = true"
          class="relative flex-1 max-w-md flex items-center gap-2 ps-9 pe-3 py-2 bg-slate-100 hover:bg-slate-200/70 border border-transparent rounded-lg text-sm text-slate-400 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30"
        >
          <svg
            class="absolute inset-s-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path :d="icons.search" />
          </svg>
          <span class="truncate">{{ $t('layout.search_placeholder') }}</span>
          <kbd
            class="ms-auto hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-slate-200 bg-white text-[11px] font-medium text-slate-400"
          >
            {{ isMac ? '⌘K' : 'Ctrl K' }}
          </kbd>
        </button>

        <div class="ms-auto flex items-center gap-1">
          <Menu as="div" class="relative" v-slot="{close}">
            <MenuButton
              class="flex items-center gap-1.5 px-2 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
              :aria-label="$t('layout.change_language')"
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
                <path :d="icons.globe" />
              </svg>
              <span class="text-xs font-semibold uppercase tracking-wide">
                {{ $page.props._locale }}
              </span>
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
                class="absolute inset-e-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg py-1 z-50 origin-top-end max-h-80 overflow-y-auto focus:outline-none"
              >
                <LocaleLinks>
                  <template #item="{locale, active, change, href}">
                    <MenuItem v-slot="{active: focused}">
                      <a
                        :href="href"
                        :lang="locale"
                        :hreflang="locale"
                        @click.prevent="
                          change();
                          close();
                        "
                        :class="[
                          focused ? 'bg-slate-50' : '',
                          active ? 'bg-brand-50/60' : '',
                          'w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 transition-colors cursor-pointer',
                        ]"
                      >
                        <span class="flex-1 text-start">{{ $t('locales.' + locale) }}</span>
                        <svg
                          v-if="active"
                          class="w-4 h-4 text-brand-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path :d="icons.check" />
                        </svg>
                      </a>
                    </MenuItem>
                  </template>
                </LocaleLinks>
              </MenuItems>
            </transition>
          </Menu>

          <Menu as="div" class="relative">
            <MenuButton
              class="flex items-center gap-2 p-1 pe-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <img class="w-8 h-8 rounded-full shadow-sm" :src="user.avatar_url" :alt="user.name" />
              <div class="hidden sm:block text-start">
                <div class="text-sm font-medium leading-tight" v-text="user.name" />
              </div>
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
                class="absolute inset-e-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-lg py-1 z-50 origin-top-end focus:outline-none"
              >
                <div class="px-4 py-3 border-b border-slate-100">
                  <div class="text-sm font-medium" v-text="user.name" />
                  <div class="text-xs text-slate-500 truncate" v-text="user.email" />
                </div>
                <MenuItem v-slot="{active}">
                  <Link
                    :href="route('jasmine.profile.show')"
                    :class="[active ? 'bg-slate-50' : '', 'block px-4 py-2 text-sm text-slate-700']"
                  >
                    {{ $t('layout.profile_settings') }}
                  </Link>
                </MenuItem>
                <div class="my-1 border-t border-slate-100" />
                <MenuItem v-slot="{active}">
                  <Link
                    :href="route('jasmine.logout')"
                    method="post"
                    class="text-start w-full block px-4 py-2 text-sm text-rose-600 cursor-pointer"
                    :class="[active ? 'bg-rose-50' : '']"
                  >
                    {{ $t('layout.sign_out') }}
                  </Link>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </header>

      <nav
        v-if="$slots.breadcrumbs || $slots.actions"
        class="h-12 bg-white border-b border-slate-200 flex items-center gap-3 px-3 sm:px-4 shrink-0"
        :aria-label="$t('layout.breadcrumb')"
      >
        <ol class="flex flex-1 items-center gap-1.5 min-w-0 text-sm overflow-x-auto no-scrollbar">
          <li class="shrink-0">
            <Link
              :href="route('jasmine.dashboard')"
              class="flex items-center text-slate-500 hover:text-slate-900 transition-colors"
              :aria-label="$t('layout.home')"
            >
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path :d="icons.home" />
              </svg>
            </Link>
          </li>
          <slot name="breadcrumbs" />
        </ol>

        <div class="ms-auto flex shrink-0 items-center gap-2">
          <slot name="actions" />
        </div>
      </nav>

      <main class="flex-1 overflow-y-auto p-4 lg:p-6">
        <slot>
          <div class="max-w-5xl">
            <h1 class="text-2xl font-semibold tracking-tight">{{ $t('layout.welcome_back') }}</h1>
            <p class="mt-1 text-slate-600">{{ $t('layout.dashboard_subtitle') }}</p>

            <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="card in [$t('layout.active_projects'), $t('layout.open_tasks'), $t('layout.team_members')]"
                :key="card"
                class="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-sm transition-shadow"
              >
                <div class="text-sm font-medium text-slate-500">{{ card }}</div>
                <div class="mt-2 text-3xl font-semibold tracking-tight">
                  {{ Math.floor(Math.random() * 50) + 10 }}
                </div>
                <div class="mt-1 text-xs text-emerald-600">{{ $t('layout.stat_increase') }}</div>
              </div>
            </div>

            <div class="mt-6 space-y-4">
              <div v-for="n in 12" :key="n" class="bg-white border border-slate-200 rounded-xl p-5">
                <div class="text-sm font-medium">{{ $t('layout.activity_item') }} #{{ n }}</div>
                <p class="mt-1 text-sm text-slate-600">
                  {{ $t('layout.activity_desc') }}
                </p>
              </div>
            </div>
          </div>
        </slot>
      </main>

      <footer
        class="bg-white border-t border-slate-200 px-4 sm:px-6 py-3 sm:py-0 sm:h-12 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-500 shrink-0"
      >
        <a href="https://github.com/JasmineCMS/jasmine" target="_blank">
          <i class="fab fa-github" />
          &nbsp;
          <b>JasmineCMS</b>
          {{ info.jasmine }}
        </a>

        <div class="flex items-center gap-4">
          <template v-for="(v, k) in info">
            <div v-if="k !== 'jasmine'">
              <b class="capitalize" v-text="`${k}: `" />
              <span v-text="v" />
            </div>
          </template>
        </div>

        <div class="flex items-center gap-4" />
      </footer>
    </div>
  </div>
</template>
