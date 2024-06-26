<template>
  <header class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <!-- Navbar Brand-->
    <div class="px-2"></div>
    <inertia-link class="navbar-brand h-100" :href="route('jasmine.dashboard')">
      <BunnyHead class="h-100"/>
      Jasmine
    </inertia-link>

    <!-- Sidebar Toggle-->
    <button class="btn btn-link btn-sm order-1 order-lg-0"
            id="sidebarToggle" type="button" @click.prevent="toggleSb">
      <i class="fs-4 bi bi-list"></i>
    </button>

    <div class="mx-auto"></div>

    <!-- Navbar-->
    <ul class="navbar-nav h-100 mx-2">
      <nav-item-dropdown id="langDd" menu-class="dropdown-menu-dark dropdown-menu-end" class="nav-item">
        <span v-text="$i18n.locale" class="text-uppercase"/>
        <template #menu>
          <li v-for="l in $globals.interface_locales">
            <button v-if="$i18n.locale !== l" type="button" @click="changeLocale(l)" :title="l"
                    class="dropdown-item">
              <span v-text="l" class="text-uppercase"/>
            </button>
          </li>
        </template>
      </nav-item-dropdown>

      <nav-item-dropdown id="profileDd" menu-class="dropdown-menu-dark dropdown-menu-end" class="nav-item">
        <img class="rounded-circle h-100"
             :src="$globals.user?.avatar_url" :alt="$globals.user?.name">

        <template #menu>
          <li>
            <inertia-link class="dropdown-item" :href="route('jasmine.profile')">
              {{ $t('Profile') }}
            </inertia-link>
          </li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li>
            <inertia-link class="dropdown-item" as="button" :href="route('jasmine.logout')" method="post">
              {{ $t('Logout') }}
            </inertia-link>
          </li>

        </template>
      </nav-item-dropdown>
    </ul>
  </header>

  <div id="wrapper">
    <div id="sidebar">
      <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
          <div class="nav">
            <template v-for="(i,k) in $globals.sb_menu || {}" :key="k">
              <template v-if="i.hidden"/>
              <template v-else-if="i.children && len(i.children, true)">
                <a
                    v-if="len(i.children, false)"
                    class="nav-link" :class="{'collapsed':i.open,'active': i.active}"
                    href="#" role="button"
                    :aria-expanded="i.open ? 'true' : 'false'" :aria-controls="'collapse_' + k"
                    @click="i.open = !i.open">
                  <div class="sb-nav-link-icon">
                    <i v-if="i.icon.indexOf('fa-') > -1" class="fs-4 fas" :class="i.icon"/>
                    <i v-else-if="i.icon.indexOf('bi-') > -1" class="fs-4 bi" :class="i.icon"/>
                  </div>
                  {{ $t(i.title) }}
                  <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                </a>
                <CollapseTransition>
                  <div v-show="i.open" :id="'collapse_' + k" aria-labelledby="headingOne">
                    <nav class="sb-sidenav-menu-nested nav">
                      <template v-for="(c,ck) in i.children" :key="ck">
                        <template v-if="c.hidden"/>
                        <component
                            v-else
                            class="nav-link"
                            :class="{'active': isRoute(c['is-route'] || null)}"
                            :is="c.target === '_blank' ? 'a' : 'inertia-link'" :target="c.target || '_self'"
                            :href="c.href"
                        >
                          <div class="sb-nav-link-icon">
                            <i v-if="c.icon.indexOf('fa-') > -1" class="fs-5 fas" :class="c.icon"/>
                            <i v-else-if="c.icon.indexOf('bi-') > -1" class="fs-5 bi" :class="c.icon"/>
                          </div>
                          {{ $t(c.title) }}
                        </component>
                      </template>
                    </nav>
                  </div>
                </CollapseTransition>
              </template>
              <template v-else>
                <component
                    class="nav-link" :class="{'active': isRoute(i['is-route'] || null)}"
                    :is="i.target === '_blank' ? 'a' : 'inertia-link'" :target="i.target || '_self'"
                    :href="i.href"
                >
                  <div class="sb-nav-link-icon">
                    <i v-if="i.icon.indexOf('fa-') > -1" class="fs-4 fas" :class="i.icon"/>
                    <i v-else-if="i.icon.indexOf('bi-') > -1" class="fs-4 bi" :class="i.icon"/>
                  </div>
                  {{ $t(i.title) }}
                </component>
              </template>
            </template>
          </div>
        </div>
        <div class="sb-sidenav-footer d-none">
        </div>
      </nav>
    </div>

    <div id="content">
      <main class="d-flex flex-column flex-grow-1">
        <div style="z-index:999;position: sticky;top: 56px;" class="bg-white">
          <div class="d-flex justify-content-between align-items-center border-bottom" style="min-height: 48px;">
            <nav style="--bs-breadcrumb-divider: '/'" aria-label="breadcrumb">
              <ol class="breadcrumb mx-3 mb-0">
                <li class="breadcrumb-item">
                  <inertia-link :href="route('jasmine.dashboard')">
                    <i class="bi bi-house"></i>
                  </inertia-link>
                </li>
                <slot name="breadcrumbs"/>
                <li class="breadcrumb-item active" aria-current="page" v-text="$fixed.title"></li>
              </ol>
            </nav>
            <slot name="pageActions"/>
          </div>
        </div>
        <div class="py-2"></div>
        <div class="container-fluid d-flex flex-grow-1">
          <div class="h-100 w-100">
            <slot/>
          </div>
        </div>
      </main>

      <footer class="py-2 bg-light mt-auto">
        <div class="container-fluid px-4">
          <div class="d-flex align-items-center justify-content-between small">
            <div class="d-flex">
              <a href="https://github.com/JasmineCMS/jasmine" target="_blank"
                 class="text-decoration-none text-black">
                <i class="fa-brands fa-github"></i>&nbsp;
                <b>JasmineCMS</b> {{ $globals.info?.jasmine }}
              </a>
              <div class="mx-3"></div>
              <div>
                <b>Laravel</b> {{ $globals.info?.laravel }}
              </div>
              <div class="mx-3"></div>
              <div>
                <b>PHP</b> {{ $globals.info?.php }}
              </div>
              <div class="mx-3"></div>
              <div>
                <b>DB</b> {{ $globals.info?.db }}
              </div>
              <div class="mx-3"></div>
              <div v-if="$globals.info?.updated">
                <b>Last update</b> {{ (new Date($globals.info?.updated * 1000)).toLocaleString() }}
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg';
import Swal from '../inc/Swal';
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition';
import NavItemDropdown from './NavItemDropdown';
import BunnyHead from './BunnyHead';

