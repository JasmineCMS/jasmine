<template>
  <div>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-text">
        <button class="btn btn-sm p-0" type="button" @click="changeFile" v-text="$t('Choose file')"/>
      </div>
      <input type="text" class="form-control" :name="name" v-model="val">
    </div>

    <div v-if="showFm" class="modal fade show d-block" tabindex="-1" role="dialog"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable modal-xl" role="document">
        <div class="modal-content h-100">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t('File Manager') }} | {{ $t(label) }}</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="showFm = false"/>
          </div>
          <div class="modal-body p-0">
            <FileManagerWrapper ref="fmw"/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showFm" class="modal-backdrop fade show"></div>
  </div>
</template>

<script>
import JasmineBaseField from './BaseField';
import FileManagerWrapper from '../../../Shared/FileManagerWrapper';
import {nextTick} from 'vue';

export default {
  name: 'FileField',
  components: {FileManagerWrapper},
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

      nextTick(async () => {
        let _token = document.querySelector('meta[name="csrf-token"]').content;
        let vm = this;
        let fm = this.$refs.fmw.$refs.fm;

        //check directory exists
        let checkRes = await fetch(vm.route('fm.content', {disk: 'public', path: vm.fm_path}));
        if (!checkRes.ok) await fetch(vm.route('fm.create-directory'), {
          method: 'post', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
            disk: 'public',
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

          vm.val = fileUrl;

          vm.showFm = false;
        });
      });
    },
  },

  watch: {},

  beforeMount() {

  },
};
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
