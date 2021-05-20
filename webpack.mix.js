const mix = require('laravel-mix');

process.env.section = 'app';

global.prefix = '';

if (!mix.inProduction()) {
    mix.sourceMaps();
    mix.webpackConfig({devtool: 'inline-source-map'});
} else {
    global.prefix = '/min';
    mix.version();
}

if (process.env.section) {
    require(`${__dirname}/resources/mixes/${process.env.section}/webpack.mix.js`);
} else {
    console.error('No section set, use "process.env.section={section}"')
}
