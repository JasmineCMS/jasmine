<script setup lang="ts">
import {computed, onBeforeUnmount, onMounted, ref, shallowRef, triggerRef, useTemplateRef, watch} from 'vue';
import {useI18n} from 'vue-i18n';
import {Editor} from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import {Placeholder} from '@tiptap/extensions';
import TextAlign from '@tiptap/extension-text-align';
import {TextStyleKit} from '@tiptap/extension-text-style';
import {Highlight} from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import Swal from '@/js/lib/Swal';
import {vPopoverFlip} from '@/js/directives/popoverFlip.ts';
import {useFileManager} from '@/js/composeables/useFileManager.ts';

const props = defineProps<{
  id: string;
  name: string;
  options: {
    class?: string;
    height?: number;
    content_css?: string[];
    content_style?: string;
    body_class?: string;
    placeholder?: string;
    image_inline?: boolean;
    image_allow_base64?: boolean;
    [key: string]: any;
  };
  rtl: boolean;
  validation: Array<string>;
  invalid: boolean;
  errors: Record<string, string>;
  path: string;
}>();

const model = defineModel<any>({required: true});

const {t} = useI18n();

const {openFileManager} = useFileManager();

const editorRef = useTemplateRef('editorHost');
let shadowRoot: ShadowRoot | null = null;
let editorEl: HTMLDivElement | null = null;

const editor = shallowRef<Editor | null>(null);

watch(model, (val) => {
  if (!editor.value) return;
  if (val === editor.value.getHTML()) return;
  editor.value.commands.setContent(val ?? '', {emitUpdate: false});
});

function injectShadowStyles(root: ShadowRoot) {
  const h = props.options.height ?? 200;
  const style = document.createElement('style');
  style.textContent = `
    :host { display: block; }

    .editor-host {
      min-height: ${h}px;
      padding: 0.75rem 1rem;
      box-sizing: border-box;
      font-size: 0.875rem;
      line-height: 1.5;
      color: rgb(17 24 39);
    }

    .ProseMirror {
      outline: none;
      min-height: ${h - 24}px;
    }

    .ProseMirror > * + * {
      margin-top: 0.75em;
    }

    .ProseMirror ul { list-style: disc outside; padding-left: 1.5rem; }
    .ProseMirror ol { list-style: decimal outside; padding-left: 1.5rem; }

    .ProseMirror img {
      max-width: 100%;
    }

    /* keep aspect ratio unless an explicit height is set */
    .ProseMirror img:not([height]) {
      height: auto;
    }

    .ProseMirror img.ProseMirror-selectednode {
      outline: 2px solid #6366f1;
      outline-offset: 2px;
    }

    .ProseMirror p.is-editor-empty:first-child::before {
      content: attr(data-placeholder);
      float: left;
      color: rgb(156 163 175); /* gray-400 */
      pointer-events: none;
      height: 0;
    }

    .ProseMirror[dir="ltr"] p.is-editor-empty:first-child::before {
      float: left;
    }

    .ProseMirror[dir="rtl"] p.is-editor-empty:first-child::before {
      float: right;
    }
  `;
  root.appendChild(style);

  if (props.options.content_style) {
    const contentStyle = document.createElement('style');
    contentStyle.textContent = props.options.content_style;
    root.appendChild(contentStyle);
  }

  const urls = props.options.content_css ?? [];
  for (const href of urls) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    root.appendChild(link);
  }
}

