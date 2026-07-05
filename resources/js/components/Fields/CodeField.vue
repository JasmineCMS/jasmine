<script setup lang="ts">
import {computed, shallowRef, watch} from 'vue';
import CodeMirror from 'vue-codemirror6';
import {EditorView} from '@codemirror/view';
import type {Extension} from '@codemirror/state';

const props = defineProps<{
  id: string;
  name: string;
  options: {
    class?: string;
    language?: string;
    placeholder?: string;
    readonly?: boolean;
    wrap?: boolean;
    tab?: boolean;
    tabSize?: number;
    basic?: boolean;
    minimal?: boolean;
    dark?: boolean;
    height?: string;
    extensions?: Extension[];
    [key: string]: any;
  };
  rtl: boolean;
  validation: Array<string>;
  invalid: boolean;
  errors: Record<string, string>;
  path: string;
}>();

const model = defineModel<any>({required: true});

const languageLoaders: Record<string, () => Promise<Extension>> = {
  javascript: () => import('@codemirror/lang-javascript').then((m) => m.javascript()),
  typescript: () => import('@codemirror/lang-javascript').then((m) => m.javascript({typescript: true})),
  jsx: () => import('@codemirror/lang-javascript').then((m) => m.javascript({jsx: true})),
  tsx: () => import('@codemirror/lang-javascript').then((m) => m.javascript({jsx: true, typescript: true})),
  json: () => import('@codemirror/lang-json').then((m) => m.json()),
  html: () => import('@codemirror/lang-html').then((m) => m.html()),
  css: () => import('@codemirror/lang-css').then((m) => m.css()),
  php: () => import('@codemirror/lang-php').then((m) => m.php()),
  markdown: () => import('@codemirror/lang-markdown').then((m) => m.markdown()),
  python: () => import('@codemirror/lang-python').then((m) => m.python()),
  sql: () => import('@codemirror/lang-sql').then((m) => m.sql()),
  xml: () => import('@codemirror/lang-xml').then((m) => m.xml()),
  yaml: () => import('@codemirror/lang-yaml').then((m) => m.yaml()),
  rust: () => import('@codemirror/lang-rust').then((m) => m.rust()),
  cpp: () => import('@codemirror/lang-cpp').then((m) => m.cpp()),
  java: () => import('@codemirror/lang-java').then((m) => m.java()),
  go: () => import('@codemirror/lang-go').then((m) => m.go()),
  vue: () => import('@codemirror/lang-vue').then((m) => m.vue()),
  sass: () => import('@codemirror/lang-sass').then((m) => m.sass()),
};

const lang = shallowRef<Extension>();

watch(
  () => props.options.language,
  async (name) => {
    if (!name) {
      lang.value = undefined;
      return;
    }
    const key = name.toLowerCase();
    const load = languageLoaders[key];
    if (!load) {
      lang.value = undefined;
      if (import.meta.env.DEV) {
        console.warn(`<code-field> has no loader for language "${name}". Add one to languageLoaders.`);
      }
      return;
    }
    try {
      const resolved = await load();
      // Drop a stale resolve if the language changed while this was loading.
      if (props.options.language?.toLowerCase() === key) lang.value = resolved;
    } catch (error) {
      console.error(`<code-field> failed to load language "${name}".`, error);
    }
  },
  {immediate: true},
);

const extensions = computed<Extension[]>(() => [
  ...(lang.value ? [lang.value] : []),
  EditorView.theme(
    {
      '&': {
        fontSize: '0.875rem',
        color: 'var(--color-gray-900)',
        backgroundColor: 'transparent',
        borderRadius: 'inherit',
      },
      '&.cm-focused': {outline: 'none'},
      '.cm-scroller': {
        fontFamily: "'JetBrains Mono Variable', ui-monospace, 'JetBrains Mono', monospace",
        lineHeight: '1.6',
        minHeight: props.options.height ?? '8rem',
      },
      '.cm-content': {padding: '0.5rem 0', caretColor: 'var(--color-indigo-600)'},
      '.cm-gutters': {
        backgroundColor: 'transparent',
        color: 'var(--color-gray-400)',
        border: 'none',
      },
      '.cm-activeLine': {
        backgroundColor: 'color-mix(in oklab, var(--color-indigo-500) 6%, transparent)',
      },
      '.cm-activeLineGutter': {
        backgroundColor: 'transparent',
        color: 'var(--color-indigo-600)',
      },
      '.cm-cursor, .cm-dropCursor': {borderLeftColor: 'var(--color-indigo-600)'},
      '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
        backgroundColor: 'color-mix(in oklab, var(--color-indigo-500) 18%, transparent)',
      },
    },
    {dark: !!props.options.dark},
  ),
  ...(props.options.extensions ?? []),
]);

const opts = computed(() => {
  const {class: _class, language, height, extensions: _ext, dark, basic, lang: _lang, ...rest} = props.options;
  return {tab: true, tabSize: 2, ...rest};
});
</script>

<template>
  <CodeMirror
    :id="id"
    :name="name"
    dir="ltr"
    :model-value="model ?? ''"
    :basic="options.basic ?? true"
    :dark="!!options.dark"
    :extensions="extensions"
    :aria-invalid="invalid || undefined"
    class="cm-field block w-full overflow-hidden rounded-md border shadow-xs sm:text-sm transition-colors duration-200"
    :class="
      invalid
        ? 'border-red-300 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500'
        : 'border-gray-300 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500'
    "
    v-bind="opts"
    @update:model-value="(v) => (model = v)"
  />
</template>

<style scoped>
.cm-field :deep(.cm-editor) {
  border-radius: inherit;
}
</style>
