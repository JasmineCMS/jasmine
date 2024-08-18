<template>
  <div class="position-relative" ref="picker">
    <div
      class="form-control form-control-sm form-control-color"
      :class="{'is-invalid': invalid}"
      style="cursor: pointer"
      role="button"
      tabindex="0"
      @click.prevent="show = !show"
      @keydown.esc="show = false">
      <div class="h-100" :style="{background: val}" />
    </div>
    <div v-if="show" class="position-absolute shadow-lg" style="z-index: 5; width: 300px; max-width: 100vw">
      <ColorPicker :id="id" @color-change="update" :color="val" default-format="hex" />
      <div class="d-flex flex-wrap bg-white p-1">
        <div v-for="(c, n) in opts.presetColors" :key="n" class="p-2">
          <div
            role="button"
            tabindex="0"
            @click="val = c"
            @keydown.esc="val = c"
            :style="{backgroundColor: c}"
            class="rounded-1"
            style="width: 25px; box-shadow: inset 0 0 0 1px rgb(0 0 0 / 15%)">
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ColorPicker} from 'vue-accessible-color-picker';
import JasmineBaseField from './BaseField';

export default {
  name: 'InputField',
  extends: JasmineBaseField,
  components: {ColorPicker},
  data() {
    return {
      show: false,
      opts: Object.assign(
        {
          format: 'hex',
          presetColors: [],
        },
        this.options,
      ),
    };
  },

  methods: {
    update(evt) {
      this.val = evt.colors.hex;
    },
    clickOut(evt) {
      for (let target = evt.target; target && target !== this; target = target.parentNode) {
        if (this.$refs.picker.contains(target)) break;
        this.show = false;
      }
    },
  },

  watch: {
    show(v) {
      if (v) {
        document.addEventListener('click', this.clickOut);
      } else {
        document.removeEventListener('click', this.clickOut);
      }
    },
  },

  mounted() {
    if (!this.val) this.val = '#000000';
  },
};
</script>

<style scoped></style>
