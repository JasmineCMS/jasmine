<script setup lang="ts">
import {computed, ref, watch} from 'vue';
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxTrigger,
  ComboboxViewport,
  ComboboxVirtualizer,
} from 'reka-ui';
import {useSortable} from '@vueuse/integrations/useSortable';

type Option = {value: any; label: string; disabled?: boolean; [key: string]: any};
type Group = {label: string | null; options: Option[]};

const props = defineProps<{
  id: string;
  name: string;
  options: {
    class?: string;
    mode?: 'single' | 'multiple' | 'tags';
    /** when true, `options` is Group[]: [{label, options: Option[]}] */
    groups?: boolean;
    options?: Option[] | Group[];
    disabled?: boolean;
    sortable?: boolean;
    placeholder?: string;
    slots?: Record<'option' | 'tag', string>;
    [key: string]: any;
  };
  rtl: boolean;
  validation: Array<string>;
  invalid: boolean;
  errors: Record<string, string>;
  path: string;
}>();

const model = defineModel<any>({required: true});

const open = ref(false);
const searchTerm = ref('');
const inputComp = ref<any>(null);

const hasTyped = ref(false);
watch(open, () => (hasTyped.value = false));

function onAnchorClick(e: MouseEvent) {
  if (disabled.value) return;
  // the chevron toggles open/closed on its own; don't fight it
  if ((e.target as HTMLElement).closest('[data-msf-toggle]')) return;
  const el: HTMLInputElement | undefined = inputComp.value?.$el;
  if (el && document.activeElement !== el) {
    el.focus();
    // existing display text gets replaced by the first keystroke
    if (el.value) el.select();
  }
  open.value = true;
}

const mode = computed(() => props.options.mode ?? 'single');
const isMulti = computed(() => mode.value !== 'single');
const disabled = computed(() => !!props.options.disabled);
const sortable = computed(() => props.options.sortable !== false);
const isRequired = computed(() => props.validation.includes('required'));

const hasValue = computed(() =>
  isMulti.value ? Array.isArray(model.value) && model.value.length > 0 : model.value != null,
);

/** Normalized to Group[] even when groups === false. */
const groupedOptions = computed<Group[]>(() => {
  const raw = (props.options.options ?? []) as any[];
  if (props.options.groups) return raw as Group[];
  return [{label: null, options: raw as Option[]}];
});

const flatOptions = computed<Option[]>(() => groupedOptions.value.flatMap((g) => g.options ?? []));

const searchQuery = computed(() => (hasTyped.value ? searchTerm.value.trim().toLowerCase() : ''));

const filteredGroups = computed<Group[]>(() =>
  groupedOptions.value
    .map((g) => ({
      ...g,
      options: (g.options ?? []).filter(
        (o) => !searchQuery.value || String(o.label).toLowerCase().includes(searchQuery.value),
      ),
    }))
    .filter((g) => g.options.length),
);

const filteredFlat = computed<Option[]>(() => filteredGroups.value.flatMap((g) => g.options));
const selectableFlat = computed<Option[]>(() => filteredFlat.value.filter((o) => !o.disabled));

// ----------------------------------------------------------- value mapping ---

/** Null-safe value key: a {value: null, label: 'None'} option stays selectable. */
const keyOf = (v: any) => (v === null || v === undefined ? '\u0000null' : String(v));

const optByVal = (val: any): Option | null => {
  if (val === undefined) return null;
  return flatOptions.value.find((o) => keyOf(o.value) === keyOf(val)) ?? null;
};

const selectedKeys = computed(() => new Set<string>((Array.isArray(model.value) ? model.value : []).map(keyOf)));

/** Option objects matching the model, preserving model order. */
const selectedOptions = computed<Option[]>(() => {
  if (isMulti.value) {
    const vals: any[] = Array.isArray(model.value) ? model.value : [];
    return vals.map(optByVal).filter((o): o is Option => !!o);
  }
  const o = optByVal(model.value);
  return o ? [o] : [];
});

