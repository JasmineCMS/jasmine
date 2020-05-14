<template>
    <input :type="opts.type" class="form-control" :class="{'is-invalid': invalid}"
           :placeholder="opts.placeholder"
           :pattern="opts.pattern"
           :autofocus="opts.autofocus"
           :autocomplete="opts.autocomplete"
           :step="opts.step"
           :max="opts.max"
           :min="opts.min"
           :readonly="opts.readonly"
           :dir="opts.dir"
           :required="validation.indexOf('required') > -1"
           :id="id" :name="name" v-model="field_value">
</template>

<script>
    export default {
        name: "GroupedField",
        extends: JasmineBaseField,
        data() {
            return {
                opts: Object.assign({
                }, this.options),
            };
        },

        mounted() {

        }
    }
</script>

<style scoped>

</style>
