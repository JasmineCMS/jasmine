<template>
    <file-manager ref="fm" :settings="settings"></file-manager>
</template>

<script>
    export default {
        name: "FileManagerWrapper",
        data() {
            return {
                settings: {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        Authorization: `Bearer ${window.localStorage.getItem('user-token')}`,
                    },
                    baseUrl: document.getElementById('app').dataset.fmUrl,
                    windowsConfig: 2,                           // overwrite config
                    //lang: 'de',                                 // set language
                },
            };
        },

        mounted() {
            this.$refs.fm.$store.commit(`fm/left/setView`, 'grid');
        }
    }
</script>

<style scoped>

</style>
