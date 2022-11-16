const JasmineBaseField = {
    props: {
        modelValue: {required: true},
        id: {type: String, required: true},
        name: {type: String, required: true},
        label: {type: String, required: true},
        options: {type: [Object], required: true},
        validation: {type: Array, required: true},
        invalid: {type: Boolean, required: true},
        locale: {type: String},
        isLocaleRtl: {type: Boolean, required: true},
    },
    inject: ['fm_path'],
    emits: ['update:modelValue'],

    data() {
        return {val: this.modelValue};
    },

    watch: {
        modelValue(v) {
            this.val = v;
        },

        val(v) {
            this.$emit('update:modelValue', v);
        },
    },
};

window.JasmineBaseField = JasmineBaseField;

export default JasmineBaseField;