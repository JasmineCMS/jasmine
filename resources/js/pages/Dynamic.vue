<script>
import * as Vue from 'vue';
import * as Inertia from '@inertiajs/vue3';
import {defineAsyncComponent} from 'vue';
import {loadModule} from 'vue3-sfc-loader';

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

// by source, for the life of the tab: a remount reuses the compiled page instead of running babel again
const compiled = new Map();

function compile(sfc) {
  const styles = [];

  const component = defineAsyncComponent(() =>
    loadModule('/Index.vue', {
      // a copy per source: the loader caches by path here, and every page is /Index.vue
      moduleCache: {vue: Vue, '@inertiajs/vue3': Inertia, ...jasmine},
      getFile: () => sfc,
      addStyle(css) {
        const el = document.createElement('style');
        el.textContent = css;
        document.head.appendChild(el);
        styles.push(el);
      },
      additionalBabelParserPlugins: ['typescript'],
    }),
  );

  return {component, styles};
}

function resolve(sfc) {
  if (!compiled.has(sfc)) compiled.set(sfc, compile(sfc));
  const {component, styles} = compiled.get(sfc);

  // pages share a scope id, so the one on screen has to stay last in the cascade
  document.head.append(...styles);

  return component;
}
</script>

<script setup>
import {computed, onMounted} from 'vue';
import appCss from '@/css/app.css?raw';

const page = defineProps({
  sfc: {type: String, required: true},
  props: {type: Object, default: () => ({})},
});

const Comp = computed(() => resolve(page.sfc));

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
    @custom-variant dark (&:where(.dark, .dark *));
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
