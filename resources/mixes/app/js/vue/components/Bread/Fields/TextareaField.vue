<template>
    <textarea class="form-control" :class="{'is-invalid': invalid}"
              :rows="opts.rows"
              :placeholder="opts.placeholder"
              :autofocus="opts.autofocus"
              :readonly="opts.readonly"
              :dir="opts.dir"
              :required="validation.indexOf('required') > -1"
              :id="id" :name="name" v-model="field_value"></textarea>
</template>

<script>
    export default {
        name: "TextareaField",
        extends: JasmineBaseField,
        data() {
            return {
                opts: Object.assign({
                    rows: 5,
                }, this.options),
            };
        },

        mounted() {

        }
    }
</script>

<style scoped>

</style>
