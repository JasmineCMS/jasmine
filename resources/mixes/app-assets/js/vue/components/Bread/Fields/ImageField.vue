<template>
    <div>
        <input type="hidden" :name="name+'[w]'" v-model="field_value.w">
        <input type="hidden" :name="name+'[h]'" v-model="field_value.h">
        <input type="hidden" :name="name+'[src]'" v-model="field_value.src">

        <div class="form-control w-auto d-inline-block p-2">
            <img :src="field_value.src" alt="preview" class="preview" @click="changeImage" ref="preview">
        </div>

        <div class="form-group mt-4">
            <label :for="id+'_alt'">
                {{ label }} Alt
            </label>
            <input class="form-control" type="text" :name="name+'[alt]'" v-model="field_value.alt">
        </div>

        <div v-if="showFm" class="modal fade show d-block" tabindex="-1" role="dialog"
             aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content" style="min-height: 80vh">
                    <div class="modal-header">
                        <h5 class="modal-title">File Manager | Choose image for {{ label }}</h5>
                        <button type="button" class="close" aria-label="Close" @click="showFm = false">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <file-manager-wrapper ref="fmw"></file-manager-wrapper>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showFm" class="modal-backdrop fade show"></div>
    </div>
</template>

<script>
    export default {
        name: "ImageField",
        extends: JasmineBaseField,

        data() {
            return {
                opts: Object.assign({
                    options: [],
                }, this.options),

                showFm: false,
            };
        },

        methods: {
            changeImage() {
                this.showFm = true;

                Vue.nextTick(() => {
                    let vm = this;
                    let fm = this.$refs.fmw.$refs.fm;
                    fm.$store.commit('fm/setFileCallBack', function (fileUrl) {
                        // todo: if note image
                        console.log(fileUrl);
                        window.fm = fm;

                        if (fileUrl.startsWith(document.location.origin)) {
                            fileUrl = fileUrl.replace(document.location.origin, '');
                        }

                        vm.field_value.src = fileUrl;

                        vm.showFm = false;

                        Vue.nextTick(() => {
                            setTimeout(() => {
                                vm.field_value.w = vm.$refs.preview.naturalWidth;
                                vm.field_value.h = vm.$refs.preview.naturalHeight;
                                //this.field_value.path = null;
                            }, 250);
                        });
                    });
                });
            },
        },

        watch: {},

        beforeMount() {
            this.field_value.src = this.field_value.src || `https://placehold.it/150x150`;
        }
    }
</script>

<style scoped>
    .preview {
        cursor: pointer;
        max-width: 100%;
        max-height: 200px;
    }
</style>
