import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import inertia from '@inertiajs/vite';
import tailwindcss from '@tailwindcss/vite';
import svg from 'vite-svg-loader';
import vue from '@vitejs/plugin-vue';
import {viteStaticCopy} from 'vite-plugin-static-copy';

export default defineConfig({
  envDir: 'laravel',
  base: '/jasmine-public/build',
  build: {outDir: 'public/build', emptyOutDir: true},
  plugins: [
    laravel({
      hotFile: 'laravel/public/jasmine-public/hot',
      input: ['resources/css/app.css', 'resources/js/app.ts'],
      refresh: ['resources/views/**', 'src/**', 'routes/**'],
    }),
    inertia({ssr: false}),
    tailwindcss(),
    svg({svgo: false}),
    vue({template: {transformAssetUrls: {base: null, includeAbsolute: false}}}),
    viteStaticCopy({
      targets: [
        {
          src: './vendor/alexusmai/laravel-file-manager/resources/assets/',
          dest: 'file-manager',
          rename: {stripBase: 5},
          transform: (content, filename) => {
            if (filename.endsWith('file-manager.js'))
              return content
                .toString()
                .replace(`this.settings)`, `window.fmSettings || {})`)
                .replace(/setAxiosConfig\(\){([^.]+)\.defaults\./, `setAxiosConfig(){window._HTTP=$1;$1.defaults.`);

            return content;
          },
        },
      ],
    }),
  ],
  resolve: {alias: {'@': fileURLToPath(new URL('./resources', import.meta.url))}},
});
