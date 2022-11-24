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
      <th v-for="(col, k) in cols" @click="sort(col)" :class="[thClass(col)]">
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
              <span v-text="getValue(element, col)"/>
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

export default {
  name: 'DataTable',
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
            .replace(/]$/, '')] = (f[1] || null),
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
    };
  },

  methods: {
    sort(col) {
      if (col.sortable === false || col.id === 'j_sort') return;

      if (this.q.sortBy === col.data) this.q.sort = (this.q.sort === 'asc' ? 'desc' : 'asc');
      else this.q.sort = 'asc';

      this.q.sortBy = col.data;
    },
    thClass(col) {
      let classes = [];

      if (col.id !== 'j_sort') {
        if (col.sortable !== false) classes.push('sortable');

        if (this.q.sortBy === col.data) classes.push('sorting-' + this.q.sort);
      }

      return classes;
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
        this.$inertia.get(this.$inertia.page.url, this.q, {preserveState: true, replace: true});
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
