import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({locale: document.documentElement.lang});

window.Vue = Vue;
const files = require.context('./components', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

const app = new Vue({
    el: '#app',
    i18n,

    data: {},

    methods: {
        logout() {
            this.$refs.logoutForm.submit();
        },
    },
});
