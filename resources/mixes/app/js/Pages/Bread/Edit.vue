<template>
  <Head :title="entId ? $t('Edit') + ' ' + title + revTitle : $t('New')"/>

  <Layout>
    <template #breadcrumbs>
      <li class="breadcrumb-item">
        <inertia-link :href="route('jasmine.bread.index', {breadableName:b.key})" v-text="$t(b.plural)"/>
      </li>
    </template>

    <template #pageActions>
      <div class="d-flex align-items-center p-2">
        <a v-if="public_url" target="_blank" :href="public_url"
           class="btn btn-sm btn-link d-flex align-items-center" style="gap: .5rem">
          <i class="bi bi-link" style="font-size: 1.5rem;"></i>
          {{ $t('View on site') }}
        </a>
        <div class="mx-3"></div>
        <div v-if="locale" class="btn-group btn-group-sm">
          <inertia-link v-for="_l in $globals.locales" href="" :data="{_locale:_l}" v-text="_l"
                        class="btn btn-outline-primary text-uppercase" :class="{active:_l === locale}"/>
        </div>

        <template v-if="entId && locale && Object.keys(translationServices).length">
          <div class="mx-1"></div>
          <nav-item-dropdown
              v-if="Object.keys(translationServices).length > 1"
              as="div" id="translationDd"
              class="btn btn-sm btn-outline-primary dropdown"
              menu-class="bg-light px-2 rounded-3 overflow-auto">
            <i class="bi bi-translate"/>
            {{ $t('Translate') }}
            <template #menu>
              <li v-for="(name, ts) in translationServices" :key="ts" class="bg-white mb-2 rounded-3 overflow-hidden">
                <button type="button" @click="confirmTranslate(ts, name)" class="dropdown-item px-2">
                  {{ name }}
                </button>
              </li>
            </template>
          </nav-item-dropdown>

          <template v-else>
            <button
                v-for="(name, ts) in translationServices" type="button" @click="confirmTranslate(ts, name)"
                class="btn btn-sm btn-outline-primary">
              <i class="bi bi-translate"/>
              {{ $t('Translate') }}
            </button>
          </template>
        </template>

        <div class="mx-3"/>
        <div class="btn-group btn-group-sm">
          <a :href="exportBread()"
             :download="b.singular+'-'+title+'-'+fileableDate()+'.jasmine.json'" class="btn btn-outline-primary"
             :title="$t('Export')">
            <i class="bi bi-file-earmark-arrow-down"></i>
          </a>
          <button type="button" class="btn btn-outline-primary" :title="$t('Import')" @click="$refs.importI.click()">
            <i class="bi bi-file-earmark-arrow-up"></i>
            <input type="file" class="sr-only" ref="importI" @input="importBread" accept=".jasmine.json">
          </button>
        </div>
        <div class="mx-3" v-if="revisions.length"></div>
        <nav-item-dropdown
            v-if="revisions.length"
            as="div" id="revisionsDd"
            class="btn btn-sm btn-outline-primary dropdown"
            menu-class="bg-light px-2 rounded-3 overflow-auto" menu-style="height: 65vh">
          <i class="bi bi-clock-history"></i>
          {{ $t('Revisions') }}
          <template #menu>
            <li class="mb-2 rounded-3 overflow-hidden">
              <InertiaLink
                  v-if="loadedRev" :href="currentHref" :data="{rev:null}"
                  style="gap:.75rem"
                  class="dropdown-item px-2 text-primary fw-semibold d-flex align-items-center">
                <i class="bi" :class="isRtl ? 'bi-arrow-left' : 'bi-arrow-right'"></i>
                <span v-text="$t('Back to current')"/>
              </InertiaLink>
            </li>

            <li v-for="r in revisions" :key="r.created_at" class="bg-white mb-2 rounded-3 overflow-hidden">
              <InertiaLink class="dropdown-item px-2 d-flex align-items-center" :href="currentHref" style="gap:.75rem"
                           :data="{rev:r.created_at.split('.')[0].replace(/[T:]/g, '-'), _locale:r.locale}">
                <div>
                  <img :src="r.user?.avatar_url" :alt="r.user?.name"
                       class="rounded-circle" style="height: 28px">
                </div>
                <div style="font-size: 0.85rem;">
                  <div>
                    <time :datetime="r.created_at" class="fs-6">
                      <span v-text="r.created_at_h.split(' ')[0]" class="text-primary fw-semibold"/>
                      &nbsp;
                      <span v-text="r.created_at_h.split(' ')[1]"/>
                    </time>
                    &nbsp;
                    <span v-text="r.locale" class="text-uppercase badge text-bg-secondary rounded-pill"/>
                  </div>
                  <div :title="r.user.email" class="text-muted">
                    {{ $t('By') }} {{ r.user?.name }}
                  </div>
                </div>
              </InertiaLink>
            </li>
          </template>
        </nav-item-dropdown>
        <div class="mx-3"/>

        <button
            v-if="$globals.env !== 'production' && b.key === 'page' && (can.indexOf('a') > -1 || can.indexOf('e') > -1)"
            type="button" @click="fake" class="btn btn-sm btn-info px-4">
          {{ $t('Fake') }}
        </button>
        <div class="mx-2"/>

        <button
            v-if="can.indexOf('a') > -1 || can.indexOf('e') > -1"
            @click="$refs.form.reportValidity() && form.post('')"
            type="button" class="btn btn-sm px-5" :disabled="form.processing"
            :class="{'btn-primary': form.isDirty, 'btn-secondary': !form.isDirty}">
          <span v-if="form.processing" role="status" aria-hidden="true" class="spinner-border spinner-border-sm"/>
          {{ $t('Save') }}
        </button>
      </div>
    </template>

    <form ref="form" @submit.prevent="form.post('')">
      <div class="bread-edit row" :class="{'writing-rtl': isLocaleRtl}">

        <!-- Loop columns -->
        <div v-for="(column, classId) in b.manifest" :key="classId" :class="classId">

          <!-- Loop groups -->
          <div v-for="(fields, gTitle) in column" :key="gTitle" class="card mb-4">
            <div class="card-body">
              <h4 v-if="gTitle[0] !== '_'" class="mb-2 h5" v-text="gTitle"/>
              <div class="row">
                <!-- Loop fields -->
                <div v-for="(field, fi) in fields" :key="fi" class="field p-1 pt-2 form-group" :class="field.width">

                  <!-- Repeatable field -->
                  <template v-if="field.repeats >  1">
                    <draggable
                        v-model="form.v[field.name]"
                        ghost-class="ghost"
                        :handle="'.dnd-handler_' + field.id"
                        class="row"
                        item-key="id"
                    >
                      <template #item="{element, index}">
                        <div class="d-flex" :class="field.repeatsWidth">
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
                          <div class="form-group flex-fill my-2">
                            <label :for="field.id+index" class="form-label"
                                   @click="collapsed['_'+field.id+'_'+index] = !collapsed['_'+field.id+'_'+index]">
                              <span class="fw-semibold" v-text="field.label"/> {{ index + 1 }}

                              <button type="button" class="btn btn-sm">
                                <i class="bi bi-arrow-down-short d-inline-block"
                                   :class="{'uncollapsed-arrow':!collapsed['_'+field.id+'_'+index]}"/>
                              </button>
                            </label>

                            <CollapseTransition>
                              <component
                                  v-show="!collapsed['_'+field.id+'_'+index]"
                                  :is="field.component" :id="field.id+index"
                                  :name="field.name + '['+index+']'"
                                  :invalid="!!form.errors[field.name]" v-model="form.v[field.name][index]"
                                  :label="field.label" :options="field.options"
                                  :validation="field.validation"
                                  :locale="locale" :is-locale-rtl="isLocaleRtl"
                              />
                            </CollapseTransition>

                            <small v-if="field.description" :id="field.id+index+'Help'"
                                   class="form-text text-muted"
                                   v-text="field.description"/>
                          </div>
                        </div>
                      </template>
                    </draggable>
                    <div class="mb-5">
                      <button style="--bs-btn-disabled-border-color:transparent"
                              class="btn text-primary fw-semibold d-flex align-items-center" @click="repeatField(field)"
                              :disabled="form.v[field.name].length >= field.repeats"
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
                        :is="field.component" :id="field.id" :name="field.name"
                        :invalid="!!form.errors[field.name]" v-model="form.v[field.name]"
                        :label="field.label" :options="field.options" :validation="field.validation"
                        :locale="locale" :is-locale-rtl="isLocaleRtl"
                    />
                    <small v-if="field.description" :id="field.id+ 'Help'"
                           class="form-text text-muted"
                           v-text="field.description"/>
                    <div v-if="form.errors[field.name]" class="invalid-feedback" role="alert">
                      <strong
                          v-text="Array.isArray(form.errors[field.name]) ? form.errors[field.name][0] : form.errors[field.name]"/>
                    </div>
                  </template>
                </div>
                <!-- /Loop fields -->
              </div>
            </div>
          </div>
          <!-- /Loop groups -->

        </div>
        <!-- /Loop columns -->

      </div>
    </form>
  </Layout>
