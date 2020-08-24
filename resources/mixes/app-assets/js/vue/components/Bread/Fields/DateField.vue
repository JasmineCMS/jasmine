<template>
    <div>
        <input type="hidden" :name="name" v-model="field_value">
        <vuejs-datepicker v-model="date" :id="id" :format="format" @input="update"
                          placeholder="dd.mm.yyyy" :language="dLocales[$i18n.locale] || dLocales.en"
                          :required="validation.indexOf('required') > -1"
                          :input-class="{'form-control': 1, 'is-invalid': invalid}"></vuejs-datepicker>
    </div>
</template>

<script>
import {en, he} from 'vuejs-datepicker/dist/locale';

export default {
    name: "DateField",
    extends: JasmineBaseField,
    data() {
        return {
            opts: Object.assign({
                type: 'text',
            }, this.options),

            date: null,
            dLocales: {
                en, he,
            },
        };
    },

    methods: {
        update() {
            this.field_value = this.date.toISOString().slice(0, 19).replace('T', ' ');
        },

        format(d) {
            let day = d.getDate().toString().padStart(2, '0');
            let month = (d.getMonth() + 1).toString().padStart(2, '0');
            let year = d.getFullYear();
            return `${day}.${month}.${year}`;
        },
    },

    mounted() {
        if (this.field_value) {
            this.date = new Date(this.field_value);
        }

    }
}
</script>

<style scoped>

</style>
