import { ErrorValue, FormDataErrors, FormDataKeys, FormDataType, FormDataValues, Method, OptimisticCallback, Progress, UrlMethodPair, UseFormSubmitArguments, UseFormSubmitOptions, UseFormTransformCallback, UseFormWithPrecognitionArguments } from '@inertiajs/core';
import { NamedInputEvent, PrecognitionPath, ValidationConfig, Validator } from 'laravel-precognition';
export interface InertiaFormProps<TForm extends object> {
    isDirty: boolean;
    errors: FormDataErrors<TForm>;
    hasErrors: boolean;
    processing: boolean;
    progress: Progress | null;
    wasSuccessful: boolean;
    recentlySuccessful: boolean;
    data(): TForm;
    transform(callback: UseFormTransformCallback<TForm>): this;
    defaults(): this;
    defaults<T extends FormDataKeys<TForm>>(field: T, value: FormDataValues<TForm, T>): this;
    defaults(fields: Partial<TForm>): this;
    reset<K extends FormDataKeys<TForm>>(...fields: K[]): this;
    clearErrors<K extends FormDataKeys<TForm>>(...fields: K[]): this;
    resetAndClearErrors<K extends FormDataKeys<TForm>>(...fields: K[]): this;
    setError<K extends FormDataKeys<TForm>>(field: K, value: ErrorValue): this;
    setError(errors: FormDataErrors<TForm>): this;
    submit: (...args: UseFormSubmitArguments) => void;
    get(url: string, options?: UseFormSubmitOptions): void;
    post(url: string, options?: UseFormSubmitOptions): void;
    put(url: string, options?: UseFormSubmitOptions): void;
    patch(url: string, options?: UseFormSubmitOptions): void;
    delete(url: string, options?: UseFormSubmitOptions): void;
    cancel(): void;
    dontRemember<K extends FormDataKeys<TForm>>(...fields: K[]): this;
    optimistic<TProps>(callback: OptimisticCallback<TProps>): this;
    withPrecognition(...args: UseFormWithPrecognitionArguments): InertiaPrecognitiveForm<TForm>;
}
type PrecognitionValidationConfig<TKeys> = ValidationConfig & {
    only?: TKeys[] | Iterable<TKeys> | ArrayLike<TKeys>;
};
export interface InertiaFormValidationProps<TForm extends object> {
    invalid<K extends FormDataKeys<TForm>>(field: K): boolean;
    setValidationTimeout(duration: number): this;
    touch<K extends FormDataKeys<TForm>>(field: K | NamedInputEvent | Array<K>, ...fields: K[]): this;
    touched<K extends FormDataKeys<TForm>>(field?: K): boolean;
    valid<K extends FormDataKeys<TForm>>(field: K): boolean;
    validate<K extends FormDataKeys<TForm> | PrecognitionPath<TForm>>(field?: K | NamedInputEvent | PrecognitionValidationConfig<K>, config?: PrecognitionValidationConfig<K>): this;
    validateFiles(): this;
    validating: boolean;
    validator: () => Validator;
    withAllErrors(): this;
    withoutFileValidation(): this;
    setErrors(errors: FormDataErrors<TForm> | Record<string, string | string[]>): this;
    forgetError<K extends FormDataKeys<TForm> | NamedInputEvent>(field: K): this;
}
interface InternalPrecognitionState {
    __touched: string[];
    __valid: string[];
}
export type InertiaForm<TForm extends object> = TForm & InertiaFormProps<TForm>;
export type InertiaPrecognitiveForm<TForm extends object> = InertiaForm<TForm> & InertiaFormValidationProps<TForm> & InternalPrecognitionState;
type ReservedFormKeys = keyof InertiaFormProps<any>;
type ValidateFormData<T> = {
    [K in keyof T]: K extends ReservedFormKeys ? ['Error: This field name is reserved by useForm:', K] : T[K];
};
export default function useForm<TForm extends FormDataType<TForm> & ValidateFormData<TForm>>(method: Method | (() => Method), url: string | (() => string), data: TForm | (() => TForm)): InertiaPrecognitiveForm<TForm>;
export default function useForm<TForm extends FormDataType<TForm> & ValidateFormData<TForm>>(urlMethodPair: UrlMethodPair | (() => UrlMethodPair), data: TForm | (() => TForm)): InertiaPrecognitiveForm<TForm>;
export default function useForm<TForm extends FormDataType<TForm> & ValidateFormData<TForm>>(rememberKey: string, data: TForm | (() => TForm)): InertiaForm<TForm>;
export default function useForm<TForm extends FormDataType<TForm> & ValidateFormData<TForm>>(data: TForm | (() => TForm)): InertiaForm<TForm>;
export default function useForm<TForm extends FormDataType<TForm>>(): InertiaForm<TForm>;
export {};
