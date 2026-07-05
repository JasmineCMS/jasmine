<script setup lang="ts">
import FieldDispatcher, {type Field} from '@/js/components/FieldDispatcher.vue';
import {useLabel} from '@/js/composeables/useLabel.ts';

export interface GridItem {
  width: number;
  id: string;
  classes: string;
}

export interface Section extends GridItem {
  title: string;
  items: GridItem[];
}

const props = defineProps<{
  items: GridItem[];
  errors: Record<string, string>;
  rtl: boolean;
  prefix?: string;
  namespace?: string;
}>();

const model = defineModel();

const getColSpan = (width: number): string => {
  const spans: Record<number, string> = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
    4: 'md:col-span-4',
    5: 'md:col-span-5',
    6: 'md:col-span-6',
    7: 'md:col-span-7',
    8: 'md:col-span-8',
    9: 'md:col-span-9',
    10: 'md:col-span-10',
    11: 'md:col-span-11',
    12: 'md:col-span-12',
  };
  return `col-span-12 ${spans[width] || 'md:col-span-12'}`;
};

const getPath = (name: string): string => (props.prefix ? `${props.prefix}.${name}` : name);

const isSection = (item: GridItem): item is Section => 'items' in item;
const isField = (item: GridItem): item is Field => 'name' in item;

const parseLabel = useLabel();

const isRepeater = (field: Field) => {
  const repeats = field.repeats;
  if (typeof repeats === 'boolean') return repeats;
  return typeof repeats === 'number' && repeats > 1;
};
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <template v-for="item in items" :key="item.id">
      <div
        v-if="isSection(item) && item.items?.length"
        :class="[
          getColSpan(item.width),
          item.classes,
          'flex flex-col gap-5 p-5 sm:p-6 border border-gray-200 rounded-2xl bg-white shadow-[0_1px_2px_rgba(31,29,23,.04),0_12px_28px_-12px_rgba(31,29,23,.10)]',
        ]"
      >
        <h3 v-if="item.title" class="font-display text-xl font-semibold text-gray-900 -mb-1">
          {{ parseLabel(item.title, namespace || '', 'sections') }}
        </h3>
        <BreadGrid
          :items="item.items"
          v-model="model"
          :errors="errors"
          :prefix="prefix"
          :rtl="rtl"
          :namespace="namespace"
        />
      </div>
      <FieldDispatcher
        v-else-if="isField(item)"
        :field="item"
        :class="getColSpan(isRepeater(item) ? item.repeaterWidth : item.width)"
        v-model="(model as Record<string, unknown>)[item.name]"
        :errors="errors"
        :path="getPath(item.name)"
        :rtl="rtl"
        :namespace="namespace"
      />
    </template>
  </div>
</template>
