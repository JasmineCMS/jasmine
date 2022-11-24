<template>
  <Head :title="$t(b.plural)"/>

  <Layout>

    <template #pageActions>
      <div class="d-flex align-items-center p-2">
        <div v-if="locale" class="btn-group btn-group-sm">
          <inertia-link v-for="_l in $globals.locales" href="" :data="{_locale:_l}" v-text="_l"
                        class="btn btn-outline-primary text-uppercase" :class="{active:_l === locale}"/>
        </div>
      </div>
    </template>

    <div class="px-1 px-lg-4">
      <DataTable :paginator="paginator" :columns="columns" ref="dt" :searchable="searchable" @reordered="reorder">
        <template #tableActions>
          <inertia-link :href="route('jasmine.bread.create', {breadableName: b.key})"
                        class="btn text-primary d-flex align-items-center"
                        title="Create">
            <i class="fs-3 bi bi-plus-circle-fill"></i>
            <span class="mx-1"/>
            {{ $t('New') }}
          </inertia-link>
        </template>

        <template #h_j_sort="{col, q}">
          <div>
            <div style="cursor: pointer;" v-text="col.label"
                 @click="initSort(col, q)"/>
            <template v-if="col.groups && q.sortBy === col.data">
              <select @click.prevent @input="q.sortGroup = $event.target.value">
                <option v-for="g in col.groups" :key="g.v" :value="g.v" v-text="g.l || g.v"/>
              </select>
            </template>
          </div>
        </template>

        <template #j_sort="{v,r,col,q}">
          <span v-text="v"/>
          <button v-if="q.sortBy === col.data" class="btn btn-sm dnd-handler" type="button">
            <i class="bi bi-arrows-expand fs-6"/>
          </button>
        </template>

        <template #j_actions="{v,r}">
          <div>
            <inertia-link class="btn" :title="$t('Edit')"
                          :href="route('jasmine.bread.edit', {breadableName: b.key, breadableId: v})">
              <i class="bi bi-pencil"></i>
            </inertia-link>

            <button type="button" class="btn" :title="$t('Delete')" @click="del(v, r)">
              <i class="bi bi-trash3"></i>
            </button>
          </div>
        </template>

      </DataTable>
    </div>
  </Layout>
</template>

<script>
import Swal from '../../inc/Swal';

export default {
  name: 'BreadIndex',
  props: {
    b: {type: Object, required: true},
    paginator: {type: Object, required: true},
    columns: {type: Array, required: true},
    locale: {type: String},
  },
  data() {
    return {searchable: true};
  },
  methods: {
    async del(v, r) {
      let ask = await Swal.fire({
        title: this.$t('Are you sure?'),
        text: this.$t('Are you sure you want to delete') + ' ' + r.jasmine_title,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: this.$t('Cancel'),
        confirmButtonText: this.$t('Ok'),
      });

      if (!ask.isConfirmed) return false;

      this.$inertia.delete(this.route('jasmine.bread.delete', {breadableName: this.b.key, breadableId: v}));
      return true;
    },

    initSort(col, q) {
      q.sortBy = col.data;
      q.sort = 'asc';
      q.q = '';

      if (col.groups) {
        let groups = Object.keys(col.groups);
        if (groups.length) q.sortGroup = col.groups[groups[0]].v;
      }
    },

    async reorder() {
      let j_actions = this.columns.find(v => v.id === 'j_actions');
      if (!j_actions) return;
      let new_order = {};
      this.paginator.data.forEach((v, k) => {
        new_order[v[j_actions.data]] = k + 1;
      });

      this.$inertia.put(
          this.route('jasmine.bread.reorder', {breadableName: this.b.key}),
          {order: new_order},
      );
    },
  },
};
</script>

<style scoped>

</style>
