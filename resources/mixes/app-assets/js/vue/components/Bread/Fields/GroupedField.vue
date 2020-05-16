<template>
    <div class="form-row">
        <!-- Loop fields -->
        <div v-for="(field, fi) in opts.fields" :key="field.id+fi"
             class="field form-group" :class="field.width">
            <template>
                <label :for="field.id">
                    {{ field.label }}
                </label>
                <component :is="field.component" :id="field.id+fi" :name="name+'['+field.name+']'"
                           :invalid="!!errors[field.name]" v-model="field_value[field.name]"
                           :label="field.label" :options="field.options" :validation="field.validation"
                ></component>
                <small v-if="field.description" :id="field.id+ 'Help'" class="form-text text-muted">
                    {{ field.description }}
                </small>
                <span v-if="errors[field.name]" class="invalid-feedback" role="alert">
                                    <strong v-text="errors[field.name][0]"></strong>
                                </span>
            </template>
        </div>
        <!-- /Loop fields -->
    </div>
</template>

<script>
    export default {
        name: "GroupedField",
        extends: JasmineBaseField,
        data() {
            return {
                opts: Object.assign({
                    fields: [],
                }, this.options),

                //values: {},
                old: {},
                errors: {},
            };
        },

        methods: {

        },

        beforeMount() {
            let fieldName = this.name.match(/(?<name>.*)\[(?<i>\d+)\]/).groups;

            //Vue.set(this, 'values', this.$parent.$parent.values[fieldName.name][fieldName.i]);
            //this.values = this.$parent.$parent.values[fieldName.name][fieldName.i];
        },

        mounted() {
        }
    }
</script>

<style scoped>

</style>