</template>

<script>

import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue';
import Swal from '../../inc/Swal';
import NavItemDropdown from '../../Shared/NavItemDropdown.vue';
import {Link as InertiaLink} from "@inertiajs/vue3";

export default {
  name: 'BreadEdit',
  components: {InertiaLink, NavItemDropdown, CollapseTransition},
  props: {
    can: {type: Array, required: true},
    translationServices: {type: Object, required: true},
    b: {type: Object, required: true},
    entId: {type: [String, Number]},
    ent: {type: Object, required: true},
    title: {type: String},
    locale: {type: String},
    public_url: {type: String},
    fm_path: {type: String, default: ''},
    revisions: {type: Array, default: []},
    loadedRev: {type: String},
  },

  data() {
    let data = {};

    this.b.fields.forEach(f => {
      data[f.name] = f.repeats > 1 ? [] : JSON.parse(JSON.stringify({v: f.default})).v;

      if (this.entId && typeof this.ent[f.name] !== 'undefined') {
        data[f.name] = JSON.parse(JSON.stringify({v: this.ent[f.name]})).v;

        if (!data[f.name] && typeof f.default === 'object') data[f.name] = JSON.parse(JSON.stringify({v: f.default})).v;

        if (f.repeats > 1 && !(data[f.name] instanceof Array)) data[f.name] = [];
        if (f.repeats > 1 && data[f.name].length) {
          data[f.name].forEach((v, k) => v === null && (data[f.name][k] = ''));
        }
      }
    });

    return {
      collapsed: {},
      form: this.$inertia.form({v: data}),
      currentHref: document.location.href,
    };
  },

  methods: {
    repeatField(f) {
      this.form.v[f.name].push(JSON.parse(JSON.stringify({v: f.default})).v);
    },

    removeRepeatedField(fieldName, i) {
      this.form.v[fieldName].splice(i, 1);
    },

    exportBread() {
      return 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.ent));
    },

    importBread($event) {
      let vm = this;
      if (!$event.target.files.length) return;
      let file = $event.target.files[0];

      let reader = new FileReader();
      reader.readAsText(file);

      reader.onload = () => {
        let data = JSON.parse(reader.result);
        Object.keys(data).forEach(k => vm.form.v[k] = data[k]);
      };
    },

    fileableDate() {
      return new Date().toISOString()
          .replace('T', '_')
          .replace(/:/g, '-')
          .substring(0, 19);
    },

    async fake() {
      let {isConfirmed} = await Swal.fire({
        icon: 'question',
        title: this.$t('Fill Fake Data?'),
        text: this.$t('All existing data will be lost'),
        showCancelButton: true,
        showConfirmButton: true,
      });

      if (!isConfirmed) return;

      this.$inertia.post(this.route('jasmine.page.fake', {jasminePage: this.b.slug}), {}, {
        preserveState: false,
      });
    },

    async confirmTranslate(service, name) {
      let {isConfirmed, value} = await Swal.fire({
        title: this.$t('Translation confirmation'),
        html: [
          this.$t('Translate using') + ` <strong>${name}</strong>`,
          this.$t('All existing translatable data in the target language will be lost.'),
          '<strong>' + this.$t('Source language') + '</strong>',
        ].join('<br>'),
        input: 'select',
        inputOptions: Object.fromEntries(this.$globals?.locales?.filter(i => i !== this.locale).map(i => [i, i])),
        showCancelButton: true,
        showConfirmButton: true,
      });

      if (!isConfirmed) return;

      this.$inertia.post(
          this.b.key === 'page'
              ? this.route('jasmine.page.translate', {jasminePage: this.b.slug})
              : this.route('jasmine.bread.translate', {breadableName: this.b.key, breadableId: this.entId}),
          {service, source: value, target: this.locale}, {
            onSuccess: () => document.location.reload(),
          });
    },
  },

  computed: {
    isRtl() {
      return document.documentElement.dir === 'rtl';
    },
    isLocaleRtl() {
      return ['ar', 'dv', 'fa', 'ha', 'he', 'ks', 'ku', 'ps', 'sd', 'ur', 'yi'].indexOf(this.locale) > -1;
    },

    revTitle() {
      if (!this.loadedRev) return '';

      let rev = this.revisions.find(r => r.created_at === this.loadedRev);
      if (!rev) return '';

      return ' ' + this.$t('Revision') + ' ' + rev.created_at_h + ' ' + this.$t('By') + ' ' + rev.user.name;
    },
  },

  provide() {
    return {
      fm_path: this.fm_path,
    };
  },
};
</script>

<style scoped>
.uncollapsed-arrow {
  transition: transform .3s ease-in-out;
}

.uncollapsed-arrow {
  transform: rotate(-90deg);
}

[dir='rtl'] .uncollapsed-arrow {
  transform: rotate(90deg);
}

</style>