import { Errors, FormComponentProps, FormComponentRef, FormComponentSlotProps, FormDataConvertible, Method, VisitOptions } from '@inertiajs/core';
import { PropType, SlotsType } from 'vue';
declare const Form: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    action: {
        type: PropType<FormComponentProps["action"]>;
        default: string;
    };
    method: {
        type: PropType<FormComponentProps["method"]>;
        default: string;
    };
    headers: {
        type: PropType<FormComponentProps["headers"]>;
        default: () => {};
    };
    queryStringArrayFormat: {
        type: PropType<FormComponentProps["queryStringArrayFormat"]>;
        default: string;
    };
    errorBag: {
        type: PropType<FormComponentProps["errorBag"]>;
        default: null;
    };
    showProgress: {
        type: BooleanConstructor;
        default: boolean;
    };
    transform: {
        type: PropType<FormComponentProps["transform"]>;
        default: (data: Record<string, FormDataConvertible>) => Record<string, FormDataConvertible>;
    };
    options: {
        type: PropType<FormComponentProps["options"]>;
        default: () => {};
    };
    resetOnError: {
        type: PropType<FormComponentProps["resetOnError"]>;
        default: boolean;
    };
    resetOnSuccess: {
        type: PropType<FormComponentProps["resetOnSuccess"]>;
        default: boolean;
    };
    setDefaultsOnSuccess: {
        type: PropType<FormComponentProps["setDefaultsOnSuccess"]>;
        default: boolean;
    };
    onCancelToken: {
        type: PropType<FormComponentProps["onCancelToken"]>;
        default: () => undefined;
    };
    onBefore: {
        type: PropType<FormComponentProps["onBefore"]>;
        default: () => undefined;
    };
    onStart: {
        type: PropType<FormComponentProps["onStart"]>;
        default: () => undefined;
    };
    onProgress: {
        type: PropType<FormComponentProps["onProgress"]>;
        default: () => undefined;
    };
    onFinish: {
        type: PropType<FormComponentProps["onFinish"]>;
        default: () => undefined;
    };
    onCancel: {
        type: PropType<FormComponentProps["onCancel"]>;
        default: () => undefined;
    };
    onSuccess: {
        type: PropType<FormComponentProps["onSuccess"]>;
        default: () => undefined;
    };
    onError: {
        type: PropType<FormComponentProps["onError"]>;
        default: () => undefined;
    };
    onSubmitComplete: {
        type: PropType<FormComponentProps["onSubmitComplete"]>;
        default: () => undefined;
    };
    disableWhileProcessing: {
        type: BooleanConstructor;
        default: boolean;
    };
    invalidateCacheTags: {
        type: PropType<FormComponentProps["invalidateCacheTags"]>;
        default: () => never[];
    };
    validateFiles: {
        type: PropType<FormComponentProps["validateFiles"]>;
        default: boolean;
    };
    validationTimeout: {
        type: PropType<FormComponentProps["validationTimeout"]>;
        default: number;
    };
    optimistic: {
        type: PropType<FormComponentProps["optimistic"]>;
        default: undefined;
    };
    withAllErrors: {
        type: PropType<FormComponentProps["withAllErrors"]>;
        default: null;
    };
    component: {
        type: PropType<FormComponentProps["component"]>;
        default: null;
    };
    instant: {
        type: PropType<FormComponentProps["instant"]>;
        default: boolean;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    action: {
        type: PropType<FormComponentProps["action"]>;
        default: string;
    };
    method: {
        type: PropType<FormComponentProps["method"]>;
        default: string;
    };
    headers: {
        type: PropType<FormComponentProps["headers"]>;
        default: () => {};
    };
    queryStringArrayFormat: {
        type: PropType<FormComponentProps["queryStringArrayFormat"]>;
        default: string;
    };
    errorBag: {
        type: PropType<FormComponentProps["errorBag"]>;
        default: null;
    };
    showProgress: {
        type: BooleanConstructor;
        default: boolean;
    };
    transform: {
        type: PropType<FormComponentProps["transform"]>;
        default: (data: Record<string, FormDataConvertible>) => Record<string, FormDataConvertible>;
    };
    options: {
        type: PropType<FormComponentProps["options"]>;
        default: () => {};
    };
    resetOnError: {
        type: PropType<FormComponentProps["resetOnError"]>;
        default: boolean;
    };
    resetOnSuccess: {
        type: PropType<FormComponentProps["resetOnSuccess"]>;
        default: boolean;
    };
    setDefaultsOnSuccess: {
        type: PropType<FormComponentProps["setDefaultsOnSuccess"]>;
        default: boolean;
    };
    onCancelToken: {
        type: PropType<FormComponentProps["onCancelToken"]>;
        default: () => undefined;
    };
    onBefore: {
        type: PropType<FormComponentProps["onBefore"]>;
        default: () => undefined;
    };
    onStart: {
        type: PropType<FormComponentProps["onStart"]>;
        default: () => undefined;
    };
    onProgress: {
        type: PropType<FormComponentProps["onProgress"]>;
        default: () => undefined;
    };
    onFinish: {
        type: PropType<FormComponentProps["onFinish"]>;
        default: () => undefined;
    };
    onCancel: {
        type: PropType<FormComponentProps["onCancel"]>;
        default: () => undefined;
    };
    onSuccess: {
        type: PropType<FormComponentProps["onSuccess"]>;
        default: () => undefined;
    };
    onError: {
        type: PropType<FormComponentProps["onError"]>;
        default: () => undefined;
    };
    onSubmitComplete: {
        type: PropType<FormComponentProps["onSubmitComplete"]>;
        default: () => undefined;
    };
    disableWhileProcessing: {
        type: BooleanConstructor;
        default: boolean;
    };
    invalidateCacheTags: {
        type: PropType<FormComponentProps["invalidateCacheTags"]>;
        default: () => never[];
    };
    validateFiles: {
        type: PropType<FormComponentProps["validateFiles"]>;
        default: boolean;
    };
    validationTimeout: {
        type: PropType<FormComponentProps["validationTimeout"]>;
        default: number;
    };
    optimistic: {
        type: PropType<FormComponentProps["optimistic"]>;
        default: undefined;
    };
    withAllErrors: {
        type: PropType<FormComponentProps["withAllErrors"]>;
        default: null;
    };
    component: {
        type: PropType<FormComponentProps["component"]>;
        default: null;
    };
    instant: {
        type: PropType<FormComponentProps["instant"]>;
        default: boolean;
    };
}>> & Readonly<{}>, {
    transform: ((data: Record<string, FormDataConvertible>) => Record<string, FormDataConvertible>) | undefined;
    withAllErrors: boolean | null | undefined;
    method: Method | "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | undefined;
    optimistic: import("@inertiajs/core").FormComponentOptimisticCallback<import("@inertiajs/core").PageProps & {
        errors: Errors & import("@inertiajs/core").ErrorBag;
        deferred?: Record<string, VisitOptions["only"]>;
    }, Record<string, FormDataConvertible>> | undefined;
    headers: Record<string, string> | undefined;
    errorBag: string | null | undefined;
    queryStringArrayFormat: import("@inertiajs/core").QueryStringArrayFormatOption | undefined;
    showProgress: boolean;
    invalidateCacheTags: string | string[] | undefined;
    component: string | undefined;
    onCancelToken: import("@inertiajs/core").CancelTokenCallback | undefined;
    onBefore: import("@inertiajs/core").GlobalEventCallback<"before", import("@inertiajs/core").RequestPayload> | undefined;
    onStart: import("@inertiajs/core").GlobalEventCallback<"start", import("@inertiajs/core").RequestPayload> | undefined;
    onProgress: import("@inertiajs/core").GlobalEventCallback<"progress", import("@inertiajs/core").RequestPayload> | undefined;
    onFinish: import("@inertiajs/core").GlobalEventCallback<"finish", import("@inertiajs/core").RequestPayload> | undefined;
    onCancel: import("@inertiajs/core").GlobalEventCallback<"cancel", import("@inertiajs/core").RequestPayload> | undefined;
    onSuccess: import("@inertiajs/core").GlobalEventCallback<"success", import("@inertiajs/core").RequestPayload> | undefined;
    onError: import("@inertiajs/core").GlobalEventCallback<"error", import("@inertiajs/core").RequestPayload> | undefined;
    options: import("@inertiajs/core").FormComponentOptions | undefined;
    action: string | import("@inertiajs/core").UrlMethodPair | undefined;
    resetOnError: boolean | string[] | undefined;
    resetOnSuccess: boolean | string[] | undefined;
    setDefaultsOnSuccess: boolean | undefined;
    onSubmitComplete: ((props: import("@inertiajs/core").FormComponentOnSubmitCompleteArguments<Record<string, FormDataConvertible> & object>) => void) | undefined;
    validateFiles: boolean | undefined;
    validationTimeout: number | undefined;
    instant: boolean | undefined;
    disableWhileProcessing: boolean;
}, SlotsType<{
    default: FormComponentSlotProps;
}>, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare function useFormContext<TForm extends object = Record<string, any>>(): FormComponentRef<TForm> | undefined;
type TypedFormComponent<TForm extends Record<string, any>> = Omit<typeof Form, 'new'> & {
    new (...args: ConstructorParameters<typeof Form>): Omit<InstanceType<typeof Form>, '$props' | '$slots'> & {
        $props: Omit<InstanceType<typeof Form>['$props'], 'optimistic' | 'transform' | 'resetOnSuccess' | 'resetOnError' | 'onSubmitComplete'> & {
            optimistic?: FormComponentProps<TForm>['optimistic'];
            transform?: FormComponentProps<TForm>['transform'];
            resetOnSuccess?: FormComponentProps<TForm>['resetOnSuccess'];
            resetOnError?: FormComponentProps<TForm>['resetOnError'];
            onSubmitComplete?: FormComponentProps<TForm>['onSubmitComplete'];
        };
        $slots: {
            default: (props: FormComponentSlotProps<TForm>) => any;
        };
    };
};
export declare function createForm<TForm extends Record<string, any>>(): TypedFormComponent<TForm>;
export default Form;
