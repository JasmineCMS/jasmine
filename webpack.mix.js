const mix = require('laravel-mix');

process.env.section = process.env.npm_config_mix || 'app';

if (process.env.npm_config_sourcemaps) {
    mix.sourceMaps();
}

if (!mix.inProduction()) {
    mix.sourceMaps();
    mix.webpackConfig({devtool: 'inline-source-map'});
} else {
    mix.version();
}

if (process.env.section) {
    require(`${__dirname}/resources/mixes/${process.env.section}/webpack.mix.js`);
} else {
    console.error('No section set, use "process.env.section={section}"')
}
