<template>
  <component v-if="c" :is="c" ref="dynamicPage" v-bind="props"/>
</template>

<script>
export default {
  name: 'Dynamic',
  props: {
    sfc: {type: String, required: true},
    props: {type: Object, default: {}},
  },

  data() {
    return {c: Vue.shallowRef(null)};
  },

  methods: {
    async load() {
      let vm = this;
      vm.c = await window['vue2-sfc-loader'].loadModule('c.vue', {
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
