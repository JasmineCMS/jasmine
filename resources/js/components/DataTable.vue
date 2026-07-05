<script setup lang="ts" generic="T extends Record<string, any>">
import {computed, ref, watch, onMounted} from 'vue';
import type {Ref} from 'vue';
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue';
import get from 'lodash-es/get';
import debounce from 'lodash-es/debounce';
import {useSortable, moveArrayElement} from '@vueuse/integrations/useSortable';
import DatePicker from '@/js/components/DatePicker.vue';

export interface Column {
  data: string;
  label: string;
  sortable?: boolean;
  searchable?: boolean;
  filtering?: 'date' | Array<string | boolean> | null;
  html?: boolean;
}

export type FilterValue = string | Array<string | boolean> | null;

export interface QueryState {
  filters: Record<string, FilterValue>;
  sortBy: string | null;
  sort: 'asc' | 'desc' | null;
  perPage: number | null;
  page: number | null;
  q: string | null;
}

export interface Paginator<T = any> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number | null;
  last_page: number;
  last_page_url: string;
  links: Array<{
    url: string | null;
    label: string;
    page: number | string | null;
    active: boolean;
  }>;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number | null;
  total: number;
}

const props = withDefaults(
  defineProps<{
    title?: string;
    columns: Array<Column>;
    paginator: Paginator<T>;
    perPageOptions?: number[];
    reordering?: boolean;
    rowKey?: string;
  }>(),
  {
    perPageOptions: () => [10, 25, 50, 100],
    reordering: false,
    rowKey: 'id',
  },
);

const keyOf = (row: T): string | number => row[props.rowKey ?? 'id'];

const emit = defineEmits<{reorder: [ids: Array<string | number>]}>();

const query = defineModel<QueryState>('query');

const cols = computed(() => props.columns);

const tbody = ref<HTMLElement | null>(null);
const rows = ref<T[]>([...props.paginator.data]) as Ref<T[]>;
watch(
  () => props.paginator.data,
  (d) => (rows.value = [...d]),
);

// pool-permutation is collision-safe, but a search makes drag semantics confusing,
// so we keep handles disabled while a query is active.
const dragActive = computed(() => props.reordering && !query.value?.q);

const {option} = useSortable(tbody, rows, {
  handle: '.dnd-handle',
  animation: 150,
  ghostClass: 'opacity-40',
  disabled: true,
  onUpdate: async (e: {oldIndex?: number; newIndex?: number}) => {
    await moveArrayElement(rows, e.oldIndex!, e.newIndex!);
    emit(
      'reorder',
      rows.value.map((r) => keyOf(r)),
    );
  },
});

onMounted(() => option('disabled', !dragActive.value));
watch(dragActive, (on) => option('disabled', !on));

const searchable = computed((): boolean => props.columns.some((c) => c.searchable));

const isFilterable = (col: Column): boolean => col.filtering === 'date' || Array.isArray(col.filtering);

const hasActiveFilter = (col: Column): boolean => {
  const v = query.value?.filters?.[col.data];
  return Array.isArray(v) ? v.length > 0 : v != null && v !== '';
};

const getValue = (row: T, col: Column) => get(row, col.data);

// --- Search ---
const searchPhrase = ref<string>(query.value?.q ?? '');

const pushSearch = debounce((val: string) => {
  if (!query.value) return;
  if ((query.value.q ?? '') === val) return;
  query.value = {...query.value, q: val || null, page: 1};
}, 300);

watch(searchPhrase, (val) => pushSearch(val));

watch(
  () => query.value?.q,
  (val) => {
    if ((val ?? '') !== searchPhrase.value) searchPhrase.value = val ?? '';
  },
);

// --- Sorting ---
const sortStateFor = (col: Column): 'asc' | 'desc' | null => {
  if (!query.value || query.value.sortBy !== col.data) return null;
  return query.value.sort;
};

