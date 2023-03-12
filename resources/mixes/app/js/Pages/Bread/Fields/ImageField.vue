<template>
  <div>
    <div class="border border-2 d-inline-block" ref="dz">
      <div class="preview position-relative" @dragover.prevent @drop.prevent>
        <input v-if="!val.src && validation.indexOf('required') > -1" type="text" required class="sr-only">
        <img v-if="val.src" :src="val.src" :alt="val.alt" class="d-block mx-auto"
             @drop="handleDrop" @dragenter="dragEnter" @dragleave="dragLeave">
        <svg v-else @drop="handleDrop" class="d-block mx-auto"
             xmlns="http://www.w3.org/2000/svg" :width="opts.w" :height="opts.h" fill="#d1d1d1"
             viewBox="-16 -16 48 48">
          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          <path
              d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
        </svg>

        <button v-if="val.src" type="button" @click="removeImg" class="delete-btn shadow-lg border-0">
          <i class="fs-6 bi bi-trash3"/>
        </button>

        <button type="button" @click="showFm = true" class="fm-btn py-1 shadow-lg border-0">
          <i class="fs-4 bi bi-pencil mx-1 text-primary"/>
        </button>

        <div v-if="loading" class="jf-loading">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      <input type="text" class="form-control form-control-sm mt-2" v-model="val.alt" :placeholder="$t('Alt')">
    </div>

    <div v-if="showCropper" class="modal fade show d-block" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h5 class="modal-title">Crop {{ label }}</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="closeCropper"/>
          </div>
          <div class="modal-body p-0">
            <div class="has-cropper mx-auto">
              <VueCropper
                  ref="cropper"
                  class="cropper h-100 w-100"
                  :src="cropImg"
                  :viewMode="1"
                  :aspectRatio="opts.w / opts.h"
              />
            </div>

            <div class="text-center my-2">
              <button type="button" @click="saveCrop" class="btn btn-primary btn-sm rounded-1 mx-auto px-3"
                      v-text="$t('Save')"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showFm" class="modal fade show d-block" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable modal-xl h-100" role="document">
        <div class="modal-content h-100">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t('File Manager') }} | {{ $t(label) }}</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="showFm = false"/>
          </div>
          <div class="modal-body p-0">
            <FileManagerWrapper v-show="fmReady" ref="fmw"/>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showFm || showCropper" class="modal-backdrop fade show"></div>
  </div>
</template>

<script>
import {nextTick} from 'vue';

import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

import JasmineBaseField from './BaseField';
import FileManagerWrapper from '../../../Shared/FileManagerWrapper';

import {dataUriToBlob} from '../../../inc/Helpers';

