import {createStore} from 'vuex';
import * as Vue from 'vue';
import * as SfcLoader from 'vue3-sfc-loader/dist/vue3-sfc-loader.esm';
import {createInertiaApp, Head, Link} from '@inertiajs/inertia-vue3';
import {InertiaProgress} from '@inertiajs/progress';
import {ZiggyVue} from 'ziggy-js/src/js/vue';
import FileManager from 'laravel-file-manager';
import {createI18n} from 'vue-i18n';
import VueTinymce from '@tinymce/tinymce-vue';
import draggable from 'vuedraggable';

import Swal from './inc/Swal';
import Layout from './Shared/Layout';
import DataTable from './Shared/DataTable';
import DatePicker from './Shared/DatePicker.vue';
import JasmineBaseField from './Pages/Bread/Fields/BaseField';
import GroupedField from './Pages/Bread/Fields/GroupedField';
import InputField from './Pages/Bread/Fields/InputField';
import TextareaField from './Pages/Bread/Fields/TextareaField';
import SelectField from './Pages/Bread/Fields/SelectField';
import SwitchField from './Pages/Bread/Fields/SwitchField';
import WysiwygField from './Pages/Bread/Fields/WysiwygField';
import ColorField from './Pages/Bread/Fields/ColorField';
import FileField from './Pages/Bread/Fields/FileField';
import VideoField from './Pages/Bread/Fields/VideoField';
import GeocodingField from './Pages/Bread/Fields/GeocodingField';
import ImageField from './Pages/Bread/Fields/ImageField';
import RelationshipField from './Pages/Bread/Fields/RelationshipField';
import MultiSelectField from "./Pages/Bread/Fields/MultiSelectField.vue";

window.JasmineBaseField = JasmineBaseField;
window.Swal = Swal;

window.Vue = Vue;
window.SfcLoader = SfcLoader;

require('./inc/tinymce');

(async function () {
    const store = createStore({});
    const Ziggy = await fetch(document.head.querySelector('meta[name="routes"]').content).then(r => r.json());
    const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

    let globals = Vue.reactive({});

    const i18n = createI18n({
        locale: document.documentElement.lang,
        fallbackLocale: 'en',
        silentTranslationWarn: true,
        useScope: 'global',
    });

    const fixed = '_' + Math.floor(Math.random() * 99999999) + 100000;
    window[fixed] = window[fixed] || {};

    async function loadGlobals() {
        let res = await fetch(document.head.querySelector('meta[name="globals"]').content).then(r => r.json());

        Object.keys(res).forEach(k => globals[k] = res[k]);
    }

    createInertiaApp({
        title: (title) => {
            window[fixed].title = title;
            return `${title} - Jasmine - ${appName}`;
        },
        resolve: name => import(/* webpackChunkName: "[request]" */ `./Pages/${name}`),
        setup({el, App, props, plugin}) {
            window.app = Vue.createApp({
                render: () => Vue.h(App, props),
                beforeCreate() {
                    loadGlobals();
                },
                methods: {
                    loadGlobals,
                },
                mounted() {
                    document.getElementById('loader').remove();
                    window.addEventListener('keydown',
                        e => (e.key?.toLowerCase() === 'r' && e.shiftKey
                                && ['input', 'select', 'textarea'].indexOf(e.target.tagName?.toLowerCase()) < 0)
                            && this.$inertia.reload(),
                    );
                },
            })
                .use(i18n).use(store).use(plugin)
                .use(ZiggyVue, Ziggy)
                .use(FileManager, {store});

            app
                .component('draggable', draggable)
                .component('Head', Head)
                .component('InertiaLink', Link)
                .component('vue-tinymce', VueTinymce)
                .component('Layout', Layout)
                .component('DataTable', DataTable)
                .component('DatePicker', DatePicker)
                .component('GroupedField', GroupedField)
                .component('InputField', InputField)
                .component('TextareaField', TextareaField)
                .component('SelectField', SelectField)
                .component('SwitchField', SwitchField)
                .component('WysiwygField', WysiwygField)
                .component('ColorField', ColorField)
                .component('FileField', FileField)
                .component('VideoField', VideoField)
                .component('GeocodingField', GeocodingField)
                .component('ImageField', ImageField)
                .component('RelationshipField', RelationshipField)
                .component('MultiSelectField', MultiSelectField);

            app.config.globalProperties.$globals = globals;
            app.config.globalProperties.$fixed = window[fixed];

            fetch(document.head.querySelector('meta[name="locale"]').content).then(r => r.json())
                .then(m => {
                    i18n.global.setLocaleMessage(document.documentElement.lang, m);
                    document.dispatchEvent(new CustomEvent('jasmine:beforeMount', {detail: {app: app}}));
                    app.mount(el);
                });
        },
    });

    InertiaProgress.init({color: '#29d', delay: 25});
})();