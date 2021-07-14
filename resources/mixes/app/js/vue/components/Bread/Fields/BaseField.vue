<script>
let JasmineBaseField = {
    name: "BaseField",
    props: {
        value: {
            required: true,
        },

        id: {
            required: true,
            type: String,
        },

        name: {
            required: true,
            type: String,
        },

        label: {
            required: true,
            type: String,
        },

        options: {
            required: true,
        },

        validation: {
            required: true,
            type: Array,
        },

        invalid: {
            required: true,
            type: Boolean,
        },

        locale: {
            required: true,
        },

        isLocaleRtl: {
            required: true,
            type: Boolean,
        },
    },

    data() {
        return {
            field_value: this.value,
        };
    },

    computed: {
        bread() {
            let $breadEdit = this.$parent;
            while ($breadEdit.$options.name !== 'BreadEdit') {
                $breadEdit = $breadEdit.$parent;
            }

            return $breadEdit;
        },

        breadableExists() {
            return Object.keys(this.bread?.breadable).length !== 0;
        },
    },

    watch: {
        'value'(val) {
            this.field_value = val;
        },

        'field_value'() {
            this.$emit('input', this.field_value);
        },
    },

    mounted() {
        this.$on('');
    },
};

window.JasmineBaseField = JasmineBaseField;

export default JasmineBaseField;
</script>

<style scoped>

</style>
