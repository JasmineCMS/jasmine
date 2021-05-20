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
                height: 500,
                options: [],
            }, this.options),

        };
    },

    computed: {
        config() {
            return {
                height: this.opts.height,
                menubar: false,
                //language: 'he_IL',
                directionality: this.isLocaleRtl ? 'rtl' : 'ltr',
                file_picker_callback(callback, value, meta) {
                    let x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth
                    let y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight

                    switch (meta.filetype) {
                        case "image":
                            window.fmAllowedTypes = /jpe?g|bmp|gif|png|svg/;
                            break;

                        case "media":
                            window.fmAllowedTypes = /3gp|avi|flv|gifv|mkv|mov|mp4|mpe?g|ogg|ogv|webm|wmv/;
                            break;

                        default:
                            window.fmAllowedTypes = /.*/;
                    }

                    tinymce.activeEditor.windowManager.openUrl({
                        url: document.getElementById('app').dataset.fmTinymce5Url,
                        title: 'File Manager',
                        width: x * 0.8,
                        height: y * 0.8,
                        onMessage: (api, message) => {
                            callback(message.content, {text: message.text})
                        }
                    });
                },
                relative_urls: false,
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
            };
        },
    },
}
</script>

<style scoped>

</style>
