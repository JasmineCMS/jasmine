<template>
  <Head :title="$t('Dashboard')"/>

  <Layout>
    Welcome to JasmineCMS

    <div>
      <template v-for="(card,id) in cards" :key="id">
        <component
            :is="loadSfc(id, card['vue-component'])"
            v-bind="card['vue-component']?.props || {}"/>
      </template>
    </div>
  </Layout>
</template>

<script>
import {defineAsyncComponent} from 'vue';

export default {
  name: 'Dashboard',
  props: {
    cards: {type: [Array, Object], required: true},
  },

  methods: {
    loadSfc(id, component) {
      let vm = this;

      return defineAsyncComponent({
        loader() {
          return SfcLoader.loadModule(`c-${id}.vue`, {
            moduleCache: {vue: Vue},
            getFile: (url) => component.sfc,
            addStyle(css) {
              const styleEl = document.createElement('style');
              styleEl.innerHTML = css;
              document.body.appendChild(styleEl);
            },
          });
        },
      });
    },
  },
};
</script>

<style scoped>

</style>
