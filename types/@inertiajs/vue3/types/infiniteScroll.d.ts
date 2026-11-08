import { InfiniteScrollActionSlotProps, InfiniteScrollComponentBaseProps, InfiniteScrollSlotProps, ReloadOptions } from '@inertiajs/core';
import { PropType, SlotsType } from 'vue';
declare const InfiniteScroll: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<InfiniteScrollComponentBaseProps["data"]>;
        required: true;
    };
    buffer: {
        type: PropType<InfiniteScrollComponentBaseProps["buffer"]>;
        default: number;
    };
    onlyNext: {
        type: BooleanConstructor;
        default: boolean;
    };
    onlyPrevious: {
        type: BooleanConstructor;
        default: boolean;
    };
    as: {
        type: PropType<InfiniteScrollComponentBaseProps["as"]>;
        default: string;
    };
    manual: {
        type: PropType<InfiniteScrollComponentBaseProps["manual"]>;
        default: boolean;
    };
    manualAfter: {
        type: PropType<InfiniteScrollComponentBaseProps["manualAfter"]>;
        default: number;
    };
    preserveUrl: {
        type: PropType<InfiniteScrollComponentBaseProps["preserveUrl"]>;
        default: boolean;
    };
    reverse: {
        type: PropType<InfiniteScrollComponentBaseProps["reverse"]>;
        default: boolean;
    };
    autoScroll: {
        type: PropType<InfiniteScrollComponentBaseProps["autoScroll"]>;
        default: undefined;
    };
    itemsElement: {
        type: PropType<string | (() => HTMLElement | null | undefined)>;
        default: null;
    };
    startElement: {
        type: PropType<string | (() => HTMLElement | null | undefined)>;
        default: null;
    };
    endElement: {
        type: PropType<string | (() => HTMLElement | null | undefined)>;
        default: null;
    };
    params: {
        type: PropType<ReloadOptions>;
        default: () => {};
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<InfiniteScrollComponentBaseProps["data"]>;
        required: true;
    };
    buffer: {
        type: PropType<InfiniteScrollComponentBaseProps["buffer"]>;
        default: number;
    };
    onlyNext: {
        type: BooleanConstructor;
        default: boolean;
    };
    onlyPrevious: {
        type: BooleanConstructor;
        default: boolean;
    };
    as: {
        type: PropType<InfiniteScrollComponentBaseProps["as"]>;
        default: string;
    };
    manual: {
        type: PropType<InfiniteScrollComponentBaseProps["manual"]>;
        default: boolean;
    };
    manualAfter: {
        type: PropType<InfiniteScrollComponentBaseProps["manualAfter"]>;
        default: number;
    };
    preserveUrl: {
        type: PropType<InfiniteScrollComponentBaseProps["preserveUrl"]>;
        default: boolean;
    };
    reverse: {
        type: PropType<InfiniteScrollComponentBaseProps["reverse"]>;
        default: boolean;
    };
    autoScroll: {
        type: PropType<InfiniteScrollComponentBaseProps["autoScroll"]>;
        default: undefined;
    };
    itemsElement: {
        type: PropType<string | (() => HTMLElement | null | undefined)>;
        default: null;
    };
    startElement: {
        type: PropType<string | (() => HTMLElement | null | undefined)>;
        default: null;
    };
    endElement: {
        type: PropType<string | (() => HTMLElement | null | undefined)>;
        default: null;
    };
    params: {
        type: PropType<ReloadOptions>;
        default: () => {};
    };
}>> & Readonly<{}>, {
    reverse: boolean | undefined;
    preserveUrl: boolean | undefined;
    params: ReloadOptions;
    buffer: number | undefined;
    as: string | undefined;
    manual: boolean | undefined;
    manualAfter: number | undefined;
    autoScroll: boolean | undefined;
    onlyNext: boolean;
    onlyPrevious: boolean;
    itemsElement: string | (() => HTMLElement | null | undefined);
    startElement: string | (() => HTMLElement | null | undefined);
    endElement: string | (() => HTMLElement | null | undefined);
}, SlotsType<{
    default: InfiniteScrollSlotProps;
    previous: InfiniteScrollActionSlotProps;
    next: InfiniteScrollActionSlotProps;
    loading: InfiniteScrollActionSlotProps;
}>, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default InfiniteScroll;
