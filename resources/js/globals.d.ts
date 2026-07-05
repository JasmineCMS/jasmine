import '@inertiajs/core';
import type {Config, route as routeFn} from 'ziggy-js';
import {createHeadManager, type Page, Router} from '@inertiajs/core';
import enSchema from '../../resources/locales/ui/en.json';
import type {DefineLocaleMessage} from 'vue-i18n';
import type {SweetAlertOptions} from 'sweetalert2';

import type {SideBarItems} from '@/js/components/SidebarMenu.vue';

type LocaleSchema = typeof enSchema;

declare global {}

declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends LocaleSchema {}
}

declare module '@inertiajs/core' {
  export interface InertiaConfig {
    sharedPageProps: {
      _ziggy: Omit<Config, 'location'> & {location: string};
      _locale: string;
      _locales: string[];
      _i18n: DefineLocaleMessage;
      _env: string;
      _sb_menu: SideBarItems;
      _user: {name: string; email: string; avatar_url: string};
      _info: {jasmine: string};
      _ssos?: {[provider: string]: {name: string; icon: string}};
      _swal?: null | SweetAlertOptions;
    };
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    route: typeof routeFn;
    $inertia: typeof Router;
    $page: Page;
    $headManager: ReturnType<typeof createHeadManager>;
  }
}
