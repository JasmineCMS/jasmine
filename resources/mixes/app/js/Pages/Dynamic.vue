<template>
  <component v-if="c" :is="c" ref="dynamicPage" v-bind="props"/>
</template>

<script>
import * as Vue from 'vue';
import {shallowRef} from 'vue';
import {loadModule} from 'vue3-sfc-loader/dist/vue3-sfc-loader.esm';

export default {
  name: 'Dynamic',
  props: {
    sfc: {type: String, required: true},
    props: {type: Object, default: {}},
  },

  data() {
    return {c: shallowRef(null)};
  },

  methods: {
    async load() {
      let vm = this;
      vm.c = await loadModule('c.vue', {
        moduleCache: {vue: Vue},
        getFile: (url) => vm.sfc,
        addStyle(css) {
          const styleEl = document.createElement('style');
          styleEl.innerHTML = css;
          document.body.appendChild(styleEl);
        },
      });
    },
  },

  beforeMount() {
    this.load();
  },
};
</script>