const cycleSort = (col: Column) => {
  if (!col.sortable || !query.value) return;
  const cur = query.value;
  if (cur.sortBy !== col.data) query.value = {...cur, sortBy: col.data, sort: 'asc', page: 1};
  else if (cur.sort === 'asc') query.value = {...cur, sort: 'desc', page: 1};
  else query.value = {...cur, sortBy: null, sort: null, page: 1};
};

// --- Filtering ---
const filterValue = (col: Column): FilterValue => query.value?.filters?.[col.data] ?? null;

const filterArray = (col: Column): Array<string | boolean> => {
  const v = filterValue(col);
  return Array.isArray(v) ? v : [];
};

const isSelected = (col: Column, opt: string | boolean): boolean =>
  filterArray(col).some((v) => String(v) === String(opt));

const toggleValue = (col: Column, opt: string | boolean) => {
  const cur = filterArray(col);
  const next = isSelected(col, opt) ? cur.filter((v) => String(v) !== String(opt)) : [...cur, opt];
  setFilter(col, next);
};

const setFilter = (col: Column, val: FilterValue) => {
  if (!query.value) return;
  const next = {...(query.value.filters ?? {})};
  const isEmpty = val === null || val === '' || (Array.isArray(val) && val.length === 0);
  if (isEmpty) delete next[col.data];
  else next[col.data] = val;
  query.value = {...query.value, filters: next, page: 1};
};

// --- Active filter chips ---
interface FilterChip {
  key: string;
  label: string;
  text: string;
  remove: () => void;
}

const clearFilter = (data: string) => {
  if (!query.value) return;
  const next = {...(query.value.filters ?? {})};
  delete next[data];
  query.value = {...query.value, filters: next, page: 1};
};

const removeValue = (data: string, value: string | boolean) => {
  if (!query.value) return;
  const cur = query.value.filters?.[data];
  if (!Array.isArray(cur)) return clearFilter(data);
  const next = cur.filter((v) => String(v) !== String(value));
  const filters = {...query.value.filters};
  if (next.length) filters[data] = next;
  else delete filters[data];
  query.value = {...query.value, filters, page: 1};
};

const clearAllFilters = () => {
  if (!query.value) return;
  query.value = {...query.value, filters: {}, page: 1};
};

const activeChips = computed<FilterChip[]>(() => {
  const out: FilterChip[] = [];
  const filters = query.value?.filters ?? {};
  for (const [data, val] of Object.entries(filters)) {
    const col = cols.value.find((c) => c.data === data);
    const label = col?.label ?? data;
    if (Array.isArray(val)) {
      if (col?.filtering === 'date') {
        const text = val.filter(Boolean).map(String).join(' – ');
        if (text) out.push({key: data, label, text, remove: () => clearFilter(data)});
      } else {
        for (const v of val) {
          out.push({key: `${data}::${String(v)}`, label, text: String(v), remove: () => removeValue(data, v)});
        }
      }
    } else if (val != null && val !== '') {
      out.push({key: data, label, text: String(val), remove: () => clearFilter(data)});
    }
  }
  return out;
});

// --- Pagination ---
const setPerPage = (n: number) => {
  if (!query.value || Number.isNaN(n) || query.value.perPage === n) return;
  query.value = {...query.value, perPage: n, page: 1};
};

const goToPage = (page: number | string | null) => {
  if (page === null || page === undefined) return;
  const n = typeof page === 'string' ? parseInt(page, 10) : page;
  if (Number.isNaN(n) || !query.value || query.value.page === n) return;
  query.value = {...query.value, page: n};
};
</script>