export default {
  name: 'ImageField',
  components: {FileManagerWrapper, VueCropper},
  extends: JasmineBaseField,

  data() {
    return {
      opts: Object.assign({
        w: 150, h: 150, placeholder: null, bg: 'e6e6e6', fg: '495057', ext: 'png',
      }, this.options),

      showFm: false,
      fmReady: false,
      showCropper: false,
      cropImg: null,
      fileName: null,
      fileType: null,
      loading: false,
    };
  },

  methods: {
    handleDrop(evt) {
      let vm = this;
      this.$refs.dz.style.opacity = '1';
      this.$refs.dz.classList.remove('border-primary');

      if (evt.dataTransfer.files.length !== 1) return;
      let imgFile = evt.dataTransfer.files[0];

      if (!imgFile.type.match(/^image\/(png|gif|jpeg|svg\+xml)$/)) return;

      this.fileType = imgFile.type;

      let reader = new FileReader();
      reader.readAsDataURL(imgFile);
      reader.onload = () => {
        let img = new Image();
        img.onload = () => {
          if (
              vm.opts.flexible || imgFile.name.split('.').pop() === 'svg'
              || (
                  (
                      vm.opts.w / img.naturalWidth > 0.99
                      && vm.opts.w / img.naturalWidth < 1.1
                  )
                  &&
                  (
                      vm.opts.h / img.naturalHeight > 0.99
                      && vm.opts.h / img.naturalHeight < 1.1
                  )
              )
          ) {
            let b = dataUriToBlob(reader.result);
            let file = new File([b], vm.fileName, {
              type: b.type,
            });

            vm.upload(file);

          } else vm.openCropper(reader.result);
          vm.showFm = false;
        };

        vm.fileName = imgFile.name;
        vm.fileName = vm.fileName.split('.').slice(0, -1).join('')
            + `-` + parseInt(new Date().getTime() / 1000) + `.`
            + vm.fileName.split('.').pop();

        img.src = reader.result;
      };
    },

    openCropper(url) {
      this.cropImg = url;
      this.showCropper = true;
    },

    closeCropper() {
      this.cropImg = null;
      this.showCropper = false;
    },

    saveCrop() {
      this.$refs.cropper.getCroppedCanvas({
        //fillColor: vm.fill,
        width: this.opts.w,
        height: this.opts.h,
      }).toBlob(b => {
        let file = new File([b],
            this.fileName.split('.').slice(0, -1).join('')
            + `_cropped_${this.opts.w}x${this.opts.h}.`
            + this.fileName.split('.').pop(), {
              type: b.type,
            });
        this.upload(file);
      }, this.fileType);

      this.closeCropper();
    },

    async upload(imgFile) {
      let _token = document.querySelector('meta[name="csrf-token"]').content;
      let vm = this;
      vm.loading = true;
      //check directory exists
      let checkRes = await fetch(vm.route('fm.content', {disk: vm.opts.disk, path: vm.fm_path}));
      if (!checkRes.ok) await fetch(vm.route('fm.create-directory'), {
        method: 'post', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
          disk: vm.opts.disk,
          name: vm.fm_path,
          path: null,
          _token,
        }),
      });

      let fd = new FormData();
      fd.append('disk', vm.opts.disk);
      fd.append('path', vm.fm_path);
      fd.append('overwrite', '0');
      fd.append('files[]', imgFile);
      fd.append('_token', _token);

      let uploadRes = await fetch(vm.route('fm.upload'), {method: 'post', body: fd}).then(r => r.json());

      if (uploadRes.result.status === 'success') {
        fetch(vm.route('fm.url', {
          disk: vm.opts.disk,
          path: vm.fm_path + '/' + imgFile.name,
        })).then(r => r.json()).then(r => {
          let url = r.url;
          if (url.startsWith(document.location.origin)) {
            url = url.replace(document.location.origin, '');
          }

          let img = new Image();
          img.onload = () => {
            vm.val.src = url;
            vm.val.w = img.naturalWidth;
            vm.val.h = img.naturalHeight;

            vm.fileName = null;
            vm.fileType = null;
            vm.loading = false;
          };

          img.src = r.url;
        });
      }
    },

    dragEnter(evt) {
      this.$refs.dz.style.opacity = '.75';
      this.$refs.dz.classList.add('border-primary');
    },

    dragLeave(evt) {
      this.$refs.dz.style.opacity = '1';
      this.$refs.dz.classList.remove('border-primary');
    },

    removeImg() {
      this.val.src = null;
      this.val.w = null;
      this.val.h = null;
    },
  },

  watch: {
    showFm(v) {
      if (v) nextTick(async () => {
        let _token = document.querySelector('meta[name="csrf-token"]').content;
        let vm = this;
        let fm = this.$refs.fmw.$refs.fm;

        //check directory exists
        let checkRes = await fetch(vm.route('fm.content', {disk: vm.opts.disk, path: vm.fm_path}));
        if (!checkRes.ok) await fetch(vm.route('fm.create-directory'), {
          method: 'post', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
            disk: vm.opts.disk,
            name: vm.fm_path,
            path: null,
            _token,
          }),
        });

        setTimeout(async () => {
          await fm.$store.commit('fm/left/setDisk', vm.opts.disk);
          await fm.$store.commit('fm/left/setSelectedDirectory', vm.fm_path);
          await fm.$store.commit('fm/left/addToHistory', vm.fm_path);
          await fm.$store.dispatch('fm/getLoadContent', {
            manager: 'left',
            disk: vm.opts.disk,
            path: vm.fm_path,
          });

          vm.fmReady = true;
        }, 100);

        fm.$store.commit('fm/setFileCallBack', function (fileUrl) {
          if (fileUrl.startsWith(document.location.origin)) {
            fileUrl = fileUrl.replace(document.location.origin, '');
          }

          let img = new Image();
          img.onload = () => {
            if (
                vm.opts.flexible || fileUrl.split('.').pop() === 'svg'
                || (
                    (
                        vm.opts.w / img.naturalWidth > 0.99
                        && vm.opts.w / img.naturalWidth < 1.1
                    )
                    &&
                    (
                        vm.opts.h / img.naturalHeight > 0.99
                        && vm.opts.h / img.naturalHeight < 1.1
                    )
                )
            ) {
              vm.val.w = img.naturalWidth;
              vm.val.h = img.naturalHeight;
              vm.val.src = fileUrl;
            } else vm.openCropper(fileUrl);


            vm.fileName = fileUrl.split('/').pop();
            vm.fileType = 'image/' + ({
              jpg: 'jpeg',
              jpeg: 'jpeg',
              png: 'png',
              gif: 'gif',
            }[fileUrl.split('.').pop()] || 'png');

            vm.showFm = false;
            vm.fmReady = false;
          };
          img.src = fileUrl;

          vm.showFm = false;
          vm.fmReady = false;
        });
      });
    },
    showCropper(v) {
      v
          ? document.body.style.overflow = 'hidden'
          : document.body.style.overflow = 'initial'
      ;
    },
  },

  beforeMount() {
    if (!this.val?.src) this.val = {src: null, alt: null, w: null, h: null};
  },
};
</script>

<style>
.vue-advanced-cropper__background,
.vue-advanced-cropper__foreground {
  background: #444 url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" fill-opacity=".1" ><rect x="200" width="200" height="200" /><rect y="200" width="200" height="200" /></svg>');
  background-size: 13px 13px;
}
</style>

<style scoped>
.fm {
  height: calc(100% - 76px);
}

.preview {
  background: #f2f2f2 url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" fill-opacity=".1" ><rect x="200" width="200" height="200" /><rect y="200" width="200" height="200" /></svg>');
  background-size: 13px 13px;
}

.preview svg,
.preview img {
  max-width: 100%;
  max-height: 200px;
  height: auto;
  background-color: #eaeaea;
}

.fm-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  border-radius: 972px;
  transition: all .1s ease-out;
}

.preview:hover .fm-btn {
  transform: translate(-50%, -50%) scale(1);
}

.delete-btn {
  position: absolute;
  top: .75rem;
  right: .75rem;
  transform: scale(0);
  border-radius: 972px;
  transition: all .1s ease-out;
}

[dir=rtl] .delete-btn {
  right: initial;
  left: .75rem;
}

.preview:hover .delete-btn {
  transform: scale(1);
}

.has-cropper {
  width: 600px;
  height: 600px;
  max-width: 100%;
  max-height: 100%;
}

.jf-loading {
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 100%;
  opacity: .75;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
