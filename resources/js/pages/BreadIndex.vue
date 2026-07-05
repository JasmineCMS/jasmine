<script setup lang="ts">
import {Head, Link, router, usePage} from '@inertiajs/vue3';
import {computed, inject, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import Swal from '@/js/lib/Swal';
import type {Method} from '@inertiajs/core';
import type {route as routeFn} from 'ziggy-js';
import AppLayout from '@/js/layouts/AppLayout.vue';
import DataTable from '@/js/components/DataTable.vue';
import type {QueryState, Column, Paginator} from '@/js/components/DataTable.vue';
import Breadcrumb from '@/js/components/Breadcrumb.vue';
import {useLabel} from '@/js/composeables/useLabel.ts';

interface BrowseAction {
  name: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  bulk: boolean;
  icon?: string;
  url?: string;
  target: '_self' | '_blank' | '_top' | '_parent';
  confirm?: {[key: string]: {[key: string]: string}};
  label: string;
  classes?: string;
}

interface BreadRow {
  id?: string | number;
  jasmine: {actions: BrowseAction[]};

  [key: string]: any;
}

const props = defineProps<{
  breadable: {
    key: string;
    singular: string;
    plural: string;
    sortable: false | {by: string; group_by: string | null; groups: {v: any; l?: string}[] | null};
    columns: Column[];
  };
  can: Array<'b' | 'r' | 'e' | 'a' | 'd'>;
  locales: Array<string>;
  locale: null | string;
  paginator: Paginator<BreadRow>;
}>();

const route = inject('route') as typeof routeFn;

const page = usePage();
const {t} = useI18n();

const env = computed(() => page.props._env);

const q = computed<QueryState>({
  get(): QueryState {
    const sp = new URLSearchParams(page.url.split('?')[1] || '');

    const filters: Record<string, any> = {};
    for (const [k, v] of sp.entries()) {
      // Look for keys matching exactly "filters[something]"
      const match = k.match(/^filters\[(.*?)]$/);
      if (!match?.[1]) continue;

      const key = match[1];
      // Split by comma and drop any empty strings
      const val = (v || '').split(',').filter(Boolean);
      if (val.length > 0) filters[key] = val;
    }

    const sortBy = sp.get('sortBy');

    return {
      filters,
      sortBy: sortBy ?? null,
      sort: sortBy ? (sp.get('sort') === 'desc' ? 'desc' : 'asc') : null,
      perPage: parseInt(sp.get('perPage') ?? '') || null,
      page: parseInt(sp.get('page') ?? '') || null,
      q: sp.get('q') ?? null,
    };
  },
  set(v: QueryState) {
    const data: Record<string, any> = {};

    // Preserve url params
    for (const [k, val] of new URLSearchParams(page.url.split('?')[1] || '').entries()) {
      if (!['sortBy', 'sort', 'perPage', 'page', 'q'].includes(k) && !k.startsWith('filters[')) data[k] = val;
    }

    if (v.sortBy) data.sortBy = v.sortBy;
    if (v.sort === 'desc') data.sort = v.sort;
    if (v.perPage && v.perPage !== 10) data.perPage = v.perPage;
    if ((v.page || 1) > 1) data.page = v.page;
    if (v.q) data.q = v.q;

    const filters: Record<string, string> = {};
    for (const [k, val] of Object.entries(v.filters)) {
      if (Array.isArray(val)) {
        if (val.length) filters[k] = val.join(',');
      } else if (typeof val === 'string' && val !== '') {
        filters[k] = val;
      }
    }
    if (Object.keys(filters).length) data.filters = filters;

    router.get(page.url.split('?')[0], data, {preserveState: true, replace: true, only: ['paginator']});
  },
});

const breadLocale = computed<string | null>({
  get(): string | null {
    return new URLSearchParams(page.url.split('?')[1] || '').get('_locale') ?? props.locale;
  },
  set(v: string | null) {
    const data: Record<string, any> = {};

    // Preserve every other url param except `_locale` and `page`.
    for (const [k, val] of new URLSearchParams(page.url.split('?')[1] || '').entries()) {
      if (k !== '_locale' && k !== 'page') data[k] = val;
    }

    if (v) data._locale = v;

    // No `only:` here — the rows, the `locale` prop, and possibly columns
    // all change with a locale switch, so let Inertia refresh the full page.
    router.get(page.url.split('?')[0], data, {preserveState: true, replace: true});
  },
});

const parseLabel = useLabel();

const columns = computed<Column[]>((): Column[] =>
  [...props.breadable.columns, {data: 'j_actions', label: 'actions'}].map((i: Column) => ({
    ...i,
    label: parseLabel(i.label, props.breadable.key, 'columns'),
  })),
);

const busyActions = ref<Set<string>>(new Set());

const actionKey = (action: BrowseAction) => `${action.name}::${action.url ?? ''}`;

const actuate = async (action: BrowseAction) => {
  if (!action.url) return;

  const key = actionKey(action);
  if (busyActions.value.has(key)) return;

  if (action.confirm) {
    const [msg, params] = Object.entries(action.confirm)[0] ?? [];
    const {isConfirmed} = await Swal.fire({
      title: t('BreadIndex.confirm'),
      text: t(msg, params ?? {}),
      showCancelButton: true,
    });
    if (!isConfirmed) return;
  }

  busyActions.value.add(key);
  router.visit(action.url, {
    method: action.method.toLowerCase() as Method,
    preserveScroll: true,
    onFinish: () => busyActions.value.delete(key),
  });
};

const buildAction = (action: BrowseAction) => {
  if (action.method === 'GET')
    return {
      component: action.target === '_self' ? Link : 'a',
      props: {
        href: action.url,
        target: action.target,
      },
    };
  else
    return {
      component: 'button',
      props: {
        type: 'button',
        disabled: busyActions.value.has(actionKey(action)),
        onClick: () => actuate(action),
      },
    };
};

const resolveAction = (action: BrowseAction) => ({
  ...buildAction(action),
  title: parseLabel(action.name, props.breadable.key, 'actions'),
  method: action.method,
  classes: action.classes,
  icon: action.icon,
});

const sp = () => new URLSearchParams(page.url.split('?')[1] || '');

const patchUrl = (patch: Record<string, string | number | null | undefined>, only = ['paginator']) => {
  const data: Record<string, any> = {};
  for (const [k, v] of sp().entries()) data[k] = v;
  for (const [k, v] of Object.entries(patch)) {
    if (v === null || v === undefined || v === '') delete data[k];
    else data[k] = String(v);
  }
  router.get(page.url.split('?')[0], data, {preserveState: true, replace: true, only});
};

const sortable = computed(() => props.breadable.sortable);
const groupBy = computed(() => (sortable.value ? sortable.value.group_by : null));
const groups = computed(() => (sortable.value ? (sortable.value.groups ?? []) : []));
const currentGroup = computed(() => sp().get('group'));
const firstGroup = computed(() => (groups.value[0]?.v != null ? String(groups.value[0].v) : null));

const reordering = computed<boolean>({
  get: () => sp().get('reordering') === '1',
  set: (on) =>
    on
      ? patchUrl({
          reordering: '1',
          group: groupBy.value ? (currentGroup.value ?? firstGroup.value) : null,
          q: null,
          sortBy: null,
          sort: null,
          page: null,
        })
      : patchUrl({reordering: null, group: null, page: null}),
});

const setGroup = (v: string) => patchUrl({group: v, page: null});

const onReorder = (ids: Array<string | number>) =>
  router.post(
    route('jasmine.bread.reorder', {breadable: props.breadable.key}),
    {ids},
    {
      preserveScroll: true,
      preserveState: true,
      only: ['paginator'],
    },
  );

const fake = async () => {
  let {isConfirmed, value} = await Swal.fire({
    icon: 'question',
    title: t('BreadIndex.fake_how_many'),
    showCancelButton: true,
    showConfirmButton: true,
    input: 'number',
    inputValue: 1,
  });

  if (!isConfirmed) return;

  router.post(route('jasmine.bread.fake', {breadable: props.breadable.key}), {count: value}, {preserveState: false});
};
</script>

<template>
  <Head :title="parseLabel(breadable.plural, breadable.key)" />
  <AppLayout>
    <template #breadcrumbs>
      <Breadcrumb current>
        {{ parseLabel(breadable.plural, breadable.key) }}
      </Breadcrumb>
    </template>

    <template #actions>
      <div
        v-if="locales.length > 1"
        class="inline-flex flex-wrap items-center rounded-xl border border-gray-200 bg-white p-1 text-sm font-medium"
        role="group"
        :aria-label="$t('BreadIndex.content_locale')"
      >
        <button
          v-for="l in locales"
          :key="l"
          type="button"
          @click="breadLocale = l"
          :aria-pressed="breadLocale === l"
          :title="$t('locales.' + l)"
          :aria-label="$t('locales.' + l)"
          class="px-3 py-0.5 rounded-lg uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 cursor-pointer"
          :class="[breadLocale === l ? 'bg-brand-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900']"
          v-text="l"
        />
      </div>
      <template v-if="sortable">
        <button
          type="button"
          @click="reordering = !reordering"
          class="inline-flex items-center justify-center rounded-xl py-1.5 px-4 text-sm font-medium transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
          :class="
            reordering
              ? 'bg-brand-500 text-white shadow-sm'
              : 'text-gray-600 bg-white border border-gray-300 hover:border-brand-400 hover:text-brand-600'
          "
        >
          {{ reordering ? $t('BreadIndex.done') : $t('BreadIndex.reorder') }}
        </button>

        <select
          v-if="reordering && groupBy"
          :value="currentGroup ?? ''"
          @change="setGroup(($event.target as HTMLSelectElement).value)"
          class="rounded-xl border border-gray-300 bg-white py-1.5 px-3 text-sm text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
        >
          <option v-for="g in groups" :key="String(g.v)" :value="String(g.v)">{{ g.l ?? g.v }}</option>
        </select>
      </template>
      <button
        v-if="can.includes('a') && env !== 'production'"
        type="button"
        @click.prevent="fake"
        :title="$t('BreadIndex.fake')"
        class="inline-flex items-center justify-center rounded-xl py-1.5 px-4 text-sm font-medium text-gray-600 bg-white border border-dashed border-gray-300 transition-colors cursor-pointer hover:border-brand-400 hover:text-brand-600 hover:bg-brand-50/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
      >
        <svg
          class="-ms-1 me-2 h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m12 3 1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" />
          <path d="M18 14.5 18.8 16.5 20.8 17.3 18.8 18.1 18 20.1 17.2 18.1 15.2 17.3 17.2 16.5z" />
        </svg>
        {{ $t('BreadIndex.fake') }}
      </button>
      <Link
        v-if="can.includes('a')"
        :href="route('jasmine.bread.create', {breadable: breadable.key})"
        class="ms-auto inline-flex items-center justify-center rounded-xl py-1.5 px-4 text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 shadow-lg shadow-brand-500/25 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
      >
        <svg
          class="-ms-1 me-2 h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.2"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12h14" stroke-linecap="round" />
        </svg>
        {{ $t('BreadIndex.new_item', {item: parseLabel(breadable.singular, breadable.key)}) }}
      </Link>
    </template>

    <DataTable
      :paginator="paginator"
      :columns="columns"
      v-model:query="q"
      :reordering="reordering"
      @reorder="onReorder"
    >
      <template #j_actions="{row}: {row: BreadRow}">
        <div class="flex items-center justify-end gap-1">
          <component
            v-for="a in row.jasmine.actions.map(resolveAction)"
            :key="a.props.href ?? a.title"
            :is="a.component"
            :title="a.title"
            class="size-5 inline-flex items-center justify-center rounded-lg opacity-60 cursor-pointer transition group-hover:opacity-100 focus:opacity-100 focus:outline-none disabled:opacity-40 disabled:pointer-events-none"
            :class="[
              a.method === 'DELETE'
                ? 'text-gray-500 hover:bg-rose-50 hover:text-rose-600 focus-visible:ring-2 focus-visible:ring-rose-500/40'
                : 'text-gray-500 hover:bg-brand-50 hover:text-brand-600 focus-visible:ring-2 focus-visible:ring-brand-500/40',
              a.classes,
            ]"
            v-bind="a.props"
          >
            <i v-if="a.icon" :class="a.icon" class="text-base" aria-hidden="true" />
            <span :class="{'sr-only': a.icon}" v-text="a.title" />
          </component>
        </div>
      </template>
    </DataTable>
  </AppLayout>
</template>
