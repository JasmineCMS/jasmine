<template>
  <Multiselect
      :id="id" :name="name" v-model="val"
      :required="validation.indexOf('required') > -1"
      class="form-control"
      :class="{'is-invalid': invalid}"
      v-bind="opts"/>
</template>

<script>
import '@vueform/multiselect/themes/default.css';

import Multiselect from '@vueform/multiselect';
import JasmineBaseField from './BaseField';

export default {
  name: 'MultiSelectField',
  extends: JasmineBaseField,
  components: {Multiselect},
  data() {
    return {
      opts: Object.assign({
        options: [],
      }, this.options),
    };
  },
};
</script>

<style scoped>

</style>
