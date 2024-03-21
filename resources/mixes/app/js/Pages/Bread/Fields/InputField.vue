<template>
  <input :type="opts.type" class="form-control form-control-sm" :class="[{'is-invalid': invalid}, opts.class]"
         :style="opts.style"
         :placeholder="opts.placeholder"
         :pattern="opts.pattern"
         :autofocus="opts.autofocus"
         :autocomplete="opts.autocomplete"
         :step="opts.step"
         :max="opts.max"
         :min="opts.min"
         :readonly="opts.readonly"
         :disabled="opts.disabled"
         :dir="opts.dir"
         :required="validation.indexOf('required') > -1"
         :id="id" :name="name" v-model="val">
</template>

<script>
import JasmineBaseField from './BaseField';

export default {
  name: 'InputField',
  extends: JasmineBaseField,

  data() {
    return {
      opts: Object.assign({
        type: 'text',
      }, this.options),
    };
  },

  beforeMount() {
    if (this.val && this.opts.type === 'date') {
      this.val = this.val.match(/(?<d>\d{1,4}-\d{2}-\d{2})/)?.groups?.d || this.val;
    }
  },

  mounted() {
    if (['checkbox', 'radio'].indexOf(this.opts.type) > -1) {
      console.error(`${this.name} is using <input-field>, Please use <${this.opts.type}-field> instead of <input-field> for ${this.opts.type} fields`);
    }
  },
};
</script>

<style scoped>

</style>