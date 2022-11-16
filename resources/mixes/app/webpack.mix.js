const mix = require('laravel-mix');
let sec = process.env.section;

mix
    .setResourceRoot(`../`)
    .setPublicPath(`public/${sec}-assets`)
    .webpackConfig(webpack => {
        return {
            output: {
                publicPath: `/jasmine-public/${sec}-assets/`, filename: '[name].js',
                chunkFilename: 'js/[name].js?id=[chunkhash]',
            },
            stats: {children: true},
        };
    })
    .vue(3).extract()
    .js(`resources/mixes/${sec}/js/app.js`, `public/${sec}-assets/js`)
    .sass(`resources/mixes/${sec}/sass/vendor.scss`, `public/${sec}-assets/css`)
    .sass(`resources/mixes/${sec}/sass/app.scss`, `public/${sec}-assets/css`)

    .copy('node_modules/tinymce/icons', `public/${sec + '-assets'}/js/icons`)
    .copy('node_modules/tinymce/plugins', `public/${sec + '-assets'}/js/plugins`)
    .copy('node_modules/tinymce/skins', `public/${sec + '-assets'}/js/skins`)
    .copy('node_modules/tinymce/themes', `public/${sec + '-assets'}/js/themes`)
;
