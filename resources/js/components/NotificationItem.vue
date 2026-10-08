<script setup lang="ts">
import {computed} from 'vue';
import {usePage} from '@inertiajs/vue3';

import {timeAgo} from '@/js/utils.ts';

export type NotificationData = {
  id: string;
  title: string;
  message: string | null;
  url: string | null;
  icon: string;
  level: 'info' | 'success' | 'warning' | 'danger';
  read: boolean;
  created_at: string | null;
};

const props = defineProps<{notification: NotificationData; active?: boolean}>();

const levelClasses: Record<NotificationData['level'], string> = {
  info: 'bg-brand-50 text-brand-600',
  success: 'bg-emerald-50 text-emerald-600',
  warning: 'bg-amber-50 text-amber-600',
  danger: 'bg-rose-50 text-rose-600',
};

const locale = computed(() => usePage().props._locale);
const fullDate = computed(() =>
  props.notification.created_at ? new Date(props.notification.created_at).toLocaleString(locale.value) : undefined,
);
</script>

<template>
  <div
    class="flex items-start gap-3 px-4 py-3 text-start transition-colors"
    :class="[active ? 'bg-slate-50' : '', notification.read ? '' : 'bg-brand-50/40']"
  >
    <span
      class="mt-0.5 w-8 h-8 shrink-0 rounded-full flex items-center justify-center"
      :class="levelClasses[notification.level] ?? levelClasses.info"
      aria-hidden="true"
    >
      <i :class="notification.icon" />
    </span>

    <div class="flex-1 min-w-0">
      <div
        class="text-sm text-slate-900"
        :class="notification.read ? '' : 'font-semibold'"
        v-text="notification.title"
      />
      <p v-if="notification.message" class="mt-0.5 text-sm text-slate-600 line-clamp-2" v-text="notification.message" />
      <time
        v-if="notification.created_at"
        class="mt-1 block text-xs text-slate-400"
        :datetime="notification.created_at"
        :title="fullDate"
        v-text="timeAgo(notification.created_at, locale)"
      />
    </div>

    <span
      v-if="!notification.read"
      class="mt-2 w-2 h-2 shrink-0 rounded-full bg-brand-500"
      :aria-label="$t('notifications.unread')"
    />
  </div>
</template>
