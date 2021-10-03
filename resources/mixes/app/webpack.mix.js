const mix = require('laravel-mix');

let sec = process.env.section;

// Extend Mix with the "i18n" method, that loads the vue-i18n-loader
mix.extend('i18n', new class {
    webpackRules() {
        return [
            {
                resourceQuery: /blockType=i18n/,
                type: 'javascript/auto',
                loader: '@kazupon/vue-i18n-loader',
            },
        ];
    }
}(),);

mix
    .setResourceRoot(`../`)
    .setPublicPath(`public/${sec}-assets`)
    .i18n()
    .vue()
    .extract([
        '@tinymce/tinymce-vue',
        'axios',
        'buffer',
        'codemirror',
        'cropperjs',
        'laravel-file-manager',
        'plyr',
        'qs',
        'setimmediate',
        'sortablejs',
        'sweetalert2',
        'tinymce',
        'vue',
        'vue-codemirror',
        'vue-croppa',
        'vue-i18n',
        'vuejs-datepicker',
        'vuedraggable',
        'vuex',
        'vue-color',
    ])
    .js(`resources/mixes/${sec}/js/app.js`, `public/${sec}-assets/js`)
    .sass(`resources/mixes/${sec}/sass/vendor.scss`, `public/${sec}-assets/css`)
    .sass(`resources/mixes/${sec}/sass/app.scss`, `public/${sec}-assets/css`)
    .copy('node_modules/tinymce/skins', `public/${sec + '-assets'}/js/skins`)
    .copy('node_modules/tinymce/icons', `public/${sec + '-assets'}/js/icons`)
;
