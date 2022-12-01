<template>
  <div class="row grouped">
    <!-- Loop fields -->
    <div v-for="(field, fi) in opts.fields" :key="field.id+fi" class="field px-4 py-2 form-group" :class="field.width">
      <!-- Repeatable field -->
      <template v-if="field.repeats > 1">
        <draggable
            class="row"
            v-model="val[field.name]"
            ghost-class="ghost"
            :handle="'.dnd-handler_' + field.id"
            item-key="id"
        >
          <template #item="{element, index}">
            <div class="d-flex" :class="[field.repeatsWidth]">
              <div class="d-flex flex-column mt-1">
                <button type="button" class="btn btn-sm"
                        @click="removeRepeatedField(field.name, index)"
                        :title="$t('Remove')+' '+ field.label + ' ('+(index+1)+')'">
                  <i class="bi bi-x-circle fs-6"/>
                </button>
                <button :class="['btn btn-sm', 'dnd-handler_' + field.id]"
                        type="button" :title="$t('Reorder') +' '+ field.label">
                  <i class="bi bi-arrows-expand fs-6"/>
                </button>
              </div>
              <div class="form-group flex-fill">
                <label :for="field.id+index" class="form-label">
                  <span class="fw-semibold" v-text="field.label"/> {{ index + 1 }}
                </label>
                <component
                    :is="field.component" :id="field.id+index"
                    :name="name + '[' + field.name + ']' + '['+index+']'"
                    :invalid="!!errors[field.name]" v-model="val[field.name][index]"
                    :label="field.label" :options="field.options"
                    :validation="field.validation"
                    :locale="locale" :is-locale-rtl="isLocaleRtl"
                />
                <small v-if="field.description" :id="field.id+index +'Help'" class="form-text text-muted">
                  {{ field.description }}
                </small>
              </div>
            </div>
          </template>
        </draggable>
        <div class="mb-3">
          <button style="--bs-btn-disabled-border-color:transparent"
                  class="btn text-primary fw-semibold d-flex align-items-center" @click="repeatField(field)"
                  :disabled="val[field.name].length >= field.repeats"
                  type="button" :title="$t('Add') +' '+ field.label">
            <i class="bi bi-plus-circle-fill fs-6"/>
            <span class="px-1"></span>
            <span v-text="$t('Add') +' '+ field.label"/>
          </button>
        </div>
      </template>

      <!-- Single field -->
      <template v-else>
        <label class="form-label fw-semibold" :for="field.id" v-text="field.label"/>
        <component
            :is="field.component" :id="field.id" :name="name + '[' + field.name + ']'"
            :invalid="!!errors[field.name]" v-model="val[field.name]"
            :label="field.label" :options="field.options" :validation="field.validation"
            :locale="locale" :is-locale-rtl="isLocaleRtl"
        />
        <small v-if="field.description" :id="field.id+ 'Help'" class="form-text text-muted">
          {{ field.description }}
        </small>
        <div v-if="errors[field.name]" class="invalid-feedback" role="alert">
          <strong v-text="errors[field.name][0]"/>
        </div>
      </template>
    </div>
    <!-- /Loop fields -->
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import JasmineBaseField from './BaseField';

export default {
  name: 'GroupedField',
  extends: JasmineBaseField,
  components: {draggable},
  data() {
    return {
      opts: Object.assign({
        fields: [],
      }, this.options),
    };
  },

  methods: {
    loadValues() {
      this.opts.fields.forEach(f => {
        if (f.repeats > 1) {
          this.val[f.name] = Array.isArray(this.val?.[f.name]) ? this.val[f.name] : [];
          if (this.val[f.name].length) this.val[f.name].forEach((v,k) => v === null && (this.val[f.name][k] = ''));
        }

        if (!this.val[f.name] && f.type === 'GroupedField') this.val[f.name] = {};
      });
    },

    repeatField(field) {
      this.val[field.name].push(JSON.parse(JSON.stringify({v: field.default})).v);
    },

    removeRepeatedField(fieldName, i) {
      this.val[fieldName].splice(i, 1);
    },
  },

  computed: {
    errors() {
      return {};
    },
  },

  beforeMount() {
    this.loadValues();
  },

  mounted() {
  },
};
</script>

<style scoped>
.row.grouped {
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid #ced4da;
  margin: 0;
}
</style>
