<template>
  <div class="form-check form-switch">
    <input class="form-check-input" :class="{'is-invalid': invalid}"
           type="checkbox" role="switch" :id="id"
           :disabled="opts.disabled"
           :name="name" v-model="val"
           :required="validation.indexOf('required') > -1">
  </div>
</template>

<script>
import JasmineBaseField from './BaseField';

export default {
  name: 'SwitchField',
  extends: JasmineBaseField,
  data() {
    return {
      opts: Object.assign({
        options: [],
      }, this.options),
    };
  },

  beforeMount() {
    this.val = !!this.val;
  },
};
</script>

<style scoped>

</style>
