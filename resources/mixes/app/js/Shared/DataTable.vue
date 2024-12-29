<template>
  <div class="d-flex align-items-center justify-content-between mt-3">
    <div class="d-flex w-25">
      <div v-if="searchable" class="input-group mb-3">
        <div class="input-group-text" id="basic-addon1">
          <svg style="width: 1.25rem" viewBox="0 0 20 20" stroke="currentColor" fill="none">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <input type="search" class="form-control" :placeholder="$t('Search')+'...'"
               :aria-label="$t('Search')" v-model="q.q">
      </div>
      <div>
        <slot name="filters"/>
      </div>
    </div>

    <div>
      <slot name="tableActions"/>
    </div>
  </div>

  <table class="table table-striped table-responsive-md">
    <thead>
    <tr>
      <th v-for="(col, k) in cols" @click="colAction(col)" :class="[thClass(col)]" :aria-sort="ariaSort(col)">
        <div v-if="col.filtering === 'date'" style="font-weight: normal;">
          <DatePicker @selected="setDateRange($event, col)" :value="q.filters[col.data]"/>
        </div>
        <Listbox v-else-if="col.filtering" v-model="q.filters[col.data]" multiple>
          <CollapseTransition :duration="200">
            <div v-if="showFilter[col.data]" class="filter-box">
              <ListboxOptions static class="list-unstyled shadow">
                <ListboxOption
                    v-for="(o,ok) in col.filtering" as="template" v-slot="{active,selected}"
                    :key="ok" :value="Array.isArray(col.filtering) ? o : ok"
                >
                  <li class="" :class="{'active':active,'selected':selected}">
                    <span class="border" role="none">
                        <i class="fas fa-check text-primary" :class="{'invisible':!selected}"/>
                    </span>
                    <span class="mx-1"/>
                    <span v-text="o" :class="{'text-primary':selected}"/>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </div>
          </CollapseTransition>
        </Listbox>
        <slot :name="'h_' + (col.id || col.data)" :col="col" :q="q"><span v-text="col.label"/></slot>
      </th>
    </tr>
    </thead>
    <draggable
        tag="tbody"
        v-model="rows"
        ghost-class="ghost"
        handle=".dnd-handler"
        :item-key="key || 'id'"
        @change="$emit('reordered', rows)"
    >
      <template #item="{element, index}">
        <tr v-bind="rowAttrs(element)">
          <td v-for="(col, k) in cols" class="align-middle">
            <slot :name="col.id || col.data" :v="getValue(element, col)" :r="element" :col="col" :q="q">
              <span v-html="getValue(element, col)"/>
            </slot>
          </td>
        </tr>
      </template>
    </draggable>
    <slot name="footer"/>
  </table>

  <div class="d-flex flex-column flex-md-row align-items-center justify-content-between">
    <nav aria-label="Pagination">
      <ul class="pagination" style="--bs-pagination-border-width:0">
        <li v-for="l in paginator.links" class="page-item"
            :class="{disabled: !l.url, active: l.active}" :aria-current="l.active">
          <component :is="l.url ? 'inertia-link' : 'span'" :href="l.url"
                     class="page-link rounded-5" v-html="l.label"
          />
        </li>
      </ul>
    </nav>

    <div class="d-flex align-items-center">
      <div>
        {{ $t('Rows') }}
        {{ paginator.from }} - {{ paginator.to }} {{ $t('of') }} {{ paginator.total }}
      </div>
      <div class="mx-2"></div>
      <div>
        <select :title="$t('Rows per page')" class="form-select" v-model="q.perPage">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import {get} from 'lodash';
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition';
import {Listbox, ListboxOption, ListboxOptions} from '@headlessui/vue';
import DatePicker from './DatePicker.vue';

export default {
  name: 'DataTable',
  components: {DatePicker, ListboxOption, ListboxOptions, Listbox, CollapseTransition},
  props: {
    paginator: {type: Object, required: true},
    columns: {type: Array, required: true},
    filters: {type: Array, default: []},
    key: {type: String, required: false},
    searchable: {type: Boolean, default: true},
    rowAttrs: {type: Function, default: () => ({})},
  },

  emits: ['reordered'],

  data() {
    let params = new URLSearchParams(document.location.search);
    let filters = {};

    Array.from(params.entries())
        .filter(ent => ent[0].indexOf('filters[') === 0)
        .map(f => filters[f[0].replace(/^filters\[/, '')
            .replace(/]$/, '')] = (f[1] || '').split(',')
            .filter(v => v !== ''),
        );

    return {
      rows: [],
      q: {
        filters,
        sortBy: params.get('sortBy'),
        sort: params.get('sort'),
        perPage: parseInt(params.get('perPage')) || 10,
        q: params.get('q'),
      },
      showFilter: {},
    };
  },

  methods: {
    filter(col) {
      this.showFilter[col.data] = !this.showFilter[col.data];
    },

    setDateRange(v, col) {
      if (v === null) {
        this.q.filters[col.data] = null;
      } else {
        this.q.filters[col.data] = [
          v.start.toISOString(),
          v.end.toISOString(),
        ];
      }
    },

    sort(col) {
      if (col.sortable === false || col.id === 'j_sort') return;

      if (this.q.sortBy === col.data) this.q.sort = (this.q.sort === 'asc' ? 'desc' : 'asc');
      else this.q.sort = 'asc';

      this.q.sortBy = col.data;
    },

    thClass(col) {
      let classes = ['position-relative'];

      if (col.id !== 'j_sort') {
        // filtering
        if (col.filtering) {
          classes.push('filterable');
          if (col.filtering === 'date') classes.push('date');
          if (this.q.filters[col.data]?.length) classes.push('filtering');
        } else {
          if (col.sortable !== false) classes.push('sortable');

          if (this.q.sortBy === col.data) classes.push('sorting-' + this.q.sort);
        }
      }

      return classes;
    },

    ariaSort(col) {
      if (this.q.sortBy !== col.data) return undefined;
      return this.q.sort === 'asc' ? 'ascending' : 'descending';
    },

    colAction(col) {
      if (col.filtering) return this.filter(col);
      else return this.sort(col);
    },

    render(val, row) {
      return val;
    },
    getValue(row, col) {
      return get(row, col.data);
    },
  },

  computed: {
    cols() {
      return this.columns.map(c => {
        c.label ??= c.data.replace(/_/g, ' ').split(' ')
            .map(w => w[0].toUpperCase() + w.substring(1)).join(' ');
        return c;
      });
    },
  },

  watch: {
    'paginator.data'(v) {
      this.rows = JSON.parse(JSON.stringify(v));
    },

    q: {
      deep: true,
      handler() {
        this.q.page = 1;
        let q = JSON.parse(JSON.stringify(this.q));

        Object.keys(q.filters).forEach(k => Array.isArray(q.filters[k]) && (q.filters[k] = q.filters[k].join(',')));

        this.$inertia.get(this.$page.url, q, {preserveState: true, replace: true});
      },
    },
  },

  mounted() {
    this.rows = JSON.parse(JSON.stringify(this.paginator.data));
  },
};
</script>

<style scoped>

</style>
