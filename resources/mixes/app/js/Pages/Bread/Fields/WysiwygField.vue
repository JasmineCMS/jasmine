<template>
  <div :class="{'j-is-invalid': invalid}">
    <vue-tinymce :init="config" v-model="val" />
  </div>
</template>

<script>
import JasmineBaseField from './BaseField';

export default {
  name: 'WysiwygField',
  extends: JasmineBaseField,
  data() {
    return {
      opts: Object.assign(
        {
          height: 500,
          content_css: [],
          content_style: '',
          config: {},
        },
        this.options,
      ),
    };
  },

  computed: {
    config() {
      let vm = this;
      return {
        content_css: this.opts.content_css,
        content_style: this.opts.content_style,
        height: this.opts.height,
        menubar: false,
        //language: 'he_IL',
        directionality: this.isLocaleRtl ? 'rtl' : 'ltr',
        file_picker_callback(callback, value, meta) {
          let x =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.getElementsByTagName('body')[0].clientWidth;
          let y =
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.getElementsByTagName('body')[0].clientHeight;

          let params = {};
          switch (meta.filetype) {
            case 'image':
              params.fmAllowedTypes = '/jpe?g|bmp|gif|png|svg/';
              break;

            case 'media':
              params.fmAllowedTypes = '/3gp|avi|flv|gifv|mkv|mov|mp4|mpe?g|ogg|ogv|webm|wmv/';
              break;

            default:
              params.fmAllowedTypes = '/.*/';
          }

          let onSelect = evt => {
            let url = evt.detail.url;
            if (url.startsWith(document.location.origin)) {
              url = url.replace(document.location.origin, '');
            }

            postMessage({
              mceAction: 'insert',
              content: url,
              text: url.split('/').pop(),
            });

            postMessage({mceAction: 'close'});
          };

          window.addEventListener('fm-chosen', onSelect);
          window.tinymce.activeEditor.windowManager.openUrl({
            url: vm.route('jasmine.fm.standalone', params),
            title: 'File Manager',
            width: x * 0.8,
            height: y * 0.8,
            onMessage: (api, message) => {
              callback(message.content, {text: message.text});
            },
            onClose: () => window.removeEventListener('fm-chosen', onSelect),
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
        ...this.opts.config,
      };
    },
  },
};
</script>

<style scoped></style>
