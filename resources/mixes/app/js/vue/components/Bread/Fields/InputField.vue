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
           :disabled="opts.disabled"
           :dir="opts.dir"
           :required="validation.indexOf('required') > -1"
           :id="id" :name="name" v-model="field_value">
</template>

<script>
    export default {
        name: "InputField",
        extends: JasmineBaseField,
        data() {
            return {
                opts: Object.assign({
                    type: 'text',
                }, this.options),
            };
        },

        mounted() {
            if (['checkbox', 'radio'].indexOf(this.opts.type) > -1) {
                console.error(`${this.name} is using <input-field>, Please use <${this.opts.type}-field> instead of <input-field> for ${this.opts.type} fields`);
            }
        }
    }
</script>

<style scoped>

</style>
