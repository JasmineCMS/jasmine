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
            <div class="modal-dialog modal-dialog-scrollable modal-xl h-100" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">File Manager | Choose image for {{ label }}</h5>
                        <button type="button" class="close" aria-label="Close" @click="showFm = false">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body p-0">
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
                w: 150, h: 150, placeholder: null, bg: 'e6e6e6', fg: '495057', ext: 'png',
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
        this.opts.placeholder = `${this.opts.w} x ${this.opts.h}`;

        this.field_value.src = this.field_value.src ||
            `https://via.placeholder.com/${this.opts.w}x${this.opts.h}/${this.opts.bg}/${this.opts.fg}.${this.opts.ext}?text=${this.opts.placeholder}`
        ;
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
    /*max-height: 200px;*/
    /*noinspection CssReplaceWithShorthandSafely*/
    background: linear-gradient(45deg,
    rgba(0, 0, 0, 0.0980392) 25%,
    transparent 25%, transparent 75%,
    rgba(0, 0, 0, 0.0980392) 75%,
    rgba(0, 0, 0, 0.0980392) 0),
    linear-gradient(45deg,
        rgba(0, 0, 0, 0.0980392) 25%,
        transparent 25%, transparent 75%,
        rgba(0, 0, 0, 0.0980392) 75%,
        rgba(0, 0, 0, 0.0980392) 0
    ), white;
    /*noinspection CssReplaceWithShorthandSafely*/
    background-repeat: repeat, repeat;
    /*noinspection CssReplaceWithShorthandSafely*/
    background-position: 0 0, 5px 5px;
    transform-origin: 0 0 0;
    background-origin: padding-box, padding-box;
    background-clip: border-box, border-box;
    background-size: 10px 10px, 10px 10px;
}
</style>