onMounted(() => {
  if (!editorRef.value || editor.value) return;
  shadowRoot = editorRef.value.shadowRoot ?? editorRef.value.attachShadow({mode: 'open'});
  injectShadowStyles(shadowRoot);

  const bodyWrapper = document.createElement('div');
  bodyWrapper.className = 'editor-host';
  shadowRoot.appendChild(bodyWrapper);

  editorEl = document.createElement('div');
  bodyWrapper.appendChild(editorEl);

  editor.value = new Editor({
    element: editorEl,
    extensions: [
      StarterKit.configure({
        link: {
          openOnClick: false,
          autolink: true,
          linkOnPaste: true,
          protocols: ['http', 'https', 'mailto', 'tel'],
          HTMLAttributes: {rel: 'noopener noreferrer', target: null},
          isAllowedUri: (url, ctx) => /^(https?:|mailto:|tel:|\/|#|\.)/i.test(url) && ctx.defaultValidate(url),
        },
      }),
      Placeholder.configure({placeholder: props.options.placeholder ?? ''}),
      TextAlign.configure({types: ['heading', 'paragraph']}),
      TextStyleKit,
      Highlight.configure({multicolor: true}),
      Image.extend({
        addAttributes() {
          const toInt = (v: unknown) => {
            const n = parseInt(String(v ?? ''), 10);
            return Number.isFinite(n) ? n : null;
          };
          return {
            ...this.parent?.(),
            width: {
              default: null,
              parseHTML: (el: HTMLElement) => toInt(el.getAttribute('width') || el.style.width),
              renderHTML: (attrs: Record<string, any>) => (attrs.width ? {width: attrs.width} : {}),
            },
            height: {
              default: null,
              parseHTML: (el: HTMLElement) => toInt(el.getAttribute('height') || el.style.height),
              renderHTML: (attrs: Record<string, any>) => (attrs.height ? {height: attrs.height} : {}),
            },
          };
        },
      }).configure({
        inline: props.options.image_inline ?? false,
        allowBase64: props.options.image_allow_base64 ?? false,
      }),
    ],
    content: model.value ?? '',
    onUpdate: ({editor}) => (model.value = editor.getHTML()),
    editorProps: {
      attributes: {
        role: 'textbox',
        'aria-multiline': 'true',
        'aria-invalid': props.invalid ? 'true' : 'false',
        class: ['pm-content', props.options.body_class].filter(Boolean).join(' '),
        dir: props.rtl ? 'rtl' : 'ltr',
      },
    },
  });

  editor.value.on('transaction', () => triggerRef(editor));
});

onBeforeUnmount(() => {
  editor.value?.destroy();
});

const DEFAULT_FONT_FAMILIES = [
  'Arial',
  'Helvetica',
  'Georgia',
  'Times New Roman',
  'Courier New',
  'Verdana',
  'Tahoma',
  'Trebuchet MS',
];
const DEFAULT_FONT_SIZES = ['12px', '14px', '16px', '18px', '24px', '32px', '48px'];
const DEFAULT_COLOR_MAP = [
  '#000000',
  '#434343',
  '#666666',
  '#999999',
  '#b7b7b7',
  '#cccccc',
  '#d9d9d9',
  '#efefef',
  '#f3f3f3',
  '#ffffff',
  '#980000',
  '#ff0000',
  '#ff9900',
  '#ffff00',
  '#00ff00',
  '#00ffff',
  '#4a86e8',
  '#0000ff',
  '#9900ff',
  '#ff00ff',
  '#e6b8af',
  '#f4cccc',
  '#fce5cd',
  '#fff2cc',
  '#d9ead3',
  '#d0e0e3',
  '#c9daf8',
  '#cfe2f3',
  '#d9d2e9',
  '#ead1dc',
  '#cc4125',
  '#e06666',
  '#f6b26b',
  '#ffd966',
  '#93c47d',
  '#76a5af',
  '#6d9eeb',
  '#6fa8dc',
  '#8e7cc3',
  '#c27ba0',
];

const fontFamilies = computed(() => props.options.font_families ?? DEFAULT_FONT_FAMILIES);
const fontSizes = computed(() => props.options.font_sizes ?? DEFAULT_FONT_SIZES);
const colorMap = computed(() => props.options.color_map ?? DEFAULT_COLOR_MAP);

function currentBlock(): string {
  if (!editor.value) return 'p';
  if (editor.value.isActive('heading', {level: 1})) return 'h1';
  if (editor.value.isActive('heading', {level: 2})) return 'h2';
  if (editor.value.isActive('heading', {level: 3})) return 'h3';
  if (editor.value.isActive('heading', {level: 4})) return 'h4';
  if (editor.value.isActive('heading', {level: 5})) return 'h5';
  if (editor.value.isActive('heading', {level: 6})) return 'h6';
  return 'p';
}

function setBlock(value: string) {
  if (!editor.value) return;
  const chain = editor.value.chain().focus();
  if (value === 'p') chain.setParagraph().run();
  else {
    const level = Number(value.slice(1)) as 1 | 2 | 3 | 4 | 5 | 6;
    chain.setNode('heading', {level}).run();
  }
}

function currentFontFamily(): string {
  if (!editor.value) return '';
  return editor.value.getAttributes('textStyle').fontFamily ?? '';
}

function setFontFamily(value: string) {
  if (!editor.value) return;
  const chain = editor.value.chain().focus();
  if (value === '') chain.unsetFontFamily().run();
  else chain.setFontFamily(value).run();
}

function currentFontSize(): string {
  if (!editor.value) return '';
  return editor.value.getAttributes('textStyle').fontSize ?? '';
}

function setFontSize(value: string) {
  if (!editor.value) return;
  const chain = editor.value.chain().focus();
  if (value === '') chain.unsetFontSize().run();
  else chain.setFontSize(value).run();
}

function currentColor(): string {
  if (!editor.value) return '';
  return editor.value.getAttributes('textStyle').color ?? '';
}

function normalizeColor(c: string): string {
  if (!c) return '';
  const v = c.trim().toLowerCase();
  const rgb = v.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
  if (rgb)
    return (
      '#' +
      rgb
        .slice(1, 4)
        .map((n) => Number(n).toString(16).padStart(2, '0'))
        .join('')
    );
  const short = v.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (short) return `#${short[1]}${short[1]}${short[2]}${short[2]}${short[3]}${short[3]}`;
  return v;
}

function setColor(color: string | null) {
  if (!editor.value) return;
  const chain = editor.value.chain().focus();
  if (!color) chain.unsetColor().run();
  else chain.setColor(color).run();
}

function currentHighlight(): string {
  if (!editor.value) return '';
  return editor.value.getAttributes('highlight').color ?? '';
}

function setHighlight(color: string | null) {
  if (!editor.value) return;
  const chain = editor.value.chain().focus();
  if (!color) chain.unsetHighlight().run();
  else chain.setHighlight({color}).run();
}

const colorOpen = ref(false);
const highlightOpen = ref(false);

const linkOpen = ref(false);
const linkHref = ref('');
const linkTarget = ref<'' | '_blank'>('');

function openLinkDialog() {
  if (!editor.value) return;
  const attrs = editor.value.getAttributes('link');
  linkHref.value = attrs.href ?? '';
  linkTarget.value = attrs.target === '_blank' ? '_blank' : '';
  linkOpen.value = true;
}

const SAFE_LINK_SCHEME = /^(https?:|mailto:|tel:|\/|#|\.)/i;

function applyLink() {
  if (!editor.value) return;
  const url = linkHref.value.trim();
  const chain = editor.value.chain().focus();

  if (!url) {
    chain.extendMarkRange('link').unsetLink().run();
    linkOpen.value = false;
    return;
  }

  if (!SAFE_LINK_SCHEME.test(url)) {
    Swal.fire({icon: 'error', text: t('WysiwygField.invalidUrl')});
    return;
  }

  const hasSelection = !editor.value.state.selection.empty;
  const onLink = editor.value.isActive('link');

  if (!hasSelection && !onLink) {
    chain
      .insertContent({
        type: 'text',
        text: url,
        marks: [{type: 'link', attrs: {href: url, target: linkTarget.value || null}}],
      })
      .run();
  } else {
    chain
      .extendMarkRange('link')
      .setLink({href: url, target: linkTarget.value || null})
      .run();
  }
  linkOpen.value = false;
}

function removeLink() {
  if (!editor.value) return;
  editor.value.chain().focus().extendMarkRange('link').unsetLink().run();
  linkOpen.value = false;
}

function openImagePicker() {
  closeAll();

  openFileManager({
    extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg'],
    onSelect: (val) => {
      if (!editor.value || editor.value.isDestroyed) return;

      if (!SAFE_LINK_SCHEME.test(val)) return;

      const alt = val.split('/').pop();
      if (editor.value)
        editor.value
          .chain()
          .focus()
          .setImage({src: val, alt: alt || undefined})
          .run();
    },
  });
}

const imageOpen = ref(false);
const imageAlt = ref('');
const imageWidth = ref<number | null>(null);
const imageHeight = ref<number | null>(null);
const imageLock = ref(true);
let imageRatio: number | null = null;

function selectedImageEl(): HTMLImageElement | null {
  return (shadowRoot?.querySelector('img.ProseMirror-selectednode') as HTMLImageElement | null) ?? null;
}

function openImageDialog() {
  if (!editor.value) return;
  const attrs = editor.value.getAttributes('image');
  imageAlt.value = attrs.alt ?? '';
  imageWidth.value = attrs.width ?? null;
  imageHeight.value = attrs.height ?? null;

  const el = selectedImageEl();
  imageRatio = el && el.naturalWidth && el.naturalHeight ? el.naturalWidth / el.naturalHeight : null;

  imageOpen.value = true;
}

function toggleImageDialog() {
  if (imageOpen.value) {
    imageOpen.value = false;
    return;
  }
  closeAll();
  openImageDialog();
}

function onImageWidthInput(value: string) {
  const w = value === '' ? null : Math.max(0, Math.round(Number(value)));
  imageWidth.value = Number.isFinite(w as number) ? w : null;
  if (imageLock.value && imageRatio && imageWidth.value) imageHeight.value = Math.round(imageWidth.value / imageRatio);
}

function onImageHeightInput(value: string) {
  const h = value === '' ? null : Math.max(0, Math.round(Number(value)));
  imageHeight.value = Number.isFinite(h as number) ? h : null;
  if (imageLock.value && imageRatio && imageHeight.value) imageWidth.value = Math.round(imageHeight.value * imageRatio);
}

function applyImage() {
  if (!editor.value) return;
  editor.value
    .chain()
    .focus()
    .updateAttributes('image', {
      alt: imageAlt.value.trim() || null,
      width: imageWidth.value || null,
      height: imageHeight.value || null,
    })
    .run();
  imageOpen.value = false;
}

function resetImageSize() {
  imageWidth.value = null;
  imageHeight.value = null;
}

const sourceMode = ref(false);
const sourceText = ref('');

function enterSourceMode() {
  if (!editor.value) return;
  sourceText.value = editor.value.getHTML();
  sourceMode.value = true;
}

function exitSourceMode() {
  if (!editor.value) return;
  editor.value.commands.setContent(sourceText.value, {emitUpdate: true});
  sourceMode.value = false;
}

function closeAll() {
  colorOpen.value = false;
  highlightOpen.value = false;
  linkOpen.value = false;
  imageOpen.value = false;
}

const onDocClick = (e: MouseEvent) => {
  const target = e.target as Element | null;
  if (!target?.closest('[data-popover]')) closeAll();
};

onMounted(() => document.addEventListener('mousedown', onDocClick));
onBeforeUnmount(() => document.removeEventListener('mousedown', onDocClick));
</script>

<template>
  <div
    :class="[
      'rounded-md border shadow-xs transition-colors duration-200 overflow-hidden',
      invalid
        ? 'border-red-300 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500'
        : 'border-gray-300 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500',
      options.class,
    ]"
    :aria-invalid="invalid || undefined"
  >
    <!-- Main toolbar (hidden in source mode) -->
    <div
      v-if="editor && !sourceMode"
      class="flex flex-wrap items-center gap-1 border-b border-gray-200 bg-gray-50 px-2 py-1.5"
    >
      <!-- Block tag / font / size -->
      <div class="tb-group">
        <select
          class="tb-select"
          :value="currentBlock()"
          @change="setBlock(($event.target as HTMLSelectElement).value)"
          :title="$t('WysiwygField.blockFormat')"
          :aria-label="$t('WysiwygField.blockFormat')"
        >
          <option value="p" v-text="'p'" />
          <option v-for="n in 6" :key="n" :value="`h${n}`" v-text="`h${n}`" />
        </select>

        <select
          class="tb-select"
          :value="currentFontFamily()"
          @change="setFontFamily(($event.target as HTMLSelectElement).value)"
          :title="$t('WysiwygField.fontFamily')"
          :aria-label="$t('WysiwygField.fontFamily')"
        >
          <option value="" v-text="$t('WysiwygField.default')" />
          <option v-for="f in fontFamilies" :key="f" :value="f" :style="{fontFamily: f}" v-text="f" />
        </select>

        <select
          class="tb-select"
          :value="currentFontSize()"
          @change="setFontSize(($event.target as HTMLSelectElement).value)"
          :title="$t('WysiwygField.fontSize')"
          :aria-label="$t('WysiwygField.fontSize')"
        >
          <option value="" v-text="$t('WysiwygField.default')" />
          <option v-for="s in fontSizes" :key="s" :value="s">{{ s }}</option>
        </select>
      </div>
      <span class="tb-sep" aria-hidden="true" />

      <!-- Colors -->
      <div class="tb-group">
        <!-- Foreground color -->
        <div class="relative" data-popover>
          <button
            type="button"
            class="tb-btn"
            :class="{'tb-active': !!currentColor()}"
            @click.prevent="
              colorOpen = !colorOpen;
              highlightOpen = false;
            "
            :title="$t('WysiwygField.textColor')"
          >
            <span class="inline-flex flex-col items-center leading-none">
              <i class="bi bi-fonts text-xs" />
              <span
                class="block h-1 w-4 mt-0.5"
                :style="{
                  background: currentColor() || 'transparent',
                  border: currentColor() ? 'none' : '1px solid #ccc',
                }"
              />
            </span>
          </button>

          <div
            v-if="colorOpen"
            v-popover-flip
            class="absolute z-10 mt-1 rounded-md border border-gray-200 bg-white shadow-lg p-2 w-56"
          >
            <button
              type="button"
              class="block w-full text-left text-xs text-gray-700 hover:bg-gray-100 rounded px-2 py-1 mb-1 cursor-pointer"
              @click.prevent="
                setColor(null);
                closeAll();
              "
            >
              <i class="bi bi-x-circle" /> {{ $t('WysiwygField.noColor') }}
            </button>
            <div class="grid grid-cols-10 gap-1">
              <button
                v-for="c in colorMap"
                :key="c"
                type="button"
                class="h-5 w-5 rounded border border-gray-300 hover:scale-110 transition-transform cursor-pointer"
                :class="{'ring-2 ring-indigo-500 ring-offset-1': normalizeColor(currentColor()) === normalizeColor(c)}"
                :style="{background: c}"
                :title="c"
                @click.prevent="
                  setColor(c);
                  closeAll();
                "
              />
            </div>
            <div class="mt-2 flex items-center gap-2">
              <label class="text-xs text-gray-600">{{ $t('WysiwygField.custom') }}</label>
              <input
                type="color"
                class="h-6 w-10 cursor-pointer rounded border border-gray-300"
                :value="currentColor() || '#000000'"
                @input="setColor(($event.target as HTMLInputElement).value)"
              />
            </div>
          </div>
        </div>

        <!-- Background color (highlight) -->
        <div class="relative" data-popover>
          <button
            type="button"
            class="tb-btn"
            :class="{'tb-active': !!currentHighlight()}"
            @click.prevent="
              highlightOpen = !highlightOpen;
              colorOpen = false;
            "
            :title="$t('WysiwygField.backgroundColor')"
          >
            <span class="inline-flex flex-col items-center leading-none">
              <i class="bi bi-highlighter text-xs" />
              <span
                class="block h-1 w-4 mt-0.5"
                :style="{
                  background: currentHighlight() || 'transparent',
                  border: currentHighlight() ? 'none' : '1px solid #ccc',
                }"
              />
            </span>
          </button>

          <div
            v-if="highlightOpen"
            v-popover-flip
            class="absolute z-10 mt-1 rounded-md border border-gray-200 bg-white shadow-lg p-2 w-56"
          >
            <button
              type="button"
              class="block w-full text-left text-xs text-gray-700 hover:bg-gray-100 rounded px-2 py-1 mb-1 cursor-pointer"
              @click.prevent="
                setHighlight(null);
                closeAll();
              "
            >
              <i class="bi bi-x-circle" /> {{ $t('WysiwygField.noColor') }}
            </button>
            <div class="grid grid-cols-10 gap-1">
              <button
                v-for="c in colorMap"
                :key="c"
                type="button"
                class="h-5 w-5 rounded border border-gray-300 hover:scale-110 transition-transform cursor-pointer"
                :class="{
                  'ring-2 ring-indigo-500 ring-offset-1': normalizeColor(currentHighlight()) === normalizeColor(c),
                }"
                :style="{background: c}"
                :title="c"
                @click.prevent="
                  setHighlight(c);
                  closeAll();
                "
              />
            </div>
            <div class="mt-2 flex items-center gap-2">
              <label class="text-xs text-gray-600">{{ $t('WysiwygField.custom') }}</label>
              <input
                type="color"
                class="h-6 w-10 cursor-pointer rounded border border-gray-300"
                :value="currentHighlight() || '#ffff00'"
                @input="setHighlight(($event.target as HTMLInputElement).value)"
              />
            </div>
          </div>
        </div>
      </div>
      <span class="tb-sep" aria-hidden="true" />

      <!-- Inline formatting -->
      <div class="tb-group">
        <button
          type="button"
          class="tb-btn"
          :class="{'tb-active': editor.isActive('bold')}"
          @click.prevent="editor.chain().focus().toggleBold().run()"
          :title="$t('WysiwygField.bold')"
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          class="tb-btn"
          :class="{'tb-active': editor.isActive('italic')}"
          @click.prevent="editor.chain().focus().toggleItalic().run()"
          :title="$t('WysiwygField.italic')"
        >
          <em>I</em>
        </button>
        <button
          type="button"
          class="tb-btn"
          :class="{'tb-active': editor.isActive('strike')}"
          @click.prevent="editor.chain().focus().toggleStrike().run()"
          :title="$t('WysiwygField.strike')"
        >
          <s>S</s>
        </button>
      </div>
      <span class="tb-sep" aria-hidden="true" />

      <!-- Alignment -->
      <div class="tb-group">
        <div class="inline-flex items-center gap-1 rtl:flex-row-reverse">
          <button
            type="button"
            class="tb-btn"
            :class="{'tb-active': editor.isActive({textAlign: 'left'})}"
            @click.prevent="editor.chain().focus().setTextAlign('left').run()"
            :title="$t('WysiwygField.alignLeft')"
          >
            <i class="bi bi-text-left" />
          </button>
          <button
            type="button"
            class="tb-btn"
            :class="{'tb-active': editor.isActive({textAlign: 'center'})}"
            @click.prevent="editor.chain().focus().setTextAlign('center').run()"
            :title="$t('WysiwygField.alignCenter')"
          >
            <i class="bi bi-text-center" />
          </button>
          <button
            type="button"
            class="tb-btn"
            :class="{'tb-active': editor.isActive({textAlign: 'right'})}"
            @click.prevent="editor.chain().focus().setTextAlign('right').run()"
            :title="$t('WysiwygField.alignRight')"
          >
            <i class="bi bi-text-right" />
          </button>
        </div>
        <button
          type="button"
          class="tb-btn"
          :class="{'tb-active': editor.isActive({textAlign: 'justify'})}"
          @click.prevent="editor.chain().focus().setTextAlign('justify').run()"
          :title="$t('WysiwygField.justify')"
        >
          <i class="bi bi-justify" />
        </button>
      </div>
      <span class="tb-sep" aria-hidden="true" />

      <!-- Lists -->
      <div class="tb-group">
        <button
          type="button"
          class="tb-btn"
          :class="{'tb-active': editor.isActive('bulletList')}"
          @click.prevent="editor.chain().focus().toggleBulletList().run()"
          :title="$t('WysiwygField.bulletList')"
        >
          <i class="bi bi-list-ul" />
        </button>
        <button
          type="button"
          class="tb-btn"
          :class="{'tb-active': editor.isActive('orderedList')}"
          @click.prevent="editor.chain().focus().toggleOrderedList().run()"
          :title="$t('WysiwygField.orderedList')"
        >
          <i class="bi bi-list-ol" />
        </button>
      </div>
      <span class="tb-sep" aria-hidden="true" />

      <!-- Link -->
      <div class="tb-group">
        <div class="relative" data-popover>
          <button
            type="button"
            class="tb-btn"
            :class="{'tb-active': editor.isActive('link')}"
            @click.prevent="
              openLinkDialog();
              colorOpen = false;
              highlightOpen = false;
            "
            :title="$t('WysiwygField.insertEditLink')"
          >
            <i class="bi bi-link-45deg" />
          </button>

          <div
            v-if="linkOpen"
            v-popover-flip
            class="absolute z-10 mt-1 rounded-md border border-gray-200 bg-white shadow-lg p-3 w-72"
          >
            <label class="block text-xs text-gray-600 mb-1">{{ $t('WysiwygField.url') }}</label>
            <input
              v-model="linkHref"
              type="url"
              dir="ltr"
              :placeholder="$t('WysiwygField.urlPlaceholder')"
              class="block w-full rounded border border-gray-300 px-2 py-1 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              @keydown.enter.prevent="applyLink"
              @keydown.escape.prevent="linkOpen = false"
            />
            <label class="mt-2 flex items-center gap-2 text-xs text-gray-700">
              <input v-model="linkTarget" type="checkbox" class="rounded" />
              {{ $t('WysiwygField.openInNewTab') }}
            </label>
            <div class="mt-3 flex justify-between gap-2">
              <button
                type="button"
                class="tb-btn px-3"
                :disabled="!editor?.isActive('link')"
                @click.prevent="removeLink"
                :title="$t('WysiwygField.removeLink')"
              >
                <i class="bi bi-trash" /> {{ $t('WysiwygField.remove') }}
              </button>
              <div class="flex gap-1">
                <button
                  type="button"
                  class="tb-btn px-3"
                  @click.prevent="linkOpen = false"
                  v-text="$t('WysiwygField.cancel')"
                />
                <button
                  type="button"
                  class="tb-btn px-3 bg-indigo-600 text-white hover:bg-indigo-700"
                  @click.prevent="applyLink"
                  v-text="$t('WysiwygField.apply')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span class="tb-sep" aria-hidden="true" />

      <!-- Image -->
      <div class="tb-group">
        <button type="button" class="tb-btn" @click.prevent="openImagePicker()" :title="$t('WysiwygField.insertImage')">
          <i class="bi bi-image" />
        </button>

        <div class="relative" data-popover>
          <button
            type="button"
            class="tb-btn"
            :class="{'tb-active': imageOpen}"
            :disabled="!editor.isActive('image')"
            @click.prevent="toggleImageDialog()"
            :title="$t('WysiwygField.imageProperties')"
          >
            <i class="bi bi-aspect-ratio" />
          </button>

          <div
            v-if="imageOpen"
            v-popover-flip
            class="absolute z-10 mt-1 rounded-md border border-gray-200 bg-white shadow-lg p-3 w-72"
          >
            <label class="block text-xs text-gray-600 mb-1">{{ $t('WysiwygField.altText') }}</label>
            <input
              v-model="imageAlt"
              type="text"
              class="block w-full rounded border border-gray-300 px-2 py-1 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              @keydown.enter.prevent="applyImage"
              @keydown.escape.prevent="imageOpen = false"
            />

            <div class="mt-3 flex items-end gap-2">
              <div class="flex-1">
                <label class="block text-xs text-gray-600 mb-1">{{ $t('WysiwygField.width') }}</label>
                <input
                  :value="imageWidth ?? ''"
                  @input="onImageWidthInput(($event.target as HTMLInputElement).value)"
                  type="number"
                  min="0"
                  :placeholder="$t('WysiwygField.auto')"
                  dir="ltr"
                  class="block w-full rounded border border-gray-300 px-2 py-1 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <span class="pb-1.5 text-gray-400">×</span>
              <div class="flex-1">
                <label class="block text-xs text-gray-600 mb-1">{{ $t('WysiwygField.height') }}</label>
                <input
                  :value="imageHeight ?? ''"
                  @input="onImageHeightInput(($event.target as HTMLInputElement).value)"
                  type="number"
                  min="0"
                  :placeholder="$t('WysiwygField.auto')"
                  dir="ltr"
                  class="block w-full rounded border border-gray-300 px-2 py-1 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            <label class="mt-2 flex items-center gap-2 text-xs text-gray-700">
              <input v-model="imageLock" type="checkbox" class="rounded" />
              {{ $t('WysiwygField.lockAspectRatio') }}
            </label>

            <div class="mt-3 flex justify-between gap-2">
              <button
                type="button"
                class="tb-btn px-3"
                @click.prevent="resetImageSize"
                :title="$t('WysiwygField.resetSize')"
              >
                <i class="bi bi-arrow-counterclockwise" /> {{ $t('WysiwygField.resetSize') }}
              </button>
              <div class="flex gap-1">
                <button
                  type="button"
                  class="tb-btn px-3"
                  @click.prevent="imageOpen = false"
                  v-text="$t('WysiwygField.cancel')"
                />
                <button
                  type="button"
                  class="tb-btn px-3 bg-indigo-600 text-white hover:bg-indigo-700"
                  @click.prevent="applyImage"
                  v-text="$t('WysiwygField.apply')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span class="tb-sep" aria-hidden="true" />

      <!-- Structure -->
      <div class="tb-group">
        <button
          type="button"
          class="tb-btn"
          :class="{'tb-active': editor.isActive('blockquote')}"
          @click.prevent="editor.chain().focus().toggleBlockquote().run()"
          :title="$t('WysiwygField.blockquote')"
        >
          <i class="bi bi-quote" />
        </button>
        <button
          type="button"
          class="tb-btn"
          @click.prevent="editor.chain().focus().setHorizontalRule().run()"
          :title="$t('WysiwygField.horizontalRule')"
        >
          <i class="bi bi-hr" />
        </button>
      </div>
      <span class="tb-sep" aria-hidden="true" />

      <!-- Source / undo / redo -->
      <div class="tb-group">
        <button type="button" class="tb-btn" @click.prevent="enterSourceMode" :title="$t('WysiwygField.viewSource')">
          <i class="bi bi-code-slash" />
        </button>
        <button
          type="button"
          class="tb-btn"
          @click.prevent="editor.chain().focus().undo().run()"
          :disabled="!editor.can().undo()"
          :title="$t('WysiwygField.undo')"
        >
          ↶
        </button>
        <button
          type="button"
          class="tb-btn"
          @click.prevent="editor.chain().focus().redo().run()"
          :disabled="!editor.can().redo()"
          :title="$t('WysiwygField.redo')"
        >
          ↷
        </button>
      </div>
    </div>

    <!-- Source-mode toolbar -->
    <div v-if="sourceMode" class="flex flex-wrap items-center gap-2 border-b border-gray-200 bg-amber-50 px-2 py-1.5">
      <span class="text-xs text-amber-800 px-1" v-text="$t('WysiwygField.editingRawHtml')" />
      <button type="button" class="tb-btn" @click.prevent="exitSourceMode" :title="$t('WysiwygField.backToEditor')">
        <i class="bi bi-arrow-left" /> {{ $t('WysiwygField.backToEditor') }}
      </button>
    </div>

    <!-- Editor host -->
    <div ref="editorHost" v-show="!sourceMode" />

    <!-- Source view textarea -->
    <textarea
      v-if="sourceMode"
      v-model="sourceText"
      class="block w-full font-mono text-xs p-3 outline-none resize-y"
      :style="{minHeight: (options.height ?? 200) + 'px'}"
      spellcheck="false"
      dir="ltr"
    />
  </div>
</template>

<style scoped>
@reference "@/css/app.css";

.tb-btn {
  @apply inline-flex h-8 min-w-8 items-center justify-center rounded px-2 text-sm text-gray-700
  hover:bg-gray-200 disabled:opacity-40 disabled:hover:bg-transparent
  transition-colors cursor-pointer;
}

.tb-active {
  @apply bg-indigo-100 text-indigo-700;
}

.tb-sep {
  @apply mx-1 h-6 w-px bg-gray-300;
}

.tb-group {
  @apply inline-flex items-center gap-1;
}

.tb-select {
  @apply leading-none h-8 ltr:pe-8 rtl:ps-8 rounded border border-gray-300 bg-white px-2 text-sm text-gray-700
  hover:border-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
  transition-colors cursor-pointer;
}
</style>