/** ComboboxRoot binds option objects; this proxy maps them onto scalar model values. */
const comboboxModel = computed({
  get: () => (isMulti.value ? selectedOptions.value : (selectedOptions.value[0] ?? null)),
  set: (v: Option[] | Option | null) => {
    if (isMulti.value) {
      model.value = ((v as Option[]) ?? []).map((o) => o.value);
    } else {
      model.value = v ? (v as Option).value : null;
      searchTerm.value = '';
      hasTyped.value = false;
    }
  },
});

const tagsEl = ref<HTMLElement | null>(null);

useSortable(tagsEl, [], {
  watchElement: true, // container is inside v-if — attach whenever it (re)appears
  animation: 150,
  disabled: !sortable.value,
  onUpdate: (e: {item: HTMLElement; from: HTMLElement; oldIndex?: number; newIndex?: number}) => {
    const {item, from, oldIndex, newIndex} = e;
    if (oldIndex == null || newIndex == null || oldIndex === newIndex) return;

    // revert SortableJS's DOM mutation
    item.remove();
    from.insertBefore(item, from.children[oldIndex] ?? null);

    // chip order === model order, so reorder the scalar values
    const vals: any[] = Array.isArray(model.value) ? [...model.value] : [];
    const [moved] = vals.splice(oldIndex, 1);
    vals.splice(newIndex, 0, moved);
    model.value = vals;
  },
});

// --------------------------------------------------------------- actions ---

const canClear = computed(
  () => !isMulti.value && !disabled.value && selectedOptions.value.length > 0 && !isRequired.value,
);

function deselect(o: Option) {
  model.value = (Array.isArray(model.value) ? model.value : []).filter((v: any) => keyOf(v) !== keyOf(o.value));
}

function clear() {
  model.value = isMulti.value ? [] : null;
  searchTerm.value = '';
}

function toggleOption(o: Option) {
  if (selectedKeys.value.has(keyOf(o.value))) {
    deselect(o);
  } else {
    model.value = [...(Array.isArray(model.value) ? model.value : []), o.value];
  }
}

function onItemSelect(e: any) {
  if (!isMulti.value) return;
  // Preventing default keeps the dropdown open between picks — but in Reka it
  // also cancels the built-in modelValue update, so we toggle the value
  // ourselves from the event payload (SelectEvent carries it in detail.value).
  e.preventDefault();
  const o: Option | undefined = e.detail?.value;
  if (o) toggleOption(o);
  searchTerm.value = '';
  hasTyped.value = false;
}

function onBackspace() {
  if (isMulti.value && !searchTerm.value && selectedOptions.value.length) {
    deselect(selectedOptions.value[selectedOptions.value.length - 1]);
  }
}

function addAll(options: Option[]) {
  const current: any[] = Array.isArray(model.value) ? [...model.value] : [];
  const keys = new Set(current.map(keyOf));
  for (const o of options) {
    if (!keys.has(keyOf(o.value))) {
      current.push(o.value);
      keys.add(keyOf(o.value));
    }
  }
  model.value = current;
}

function removeAll(options: Option[]) {
  const drop = new Set(options.map((o) => keyOf(o.value)));
  model.value = (Array.isArray(model.value) ? model.value : []).filter((v: any) => !drop.has(keyOf(v)));
}

const allFilteredSelected = computed(
  () => selectableFlat.value.length > 0 && selectableFlat.value.every((o) => selectedKeys.value.has(keyOf(o.value))),
);

const toggleAll = () => (allFilteredSelected.value ? removeAll(selectableFlat.value) : addAll(selectableFlat.value));

const groupSelectable = (g: Group) => (g.options ?? []).filter((o) => !o.disabled);

const groupAllSelected = (g: Group) => {
  const sel = groupSelectable(g);
  return sel.length > 0 && sel.every((o) => selectedKeys.value.has(keyOf(o.value)));
};

const toggleGroup = (g: Group) => (groupAllSelected(g) ? removeAll(groupSelectable(g)) : addAll(groupSelectable(g)));

// ------------------------------------------------- legacy backend slots ---
// Runtime-compiled template strings from the PHP config (rarely used).
// Requires the Vue build with the runtime compiler.

