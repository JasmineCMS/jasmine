<template>
    <div>
        <input type="hidden" :id="id" :name="name" v-model="field_value">
        <editor :init="config" v-model="field_value"></editor>
    </div>
</template>

<script>
    export default {
        name: "WysiwygField",
        extends: JasmineBaseField,
        data() {
            return {
                opts: Object.assign({
                    options: [],
                }, this.options),

                config: {
                    height: 500,
                    menubar: false,
                    //language: 'he_IL',
                    //directionality: 'rtl',
                    //file_picker_callback:
                    plugins: 'link, table, code, lists, image, media',
                    toolbar: [
                        'undo redo',
                        'fontselect fontsizeselect',
                        'styleselect bold italic underline',
                        'forecolor backcolor',
                        'alignleft aligncenter alignright',
                        'bullist numlist outdent indent',
                        'link table',
                        'image media',
                        'code',
                    ].join(' | '),
                },

            };
        },

    }
</script>

<style scoped>

</style>
