<template>
  <select class="form-select form-select-sm" :class="{'is-invalid': invalid}"
          :multiple="opts.multiple"
          :readonly="opts.readonly"
          :required="validation.indexOf('required') > -1"
          :id="id" :name="name" v-model="val">
    <option v-for="(option, v) in opts.options" :value="v">
      {{ option }}
    </option>
  </select>
</template>

<script>
import JasmineBaseField from './BaseField';

export default {
  name: 'SelectField',
  extends: JasmineBaseField,
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
