<template>
    <textarea
        class="form-control form-control-sm" :class="{'is-invalid': invalid}"
        :rows="opts.rows"
        :placeholder="opts.placeholder"
        :autofocus="opts.autofocus"
        :readonly="opts.readonly"
        :dir="opts.dir"
        :maxlength="opts.maxlength"
        :minlength="opts.minlength"
        :required="validation.indexOf('required') > -1"
        :id="id" :name="name" v-model="val"/>
</template>

<script>
import JasmineBaseField from './BaseField';

export default {
  name: 'TextareaField',
  extends: JasmineBaseField,
  data() {
    return {
      opts: Object.assign({
        rows: 3,
      }, this.options),
    };
  },

  mounted() {

  },
};
</script>

<style scoped>

</style>