<template>
  <div>
    <!-- Toolbar -->
    <div v-if="title || $slots.title || $slots.actions || searchable" class="mb-4 flex flex-wrap items-center gap-3">
      <!-- Title -->
      <div v-if="title || $slots.title" class="min-w-0">
        <slot name="title">
          <h1
            class="font-display text-2xl leading-none font-semibold text-gray-900 truncate dark:text-white"
            v-text="title"
          />
        </slot>
      </div>

      <!-- Search -->
      <div v-if="searchable" class="me-auto relative w-full sm:w-auto sm:max-w-xs sm:flex-1 max-md:order-3">
        <div class="pointer-events-none absolute inset-y-0 inset-s-0 flex items-center ps-3">
          <svg
            class="h-4 w-4 text-gray-400 dark:text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m21 21-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
            />
          </svg>
        </div>
        <input
          v-model="searchPhrase"
          type="search"
          :placeholder="$t('DataTable.search_items', {items: title})"
          class="block w-full rounded-md border-0 bg-white py-1.5 ps-9 pe-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 dark:bg-gray-800 dark:text-white dark:ring-white/10 dark:placeholder:text-gray-500 dark:focus:ring-brand-500"
        />
      </div>

      <!-- Actions -->
      <div v-if="$slots.actions" class="flex flex-wrap items-center gap-3 w-full sm:w-auto">
        <slot name="actions" />
      </div>
    </div>

    <!-- Active filters -->
    <div v-if="activeChips.length" class="mb-3 flex flex-wrap items-center gap-2">
      <span class="text-xs font-medium text-gray-500 dark:text-gray-400" v-text="$t('DataTable.filters') + ':'" />
      <span
        v-for="chip in activeChips"
        :key="chip.key"
        class="inline-flex items-center gap-1.5 rounded-full bg-brand-50 py-1 ps-2.5 pe-1 text-xs text-brand-700 ring-1 ring-inset ring-brand-200 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-500/20"
      >
        <span class="text-brand-500/80 dark:text-brand-400/70" v-text="`${chip.label}:`" />
        <span class="font-medium" v-text="chip.text" />
        <button
          type="button"
          @click="chip.remove()"
          :aria-label="$t('DataTable.remove_chip_filter', {label: chip.label})"
          class="inline-flex size-4 items-center justify-center rounded-full text-brand-500 transition-colors hover:bg-brand-100 hover:text-brand-700 dark:hover:bg-brand-500/20 cursor-pointer"
        >
          <svg
            class="size-3"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-width="2.2"
            aria-hidden="true"
          >
            <path d="M6 6l8 8M14 6l-8 8" stroke-linecap="round" />
          </svg>
        </button>
      </span>
      <button
        type="button"
        @click="clearAllFilters"
        class="text-xs font-medium text-gray-500 underline-offset-2 hover:text-gray-700 hover:underline dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer"
        v-text="$t('DataTable.clear_filters')"
      />
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="min-w-full border-separate border-spacing-0">
        <thead>
          <!-- Header row -->
          <tr>
            <th
              v-if="reordering"
              scope="col"
              class="sticky top-0 z-10 w-12 bg-white/75 px-4 py-3.5 backdrop-blur-sm dark:bg-gray-900/75"
            />
            <th
              v-for="col in cols"
              :key="col.data"
              scope="col"
              class=""
              :class="[
                'sticky top-0 z-10',
                'ltr:first:rounded-l-md rtl:first:rounded-r-md ltr:last:rounded-r-md rtl:last:rounded-l-md',
                'bg-white/75 px-4 py-3.5 text-start text-sm font-semibold text-gray-900',
                'backdrop-blur-sm backdrop-filter dark:border-white/15 dark:bg-gray-900/75 dark:text-white',
              ]"
            >
              <div class="inline-flex items-center gap-1.5">
                <button
                  v-if="col.sortable && !reordering"
                  type="button"
                  class="group inline-flex items-center gap-1.5 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer"
                  @click="cycleSort(col)"
                >
                  <slot :name="`h_${col.data}`" :col="col"><span v-text="col.label" /></slot>
                  <span class="inline-flex h-4 w-4 items-center justify-center">
                    <svg
                      v-if="sortStateFor(col) === 'asc'"
                      class="h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M10 5l5 7H5l5-7z" />
                    </svg>
                    <svg
                      v-else-if="sortStateFor(col) === 'desc'"
                      class="h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M10 15l-5-7h10l-5 7z" />
                    </svg>
                    <svg
                      v-else
                      class="h-3 w-3 text-gray-300 group-hover:text-gray-400 dark:text-gray-600 dark:group-hover:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M10 3l4 5H6l4-5zM10 17l-4-5h8l-4 5z" />
                    </svg>
                  </span>
                </button>
                <slot v-else :name="`h_${col.data}`" :col="col"><span v-text="col.label" /></slot>

                <Popover v-if="isFilterable(col)" as="div" class="relative inline-flex">
                  <PopoverButton
                    :title="$t('DataTable.filter_item', {item: col.label})"
                    :aria-label="$t('DataTable.filter_item', {item: col.label})"
                    class="inline-flex size-6 items-center justify-center rounded-md transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
                    :class="
                      hasActiveFilter(col)
                        ? 'bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400'
                        : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5'
                    "
                  >
                    <svg class="size-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V1.34a.75.75 0 0 1 .628-.74Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </PopoverButton>

                  <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-95"
                  >
                    <PopoverPanel
                      class="absolute inset-e-0 top-full z-30 mt-2 w-64 origin-top-end rounded-lg border border-gray-200 bg-white p-1.5 font-normal shadow-lg ring-1 ring-black/5 dark:border-white/10 dark:bg-gray-900 dark:ring-white/10"
                    >
                      <!-- Date filter -->
                      <DatePicker
                        v-if="col.filtering === 'date'"
                        :modelValue="filterArray(col) as Array<any>"
                        @update:model-value="(v) => setFilter(col, v as Array<string>)"
                      />

                      <!-- Multi-select filter -->
                      <div v-else class="max-h-60 overflow-auto">
                        <button
                          v-for="opt in col.filtering as Array<string | boolean>"
                          :key="String(opt)"
                          type="button"
                          @click="toggleValue(col, opt)"
                          class="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-start text-xs text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5"
                        >
                          <span
                            class="flex size-4 shrink-0 items-center justify-center rounded border transition-colors"
                            :class="
                              isSelected(col, opt)
                                ? 'border-brand-600 bg-brand-600 text-white'
                                : 'border-gray-300 dark:border-white/20'
                            "
                          >
                            <svg
                              v-if="isSelected(col, opt)"
                              class="size-3"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                          <span class="truncate">
                            <slot :name="`f_${col.data}`" :col="col" :opt="opt">{{ String(opt) }}</slot>
                          </span>
                        </button>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>
              </div>
            </th>
          </tr>
        </thead>
        <tbody ref="tbody">
          <tr
            v-for="(row, idx) in rows"
            :key="keyOf(row) ?? idx"
            class="group transition-colors hover:bg-slate-50 dark:hover:bg-white/5"
          >
            <td v-if="reordering" class="border-b border-slate-100 px-4 py-3.5 dark:border-white/5">
              <button
                type="button"
                class="dnd-handle inline-flex size-6 items-center justify-center rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                :class="dragActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-not-allowed opacity-40'"
                :title="dragActive ? '' : $t('DataTable.clear_search_to_reorder')"
              >
                <svg class="size-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    d="M7 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                </svg>
              </button>
            </td>

            <td
              v-for="col in cols"
              :key="col.data"
              class="border-b border-slate-100 px-4 py-3.5 text-sm font-medium whitespace-nowrap text-gray-900 dark:border-white/5 dark:text-white"
            >
              <slot :name="col.data" :col="col" :row="row" :val="getValue(row, col)">
                <span v-if="col.html" v-html="getValue(row, col)" />
                <span v-else v-text="getValue(row, col)" />
              </slot>
            </td>
          </tr>

          <tr v-if="rows.length === 0">
            <td
              :colspan="cols.length + (reordering ? 1 : 0)"
              class="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400"
            >
              {{ $t('DataTable.no_results_found') }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Footer -->
    <div
      class="mt-4 flex flex-col gap-3 border-t border-gray-200 pt-3 sm:flex-row sm:items-center sm:justify-between dark:border-white/10"
    >
      <div class="flex items-center gap-3">
        <i18n-t
          keypath="DataTable.showing"
          tag="p"
          scope="global"
          class="hidden text-sm text-gray-700 sm:block dark:text-gray-300"
        >
          <template #from
            ><span class="font-medium tnum">{{ paginator.from ?? 0 }}</span></template
          >
          <template #to
            ><span class="font-medium tnum">{{ paginator.to ?? 0 }}</span></template
          >
          <template #total
            ><span class="font-medium tnum">{{ paginator.total }}</span></template
          >
        </i18n-t>

        <select
          v-if="query"
          :value="query.perPage ?? paginator.per_page"
          @change="setPerPage(Number(($event.target as HTMLSelectElement).value))"
          class="cursor-pointer rounded-md border-0 bg-white py-1 ltr:ps-2 ltr:pe-9 rtl:pe-2 rtl:ps-9 text-sm text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-600 dark:bg-gray-800 dark:text-gray-300 dark:ring-white/10 dark:hover:bg-gray-700"
        >
          <option v-for="n in perPageOptions" :key="n" :value="n">
            {{ $t('DataTable.per_page', {n}) }}
          </option>
        </select>
      </div>

      <nav v-if="paginator.last_page > 1" class="flex items-center gap-1" :aria-label="$t('DataTable.pagination')">
        <!-- Previous -->
        <button
          type="button"
          :disabled="paginator.current_page <= 1"
          @click="goToPage(paginator.current_page - 1)"
          :aria-label="$t('DataTable.previous')"
          class="inline-flex size-9 items-center justify-center rounded-lg text-gray-500 transition enabled:cursor-pointer enabled:hover:bg-gray-100 enabled:hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40 dark:text-gray-400 dark:enabled:hover:bg-white/5 dark:enabled:hover:text-white"
        >
          <svg
            class="size-4 rtl:-scale-x-100"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5l-5 5 5 5" />
          </svg>
        </button>

        <!-- Page numbers (sm and up) -->
        <div class="hidden items-center gap-1 sm:flex">
          <template v-for="(link, i) in paginator.links.slice(1, -1)" :key="i">
            <span
              v-if="!link.url && !link.active"
              class="inline-flex size-9 items-center justify-center text-sm text-gray-400 select-none dark:text-gray-600"
            >
              …
            </span>
            <button
              v-else
              type="button"
              :disabled="link.active"
              :aria-current="link.active ? 'page' : undefined"
              @click="goToPage(link.page)"
              class="inline-flex size-9 items-center justify-center rounded-lg text-sm font-medium tabular-nums transition"
              :class="
                link.active
                  ? 'bg-brand-600 text-white shadow-sm shadow-brand-600/20 dark:bg-brand-500'
                  : 'cursor-pointer text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white'
              "
              v-text="link.label"
            />
          </template>
        </div>

        <!-- Compact indicator (mobile) -->
        <span class="px-2 text-sm tabular-nums text-gray-600 sm:hidden dark:text-gray-300">
          {{ paginator.current_page }} / {{ paginator.last_page }}
        </span>

        <!-- Next -->
        <button
          type="button"
          :disabled="paginator.current_page >= paginator.last_page"
          @click="goToPage(paginator.current_page + 1)"
          :aria-label="$t('DataTable.next')"
          class="inline-flex size-9 items-center justify-center rounded-lg text-gray-500 transition enabled:cursor-pointer enabled:hover:bg-gray-100 enabled:hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40 dark:text-gray-400 dark:enabled:hover:bg-white/5 dark:enabled:hover:text-white"
        >
          <svg
            class="size-4 rtl:-scale-x-100"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M8 5l5 5-5 5" />
          </svg>
        </button>
      </nav>
    </div>
  </div>
</template>
