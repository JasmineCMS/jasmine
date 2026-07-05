<script setup>
import * as Vue from 'vue';
import * as Inertia from '@inertiajs/vue3';
import {defineAsyncComponent, onMounted} from 'vue';
import {loadModule} from 'vue3-sfc-loader';
import appCss from '@/css/app.css?raw';

const page = defineProps({
  sfc: {type: String, required: true},
  props: {type: Object, default: () => ({})},
});

const jasmine = {};
const key = (v) => v.replace('/resources/', '@jasmine/').replace(/\.ts$/, '');

for (const [path, loader] of Object.entries(import.meta.glob(['@/js/components/**/*.vue', '@/js/layouts/**/*.vue'])))
  jasmine[key(path)] = defineAsyncComponent(loader);

for (const [path, mod] of Object.entries(
  import.meta.glob(['@/js/composeables/**/*.ts', '@/js/directives/**/*.ts', '@/js/lib/**/*.ts', '@/js/utils.ts'], {
    eager: true,
  }),
))
  jasmine[key(path)] = {__esModule: true, ...mod};

const Comp = defineAsyncComponent(() =>
  loadModule('/Index.vue', {
    moduleCache: {vue: Vue, '@inertiajs/vue3': Inertia, ...jasmine},
    getFile: () => page.sfc,
    addStyle(css) {
      const el = document.createElement('style');
      el.textContent = css;
      document.head.appendChild(el);
    },
    additionalBabelParserPlugins: ['typescript'],
  }),
);

function extractTheme(css) {
  const start = css.indexOf('@theme');
  if (start === -1) return '';
  let depth = 0,
    i = css.indexOf('{', start);
  for (; i < css.length; i++) {
    if (css[i] === '{') depth++;
    else if (css[i] === '}' && --depth === 0) return css.slice(start, i + 1);
  }
  return '';
}

// load tailwind
onMounted(() => {
  if (document.getElementById('jasmine-tw-browser')) return;

  const style = document.createElement('style');
  style.setAttribute('type', 'text/tailwindcss');
  style.textContent = `
    @import "tailwindcss";
    ${extractTheme(appCss)}
  `;
  document.head.appendChild(style);

  const script = document.createElement('script');
  script.id = 'jasmine-tw-browser';
  script.src = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4';
  document.head.appendChild(script);
});
</script>

<template>
  <component :is="Comp" v-bind="page.props" />
</template>
