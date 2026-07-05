import {createInertiaApp, router, usePage} from '@inertiajs/vue3';
import {createApp, type DefineComponent, h} from 'vue';
import {createI18n} from 'vue-i18n';
import {ZiggyVue, type Config} from 'ziggy-js';
import enSchema from '../../resources/locales/ui/en.json';

type LocaleSchema = typeof enSchema;

void createInertiaApp({
  progress: {color: '#4B5563'},
  title: (v) => (v ? `${v} - Jasmine` : 'Jasmine'),
  resolve: (name) => {
    const pages = import.meta.glob<DefineComponent>('./pages/**/*.vue');
    return pages[`./pages/${name}.vue`]();
  },
  setup({el, App, props, plugin}) {
    const locale = props.initialPage.props._locale as string;
    const i18n = createI18n({
      legacy: false,
      locale,
      fallbackLocale: 'en',
      messages: {[locale]: props.initialPage.props._i18n as LocaleSchema},
    });

    const ziggyConfig = {...(props.initialPage.props._ziggy as unknown as Config)};
    delete ziggyConfig.location;

    const app = createApp({
      render: () => h(App, props),
      mounted() {
        const page = usePage();

        document.getElementById('loader')?.remove();

        window.addEventListener('keydown', (evt: KeyboardEvent) => {
          if (
            evt.key?.toLowerCase() === 'r' &&
            evt.shiftKey &&
            !['input', 'select', 'textarea'].includes((evt.target as HTMLElement)?.tagName.toLowerCase())
          )
            router.reload({only: Object.keys(page.props)});
        });
      },
    })
      .use(plugin)
      .use(i18n)
      .use(ZiggyVue, ziggyConfig);

    router.on('navigate', ({detail}) => {
      if (detail.page.props._ziggy) {
        const updatedZiggy = {...(detail.page.props._ziggy as unknown as Config)};
        delete updatedZiggy.location;
        Object.assign(ziggyConfig, updatedZiggy);
      }
    });

    document.dispatchEvent(new CustomEvent('jasmine:beforeMount', {detail: {app: app}}));

    if (el) app.mount(el);
  },
});
