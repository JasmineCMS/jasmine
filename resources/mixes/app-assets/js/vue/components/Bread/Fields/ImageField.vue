<template>
    <div>
        <input type="file" :name="name+'[img]'" ref="file" class="d-none" accept="image/*"
               @change="onFileChange">
        <input type="hidden" :name="name+'[w]'" v-model="field_value.w">
        <input type="hidden" :name="name+'[h]'" v-model="field_value.h">
        <input type="hidden" :name="name+'[path]'" v-model="field_value.path">

        <div class="form-control w-auto d-inline-block p-4">
            <img :src="field_value.src" alt="preview" class="preview" @click="changeImage" ref="preview">
        </div>

        <div class="form-group mt-4">
            <label :for="id+'_alt'">
                {{ label }} Alt
            </label>
            <input class="form-control" type="text" :name="name+'[alt]'" v-model="field_value.alt">
        </div>
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
            };
        },

        methods: {
            changeImage() {
                this.$refs.file.click();
            },

            onFileChange(evt) {
                let files = evt.target.files || evt.dataTransfer.files;
                if (!files.length) {
                    return;
                }

                let reader = new FileReader();
                reader.onload = (rEvt) => {
                    this.field_value.src = rEvt.target.result;
                    setTimeout(() => {
                        this.field_value.w = this.$refs.preview.naturalWidth;
                        this.field_value.h = this.$refs.preview.naturalHeight;
                        //this.field_value.path = null;
                    }, 250);
                };

                reader.readAsDataURL(files[0]);
            },
        },

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
