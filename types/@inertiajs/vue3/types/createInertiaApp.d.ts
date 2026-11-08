import { CreateInertiaAppOptions, CreateInertiaAppOptionsForCSR, CreateInertiaAppOptionsForSSR, InertiaAppSSRResponse, Page, PageProps, SharedPageProps } from '@inertiajs/core';
import { DefineComponent, Plugin, App as VueApp } from 'vue';
import { InertiaApp, InertiaAppProps } from './app';
import { VueInertiaAppConfig } from './types';
type ComponentResolver = (name: string, page?: Page<SharedPageProps>) => DefineComponent | Promise<DefineComponent> | {
    default: DefineComponent;
};
type SetupOptions<ElementType, SharedProps extends PageProps> = {
    el: ElementType;
    App: InertiaApp;
    props: InertiaAppProps<SharedProps>;
    plugin: Plugin;
};
type VueWithApp<SharedProps extends PageProps> = (app: VueApp, options: {
    ssr: boolean;
    page: Page<SharedProps>;
}) => void;
type InertiaAppOptionsForCSR<SharedProps extends PageProps> = CreateInertiaAppOptionsForCSR<SharedProps, ComponentResolver, SetupOptions<HTMLElement, SharedProps>, void, VueInertiaAppConfig> & {
    withApp?: never;
};
type InertiaAppOptionsForSSR<SharedProps extends PageProps> = CreateInertiaAppOptionsForSSR<SharedProps, ComponentResolver, SetupOptions<null, SharedProps>, VueApp, VueInertiaAppConfig> & {
    render: (app: VueApp) => Promise<string>;
    withApp?: never;
};
type InertiaAppOptionsAuto<SharedProps extends PageProps> = Omit<CreateInertiaAppOptions<ComponentResolver, SetupOptions<HTMLElement | null, SharedProps>, VueApp | void, VueInertiaAppConfig>, 'setup'> & {
    page?: Page<SharedProps>;
    render?: undefined;
} & ({
    setup?: undefined;
    withApp?: VueWithApp<SharedProps>;
} | {
    setup: (options: SetupOptions<HTMLElement | null, SharedProps>) => VueApp | void;
    withApp?: never;
});
type RenderToString = (app: VueApp) => Promise<string>;
type RenderFunction<SharedProps extends PageProps> = (page: Page<SharedProps>, renderToString: RenderToString) => Promise<InertiaAppSSRResponse>;
export default function createInertiaApp<SharedProps extends PageProps = PageProps & SharedPageProps>(options: InertiaAppOptionsForCSR<SharedProps>): Promise<void>;
export default function createInertiaApp<SharedProps extends PageProps = PageProps & SharedPageProps>(options: InertiaAppOptionsForSSR<SharedProps>): Promise<InertiaAppSSRResponse>;
export default function createInertiaApp<SharedProps extends PageProps = PageProps & SharedPageProps>(options?: InertiaAppOptionsAuto<SharedProps>): Promise<void | RenderFunction<SharedProps>>;
export {};
