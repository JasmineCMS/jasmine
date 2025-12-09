<template>
  <Vue3JsonEditor :model-value="val" @json-change="v => (val = v)" v-bind="opts"/>
</template>

<script>
import JasmineBaseField from './BaseField';

import {Vue3JsonEditor} from 'vue3-json-editor';

export default {
  name: 'JsonField',
  extends: JasmineBaseField,
  components: {Vue3JsonEditor},
  data() {
    return {
      opts: Object.assign({}, this.options),
    };
  },

  mounted() {

  },
};
</script>

<style scoped>

</style>
