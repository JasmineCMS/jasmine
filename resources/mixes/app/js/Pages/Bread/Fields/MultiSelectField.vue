<template>
  <div>
    <div v-if="sorting" class="multiselect form-control">
      <draggable
          v-model="val"
          ghost-class="ghost"
          class="multiselect-tags"
          item-key="id"
      >
        <template #item="{element, index}">
          <div class="multiselect-tag">
            <span class="multiselect-tag-wrapper"> {{ optByVal(element).label }} </span>
            <span class="multiselect-tag-remove" style="padding-top: 0; padding-bottom: 0;">
              <span style="width: .75rem; opacity: .8">
                <svg xmlns="http://www.w3.org/2000/svg" style="height: 12px;" viewBox="0 0 320 512" fill="currentColor">
                  <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                  <path
                      d="M96 32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm0 160H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm0 160H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zM288 32h-64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm0 160h-64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm0 160h-64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"/>
                </svg>
              </span>
            </span>
          </div>
        </template>
      </draggable>
      <div style="flex-shrink: 0;width: 48px"/>
    </div>
    <Multiselect
        v-else
        ref="ms"
        :id="id" :name="name" v-model="val"
        :required="validation.indexOf('required') > -1"
        class="form-control"
        :class="{'is-invalid': invalid}"
        v-bind="conf.opts">
      <template v-for="(slot, sk) in conf.slots" :key="sk" v-slot:[sk]="slotProps">
        <component :is="slot" :props="slotProps"/>
      </template>
    </Multiselect>

    <div v-if="opts.sortable" class="d-flex justify-content-end">
      <button type="button" @click.prevent="sorting = !sorting"
              class="py-0 btn bg-secondary text-white"
              style="font-size: .8em; border-bottom-left-radius: 5px;border-bottom-right-radius: 5px">
        <span v-if="sorting" v-text="$t('Edit items')"/>
        <span v-else v-text="$t('Sort items')"/>
      </button>
    </div>
  </div>
</template>

<script>
import '@vueform/multiselect/themes/default.css';

import Multiselect from '@vueform/multiselect';
import JasmineBaseField from './BaseField';

export default {
  name: 'MultiSelectField',
  extends: JasmineBaseField,
  components: {Multiselect},
  data() {
    return {
      sorting: false,
      opts: Object.assign({
        options: [],
      }, this.options),
    };
  },

  methods: {
    optByVal(val) {
      return this.conf.opts.options.find(o => o.value === val);
    },
  },

  computed: {
    conf() {
      let vm = this;
      let opts = JSON.parse(JSON.stringify(vm.opts));
      delete opts.slots;

      let slots = {};
      Object.keys(vm.opts.slots || {}).forEach(k => {
        slots[k] = {
          template: vm.opts.slots[k],
          data() {
            return vm.opts.slots[k].data || {};
          },
        };
      });
      return {opts, slots};
    },
  },
};
</script>

<style scoped>
.srt-btn {
  border: 0;

}
</style>
