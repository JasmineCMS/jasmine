<template>
    <div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="button"
                        @click="changeFile"
                >Choose file
                </button>
            </div>
            <input type="text" class="form-control" :name="name" v-model="field_value">
        </div>

        <div v-if="showFm" class="modal fade show d-block" tabindex="-1" role="dialog"
             aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">File Manager | Choose image for {{ label }}</h5>
                        <button type="button" class="close" aria-label="Close" @click="showFm = false">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body p-0">
                        <file-manager-wrapper ref="fmw" :path="bread.fmPath"></file-manager-wrapper>
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
        changeFile() {
            this.showFm = true;

            Vue.nextTick(() => {
                let vm = this;
                let fm = this.$refs.fmw.$refs.fm;
                fm.$store.commit('fm/setFileCallBack', function (fileUrl) {
                    if (fileUrl.startsWith(document.location.origin)) {
                        fileUrl = fileUrl.replace(document.location.origin, '');
                    }

                    vm.field_value = fileUrl;

                    vm.showFm = false;
                });
            });
        },
    },

    watch: {},

    beforeMount() {

    }
}
</script>

<style scoped>
.fm {
    height: calc(100% - 76px);
}

.preview {
    cursor: pointer;
    max-width: 100%;
    max-height: 200px;
}
</style>
