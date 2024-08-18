<template>
  <Multiselect
    ref="ms"
    :id="id"
    :name="name"
    v-model="val"
    :required="validation.indexOf('required') > -1"
    class="form-control"
    :class="{'is-invalid': invalid}"
    v-bind="conf.opts">
    <template v-for="(slot, sk) in conf.slots" :key="sk" v-slot:[sk]="slotProps">
      <component :is="slot" :props="slotProps" />
    </template>
  </Multiselect>
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
      opts: Object.assign(
        {
          options: [],
        },
        this.options,
      ),
    };
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

<style scoped></style>
