const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

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
    }(),
);

mix
    .setResourceRoot(`../`)
    .setPublicPath(`public/${process.env.section}`)
    .i18n()
    .extract([
        'axios',
        'sweetalert2',
        'vue',
        'vue-i18n',
    ])
    .js(`resources/mixes/${process.env.section}/js/app.js`, `public/${process.env.section}/js`)
    .sass(`resources/mixes/${process.env.section}/sass/vendor.scss`, `public/${process.env.section}/css`)
    .sass(`resources/mixes/${process.env.section}/sass/app.scss`, `public/${process.env.section}/css`)
;
