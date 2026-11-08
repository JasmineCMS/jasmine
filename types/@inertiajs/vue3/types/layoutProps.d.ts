import { type LayoutProps, type NamedLayoutProps } from '@inertiajs/core';
export declare const state: import("vue").Ref<{
    shared: Record<string, unknown>;
    named: Record<string, Record<string, unknown>>;
}, {
    shared: Record<string, unknown>;
    named: Record<string, Record<string, unknown>>;
} | {
    shared: Record<string, unknown>;
    named: Record<string, Record<string, unknown>>;
}>;
export declare function setLayoutProps(props: Partial<LayoutProps>): void;
export declare function setLayoutProps<K extends keyof NamedLayoutProps>(name: K, props: Partial<NamedLayoutProps[K]>): void;
export declare function setLayoutProps<T = never>(props: Partial<NoInfer<T>>): void;
export declare function setLayoutProps<T = never>(name: string, props: Partial<NoInfer<T>>): void;
export declare function resetLayoutProps(): void;
