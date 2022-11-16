const mix = require('laravel-mix');

process.env.section = process.env.npm_config_mix || 'app';

mix.sourceMaps(process.env.npm_config_sourcemaps || false);

mix.disableNotifications();

if (mix.inProduction()) {
    mix.version();
}

if (process.env.section) {
    require(`${__dirname}/resources/mixes/${process.env.section}/webpack.mix.js`);
} else {
    console.error('No section set, use "process.env.section={section}"')
}
