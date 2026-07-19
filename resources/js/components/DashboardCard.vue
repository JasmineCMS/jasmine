<script setup lang="ts">
import {defineAsyncComponent, onErrorCaptured, provide, ref} from 'vue';

const Dynamic = defineAsyncComponent(() => import('@/js/pages/Dynamic.vue'));

export interface DashboardCardAction {
  name: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
}

export interface DashboardCardData {
  id: string;
  type: 'blade' | 'vue';
  html?: string;
  sfc?: string;
  props?: Record<string, unknown>;
  actions: DashboardCardAction[];
  width: number;
}

export interface JasmineCardApi {
  id: string;
  actions: Record<string, DashboardCardAction>;
  call: (name: string, payload?: Record<string, unknown>) => Promise<unknown>;
}

const {card} = defineProps<{card: DashboardCardData}>();

const failed = ref(false);
onErrorCaptured((err) => {
  console.error(`[jasmine] dashboard card [${card.id}] failed:`, err);
  failed.value = true;
  return false;
});

const actions = Object.fromEntries(card.actions.map((a) => [a.name, a]));

function xsrfToken(): string {
  return decodeURIComponent(document.cookie.match(/XSRF-TOKEN=([^;]+)/)?.[1] ?? '');
}

async function call(name: string, payload: Record<string, unknown> = {}): Promise<unknown> {
  const action = actions[name];
  if (!action) throw new Error(`Unknown action [${name}] on card [${card.id}]`);

  const isGet = action.method === 'GET';
  const url = isGet
    ? action.url + (Object.keys(payload).length ? '?' + new URLSearchParams(payload as Record<string, string>) : '')
    : action.url;

  const res = await fetch(url, {
    method: action.method,
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      ...(isGet ? {} : {'Content-Type': 'application/json', 'X-XSRF-TOKEN': xsrfToken()}),
    },
    body: isGet ? undefined : JSON.stringify(payload),
  });

  if (!res.ok) throw new Error(`Card action [${name}] failed with ${res.status}`);

  return res.headers.get('content-type')?.includes('json') ? res.json() : res.text();
}

provide<JasmineCardApi>('jasmine:card', {id: card.id, actions, call});
</script>

<template>
  <div class="overflow-hidden rounded-lg border bg-white shadow-sm dark:bg-gray-900">
    <div v-if="failed" class="p-4 text-sm text-red-600">
      {{ $t('Dashboard.card_failed') }}
    </div>

    <div v-else-if="card.type === 'blade'" v-html="card.html" />

    <Dynamic v-else :sfc="card.sfc!" :props="card.props ?? {}" />
  </div>
</template>
