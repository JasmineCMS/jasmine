<template>
    <select class="form-control" :class="{'is-invalid': invalid}"
            :multiple="opts.multiple"
            :readonly="opts.readonly"
            :required="validation.indexOf('required') > -1"
            :id="id" :name="name + (opts.multiple ? '[]': '')" v-model="field_value">
        <option v-for="(option, val) in available" :value="val">
            {{ option }}
        </option>
    </select>
</template>

<script>
import SelectField from "./SelectField";

export default {
    name: "RelationshipField",
    components: {SelectField},
    extends: JasmineBaseField,
    data() {
        return {
            opts: Object.assign({
                type: 'text',
            }, this.options),

            available: [],
        };
    },

    methods: {
        loadRelation() {
            axios.get('relations'
                + '?relation=' + this.opts.name
                + '&related_key_name=' + this.opts.related_key_name
                + '&related_title_field=' + this.opts.related_title_field
                + '&' + (document.location.search.match(/[\?|\&](?<l>_locale\=[^\&]+)/)?.groups?.l ?? '')
            ).then(r => {
                this.field_value = this.opts.multiple ? r.data.existing : (r.data.existing[0] || null);
                this.available = r.data.available;
            });
        },
    },

    mounted() {
        this.loadRelation();
    }
}
</script>

<style scoped>

</style>
