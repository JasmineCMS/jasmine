<template>
    <select class="form-control" :class="{'is-invalid': invalid}"
            :multiple="opts.multiple"
            :readonly="opts.readonly"
            :required="validation.indexOf('required') > -1"
            :id="id" :name="name" v-model="field_value">
        <option v-for="(option, val) in opts.options" :value="val">
            {{ option }}
        </option>
    </select>
</template>

<script>
    export default {
        name: "SelectField",
        extends: JasmineBaseField,
        data() {
            return {
                opts: Object.assign({
                    options: [],
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
