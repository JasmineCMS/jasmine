import { ReloadOptions } from '@inertiajs/core';
import { PropType, SlotsType } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    data: {
        type: (StringConstructor | {
            (arrayLength: number): String[];
            (...items: String[]): String[];
            new (arrayLength: number): String[];
            new (...items: String[]): String[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
            from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            of<T>(...items: T[]): T[];
            readonly [Symbol.species]: ArrayConstructor;
        })[];
    };
    params: {
        type: PropType<ReloadOptions>;
    };
    buffer: {
        type: NumberConstructor;
        default: number;
    };
    as: {
        type: StringConstructor;
        default: string;
    };
    always: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, () => (import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | null)[], {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: (StringConstructor | {
            (arrayLength: number): String[];
            (...items: String[]): String[];
            new (arrayLength: number): String[];
            new (...items: String[]): String[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
            from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            of<T>(...items: T[]): T[];
            readonly [Symbol.species]: ArrayConstructor;
        })[];
    };
    params: {
        type: PropType<ReloadOptions>;
    };
    buffer: {
        type: NumberConstructor;
        default: number;
    };
    as: {
        type: StringConstructor;
        default: string;
    };
    always: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    buffer: number;
    as: string;
    always: boolean;
}, SlotsType<{
    default: {
        fetching: boolean;
    };
    fallback: {};
}>, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
