<template>
    <sketch-picker v-model="colors"/>
</template>

<script>
import Sketch from 'vue-color/src/components/Sketch';

export default {
    name: "ColorField",
    extends: JasmineBaseField,
    comments: {'sketch-picker': Sketch},
    data() {
        return {
            colors: {hex8: this.field_value},
            opts: Object.assign({
                type: 'text',
            }, this.options),
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
}
</script>

<style scoped>

</style>
