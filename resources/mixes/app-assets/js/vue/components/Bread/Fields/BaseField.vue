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
        },

        data() {
            return {
                field_value: this.value,
            };
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
            this.$on('')
        },
    };

    window.JasmineBaseField = JasmineBaseField;

    export default JasmineBaseField;
</script>

<style scoped>

</style>