const compiledSlots = computed<Record<string, any>>(() => {
  const out: Record<string, any> = {};
  for (const [k, template] of Object.entries(props.options.slots ?? {})) {
    out[k] = {props: ['props'], template};
  }
  return out;
});
</script>

<template>
  <div :class="{'pointer-events-none opacity-60': disabled}">
    <ComboboxRoot
      v-model="comboboxModel"
      v-model:open="open"
      :multiple="isMulti"
      :disabled="disabled"
      :ignore-filter="true"
      :open-on-click="true"
      :reset-search-term-on-blur="true"
      by="value"
      :dir="rtl ? 'rtl' : 'ltr'"
    >
      <ComboboxAnchor
        class="flex min-h-9 w-full cursor-text flex-wrap items-center gap-1 rounded-md border bg-white px-2 py-1 shadow-xs sm:text-sm transition-colors duration-200"
        :class="
          invalid
            ? 'border-red-300 text-red-900 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500'
            : 'border-gray-300 text-gray-900 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500'
        "
        @click="onAnchorClick"
      >
        <!-- tags mode: chips, drag-reorderable via useSortable when sortable -->
        <span v-if="mode === 'tags' && selectedOptions.length" ref="tagsEl" class="flex flex-wrap items-center gap-1">
          <span
            v-for="o in selectedOptions"
            :key="keyOf(o.value)"
            class="jsm-msf-tag"
            :class="{'cursor-grab': sortable}"
          >
            <component :is="compiledSlots.tag" v-if="compiledSlots.tag" :props="{option: o}" />
            <span v-else v-text="o.label" />
            <button
              type="button"
              class="jsm-msf-tag-x"
              :aria-label="$t('MultiSelectField.Remove')"
              @mousedown.prevent.stop
              @click.prevent.stop="deselect(o)"
              v-text="'×'"
            />
          </span>
        </span>

        <!-- multiple mode: count summary -->
        <span
          v-if="mode === 'multiple' && selectedOptions.length"
          class="text-gray-700"
          v-text="
            selectedOptions.length === 1
              ? selectedOptions[0].label
              : $t('MultiSelectField.n options selected', {n: selectedOptions.length})
          "
        />

        <ComboboxInput
          :id="id"
          :name="name"
          ref="inputComp"
          v-model="searchTerm"
          class="min-w-16 flex-1 border-0 bg-transparent p-0 sm:text-sm shadow-none outline-none focus:ring-0"
          :class="invalid ? 'placeholder-red-300' : 'placeholder-gray-400'"
          :display-value="(o: any) => o?.label ?? ''"
          :placeholder="selectedOptions.length ? '' : (options.placeholder ?? '')"
          :required="isRequired && !hasValue"
          :aria-invalid="invalid || undefined"
          @input="hasTyped = true"
          @keydown.backspace="onBackspace"
        />

        <button
          v-if="canClear"
          type="button"
          class="cursor-pointer px-1 text-gray-400 transition-colors duration-200 hover:text-gray-600"
          :aria-label="$t('MultiSelectField.Clear')"
          @mousedown.prevent.stop
          @click.prevent.stop="clear"
          v-text="'×'"
        />

        <ComboboxTrigger
          data-msf-toggle
          class="cursor-pointer px-1 text-gray-400"
          tabindex="-1"
          :aria-label="$t('MultiSelectField.Toggle options')"
        >
          <svg class="size-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.23 8.27a.75.75 0 0 1 0-1.06z"
            />
          </svg>
        </ComboboxTrigger>
      </ComboboxAnchor>

      <ComboboxPortal>
        <ComboboxContent
          position="popper"
          :side-offset="4"
          :dir="rtl ? 'rtl' : 'ltr'"
          class="z-1100 flex flex-col overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg"
          :style="{
            width: 'var(--reka-combobox-trigger-width)',
            maxHeight: 'min(20rem, var(--reka-combobox-content-available-height))',
          }"
        >
          <!-- select all (operates on filtered, enabled options) -->
          <button
            v-if="isMulti && filteredFlat.length"
            type="button"
            class="flex w-full shrink-0 cursor-pointer items-center gap-2 border-b border-gray-100 px-3 py-1.5 text-left text-xs font-medium text-indigo-600 transition-colors duration-200 hover:bg-indigo-50"
            @mousedown.prevent
            @click.prevent="toggleAll"
          >
            <span
              v-text="allFilteredSelected ? $t('MultiSelectField.Deselect all') : $t('MultiSelectField.Select all')"
            />
            <span class="text-gray-400" v-text="`(${selectableFlat.length})`" />
          </button>

          <ComboboxViewport class="min-h-0 flex-1 overflow-y-auto p-1">
            <ComboboxEmpty
              class="px-3 py-2 text-gray-400 sm:text-sm"
              v-text="$t('MultiSelectField.No results found')"
            />

            <!-- grouped -->
            <template v-if="options.groups">
              <ComboboxGroup v-for="(g, gi) in filteredGroups" :key="gi">
                <ComboboxLabel
                  class="flex items-center justify-between px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-500"
                >
                  <span v-text="g.label" />
                  <button
                    v-if="isMulti && groupSelectable(g).length"
                    type="button"
                    class="cursor-pointer font-normal normal-case text-indigo-600 hover:underline"
                    @mousedown.prevent
                    @click.prevent="toggleGroup(g)"
                    v-text="groupAllSelected(g) ? $t('MultiSelectField.none') : $t('MultiSelectField.all')"
                  />
                </ComboboxLabel>
                <ComboboxItem
                  v-for="o in g.options"
                  :key="keyOf(o.value)"
                  :value="o"
                  :disabled="!!o.disabled"
                  class="jsm-msf-item"
                  @select="onItemSelect"
                >
                  <component :is="compiledSlots.option" v-if="compiledSlots.option" :props="{option: o}" />
                  <span v-else v-text="o.label" />
                  <ComboboxItemIndicator class="ms-auto text-indigo-600" v-text="'✓'" />
                </ComboboxItem>
              </ComboboxGroup>
            </template>

            <!-- flat + virtualized (large lists) -->
            <ComboboxVirtualizer
              v-else-if="filteredFlat.length > 100"
              v-slot="{option}"
              :options="filteredFlat"
              :text-content="(o: any) => o.label"
              :estimate-size="32"
            >
              <ComboboxItem :value="option" :disabled="!!option.disabled" class="jsm-msf-item" @select="onItemSelect">
                <component :is="compiledSlots.option" v-if="compiledSlots.option" :props="{option}" />
                <span v-else v-text="option.label" />
                <ComboboxItemIndicator class="ms-auto text-indigo-600" v-text="'✓'" />
              </ComboboxItem>
            </ComboboxVirtualizer>

            <!-- flat, small -->
            <template v-else>
              <ComboboxItem
                v-for="o in filteredFlat"
                :key="keyOf(o.value)"
                :value="o"
                :disabled="!!o.disabled"
                class="jsm-msf-item"
                @select="onItemSelect"
              >
                <component :is="compiledSlots.option" v-if="compiledSlots.option" :props="{option: o}" />
                <span v-else v-text="o.label" />
                <ComboboxItemIndicator class="ms-auto text-indigo-600" v-text="'✓'" />
              </ComboboxItem>
            </template>
          </ComboboxViewport>
        </ComboboxContent>
      </ComboboxPortal>
    </ComboboxRoot>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.jsm-msf-tag {
  @apply inline-flex items-center gap-1 rounded bg-indigo-100 px-1.5 py-0.5 text-xs text-indigo-800;
}

.jsm-msf-tag-x {
  @apply -me-0.5 cursor-pointer rounded px-0.5 leading-none text-indigo-500 hover:bg-indigo-200 hover:text-indigo-900;
}
</style>

<style>
/* unscoped: dropdown items render through ComboboxPortal, outside this component's DOM */
.jsm-msf-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;
  user-select: none;
}

.jsm-msf-item[data-highlighted] {
  background: var(--color-indigo-50, #eef2ff);
}

.jsm-msf-item[data-state='checked'] {
  font-weight: 500;
}

.jsm-msf-item[data-disabled] {
  opacity: 0.45;
  cursor: not-allowed;
}
</style>
