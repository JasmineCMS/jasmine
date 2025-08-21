<template>
  <div v-if="locale" class="btn-group btn-group-sm">
    <inertia-link v-for="_l in $globals.locales" :href="url(_l)" v-text="_l"
                  class="btn btn-outline-primary text-uppercase" :class="{active:_l === locale}"/>
  </div>
</template>

<script>
import {Link as InertiaLink} from '@inertiajs/vue3';

export default {
  name: 'LocaleLinks',
  components: {InertiaLink},
  props: {
    locale: {type: String},
  },

  methods: {
    url(locale) {
      const url = new URL(window.location.href);
      url.searchParams.set('_locale', locale);
      return url.toString();
    },
  },
};
</script>