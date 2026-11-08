import { HeadManager, HeadManagerOnUpdateCallback, HeadManagerTitleCallback, Page, PageProps, SharedPageProps, type ServerHeadOption } from '@inertiajs/core';
import { DefineComponent, Plugin } from 'vue';
export interface InertiaAppProps<SharedProps extends PageProps = PageProps> {
    initialPage: Page<SharedProps>;
    initialComponent?: DefineComponent;
    resolveComponent?: (name: string, page?: Page) => DefineComponent | Promise<DefineComponent>;
    titleCallback?: HeadManagerTitleCallback;
    onHeadUpdate?: HeadManagerOnUpdateCallback;
    defaultLayout?: (name: string, page: Page) => unknown;
    serverHead?: ServerHeadOption;
}
export type InertiaApp = DefineComponent<InertiaAppProps>;
export declare let headManager: HeadManager;
declare const App: InertiaApp;
export default App;
export declare const plugin: Plugin;
export declare function usePage<TPageProps extends PageProps = PageProps>(): Page<TPageProps & SharedPageProps>;
