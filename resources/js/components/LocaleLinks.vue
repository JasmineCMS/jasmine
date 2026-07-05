<script setup lang="ts">
import {router, usePage} from '@inertiajs/vue3';
import {useI18n} from 'vue-i18n';

const i18n = useI18n();
const page = usePage();

const change = (locale: string) => {
  router.reload({
    data: {locale: locale},
    only: ['_locale', '_i18n'],
    preserveErrors: true,
    onSuccess: (res) => {
      i18n.setLocaleMessage(locale, res.props._i18n);
      i18n.locale.value = locale;
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('lang', locale);
        document.dir = ['ar', 'dv', 'fa', 'ha', 'he', 'ks', 'ku', 'ps', 'sd', 'ur', 'yi'].includes(locale)
          ? 'rtl'
          : 'ltr';
      }
    },
  });
};

const url = (l: string): string => {
  const url = new URL(typeof document !== 'undefined' ? document.location.href : page.props._ziggy.location);
  url.searchParams.set('locale', l);
  return url.toString();
};
</script>

<template>
  <template v-for="v in $page.props._locales" :key="v">
    <slot name="item" :locale="v" :active="v === $page.props._locale" :change="() => change(v)" :href="url(v)">
      <a :lang="v" :hreflang="v" @click.prevent="change(v)" :href="url(v)" v-bind="$attrs">
        <slot :locale="v" :active="v === $page.props._locale" :change="() => change(v)">
          <span v-text="$t('locales.' + v)" />
        </slot>
      </a>
    </slot>
  </template>
</template>
