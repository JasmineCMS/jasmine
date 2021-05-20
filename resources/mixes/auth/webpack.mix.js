const mix = require('laravel-mix');

let sec = process.env.section;

mix
    .setResourceRoot(`../`)
    .setPublicPath(`public/${sec}-assets${global.prefix}`)
    //.extract([])
    //.js(`resources/mixes/${sec}/js/app.js`, `public/${sec}/js`)
    .sass(`resources/mixes/${sec}/sass/vendor.scss`, `public/${sec}-assets${global.prefix}/css`)
    .sass(`resources/mixes/${sec}/sass/app.scss`, `public/${sec}-assets${global.prefix}/css`)
;
