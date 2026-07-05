<script setup lang="ts">
import {computed} from 'vue';
import BreadGrid, {type GridItem} from '@/js/components/BreadGrid.vue';

const props = defineProps<{
  id: string;
  name: string;
  options: {
    class?: string;
    fields: Array<GridItem>;
    [key: string]: any;
  };
  rtl: boolean;
  validation: Array<string>;
  invalid: boolean;
  errors: Record<string, string>;
  path: string;
  namespace?: string;
}>();

const model = defineModel<any>({required: true});

const oddEven = computed(() => props.path.split('.').length % 2 === 0);
</script>

<template>
  <div class="p-4 rounded-xl" :class="[oddEven ? 'bg-gray-50' : 'bg-white']">
    <BreadGrid
      :items="options.fields"
      v-model="model"
      :errors="errors"
      :prefix="path"
      :rtl="rtl"
      :namespace="namespace"
    />
  </div>
</template>
