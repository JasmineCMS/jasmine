<template>
    <div :class="{'is-invalid': invalid}" style="position: relative;" @click="togglePicker($event)">
        <input type="hidden" :name="name" :readonly="opts.readonly"
               :required="validation.indexOf('required') > -1" v-model="field_value">
        <div class="form-control" style="font-size: 1.35rem; cursor: pointer;">
            <div class="h-100" :style="{background:field_value}">&nbsp;</div>
        </div>
        <div v-show="show" class="holder">
            <sketch-picker v-model="colors" v-bind="opts"/>
        </div>
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
            show: false,
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

    methods: {
        showPicker() {
            document.addEventListener('click', this.documentClick);
            this.show = true;
        },
        hidePicker() {
            document.removeEventListener('click', this.documentClick);
            this.show = false;
        },
        togglePicker() {
            this.show ? this.hidePicker() : this.showPicker();
        },

    },
}
</script>

<style lang="scss" scoped>
.holder {
    position: absolute;
    z-index: 1;
    top: 100%;
}
</style>
