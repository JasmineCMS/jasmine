<template>
    <div :class="{'is-invalid': invalid}">
        <input type="hidden" :name="name" :readonly="opts.readonly"
               :required="validation.indexOf('required') > -1" v-model="field_value">
        <sketch-picker v-model="colors" v-bind="opts"/>
    </div>
</template>

<script>
import Sketch from 'vue-color/src/components/Sketch';

export default {
    name: "ColorField",
    extends: JasmineBaseField,
    components: {'sketch-picker': Sketch},
    data() {
        return {
            colors: {},
            opts: Object.assign({}, this.options),
        };
    },

    watch: {
        colors: {
            deep: true,
            handler() {
                this.field_value = this.colors.hex8;
            },
        }
    },

    mounted() {
        this.colors = this.field_value;
    }
}
</script>

<style scoped>

</style>
