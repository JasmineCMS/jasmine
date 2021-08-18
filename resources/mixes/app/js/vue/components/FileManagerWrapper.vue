<template>
    <file-manager ref="fm" :settings="settings"></file-manager>
</template>

<script>
export default {
    name: "FileManagerWrapper",
    props: {
        path: {
            type: String,
            default: () => '',
        },
    },

    data() {
        return {
            settings: {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    Authorization: `Bearer ${window.localStorage.getItem('user-token')}`,
                },
                baseUrl: document.getElementById('app').dataset.fmUrl,
                windowsConfig: 2,                           // overwrite config
                lang: 'en',                                 // set language
            },
        };
    },

    computed: {
        fm() {
            return this.$refs?.fm;
        },
    },

    beforeMount() {
        this.settings.lang = this.$i18n.locale;
    },

    mounted() {
        this.$refs.fm.$el.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        this.fm.$store.commit(`fm/left/setView`, 'grid');

        setTimeout(() => {
            this.fm.$store.dispatch(`fm/${this.fm.$store.state.fm.activeManager}/selectDirectory`, {
                path: this.path, history: true
            }).catch(err => {
                if (err.response.status !== 422 || err.response.data?.errors?.path?.indexOf('pathNotFound') < 0) return;

                this.fm.$store.dispatch(`fm/${this.fm.$store.state.fm.activeManager}/selectDirectory`,
                    {path: '', history: true}).then(() => {

                    this.fm.$store.dispatch('fm/createDirectory', this.path).then(r => {
                        // if new directory created successfully
                        if (r.data.result.status !== 'success') return;

                        this.fm.$store.dispatch(`fm/${this.fm.$store.state.fm.activeManager}/selectDirectory`,
                            {path: this.path, history: true});
                    });

                });
            });
        }, 500);
    }
}
</script>

<style scoped>

</style>