export default {
  name: 'Layout',
  components: {BunnyHead, NavItemDropdown, InlineSvg, CollapseTransition},
  methods: {
    toggleSb() {
      document.body.classList.toggle('sb-sidenav-toggled');
    },

    handleSwal() {
      if (this.$page.props.swal && !this.$page.props.swal.fired) {
        this.$page.props.swal.title && (this.$page.props.swal.title = this.$t(this.$page.props.swal.title));
        this.$page.props.swal.text && (this.$page.props.swal.text = this.$t(this.$page.props.swal.text));
        Swal.fire(this.$page.props.swal).then(r => {
          this.$page.props.swal.fired = true;
        });
      }
    },

    len(v, withHidden = true) {
      if (Array.isArray(v)) return v.length;
      let res = Object.keys(v);
      if (!withHidden) res = res.filter(k => !v[k].hidden);
      return res.length;
    },

    changeLocale(locale) {
      this.$inertia.get(document.location.href, {locale}, {
        preserveScroll: true, preserveState: true,
        onSuccess: p => {
          setTimeout(() => {
            fetch(document.head.querySelector('meta[name="locale"]').content).then(r => r.json())
                .then(m => {
                  this.$i18n.locale = locale;
                  this.$i18n.setLocaleMessage(locale, m);

                  document.dir = ['ar', 'dv', 'fa', 'ha', 'he', 'ks', 'ku', 'ps', 'sd', 'ur', 'yi'].indexOf(locale) > -1
                      ? 'rtl' : 'ltr';

                  this.$root.loadGlobals();

                  this.$root.$el.dispatchEvent(new CustomEvent('locale-changed', {detail: {locale, p}}));
                });
          }, 1);
        },
      });
    },

    isRoute(ro) {
      if (!ro) return null;

      let p = {};
      let r = '';
      if (typeof ro === 'string') {
        r = ro;
      } else {
        r = ro.r;
        p = ro.p;
      }

      return this.route().current(r, p);
    },

  },

  mounted() {
    this.handleSwal();
  },
  updated() {
    this.handleSwal();
  },
};
</script>

<style scoped>

</style>
