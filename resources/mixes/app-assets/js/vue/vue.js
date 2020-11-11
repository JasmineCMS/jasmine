import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VDataTable from "./components/VDataTable";
import Editor from '@tinymce/tinymce-vue';
import Croppa from 'vue-croppa';
import draggable from 'vuedraggable';
import FileManager from 'laravel-file-manager';
import Datepicker from 'vuejs-datepicker';

Vue.config.devtools = true;

Vue.use(Vuex);
const store = new Vuex.Store({});
Vue.use(FileManager, {store});

Vue.use(VueI18n);

Vue.use(Croppa);

Vue.use(VDataTable);

const i18n = new VueI18n({
    locale: document.documentElement.lang,
    messages: {
        en: require('./lang/en').default,
        he: require('./lang/he').default,
    },
});

window.Vue = Vue;

(function () {
    const files = require.context('./components', true, /\.vue$/i);
    files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
})();

(function () {
    const files = require.context('./directives', true, /\.js$/i);
    files.keys().map(key => Vue.directive(key.split('/').pop().split('.')[0], files(key).default));
})();

Vue.component('draggable', draggable);

Vue.component('editor', Editor);

Vue.component('vuejs-datepicker', Datepicker);

Vue.mixin({
    computed: {
        '$csrf_token'() {
            return document.head.querySelector('meta[name="csrf-token"]').content;
        },
    },
});

const app = new Vue({
    el: '#app',
    i18n,
    store,

    data: {},

    methods: {
        logout() {
            this.$refs.logoutForm.submit();
        },

        remoteSubmit(ref) {
            if (this.$refs[ref]) {
                if (this.$refs[ref].reportValidity()) {
                    this.$refs[ref].submit();
                }
            }
        },
    },
});
