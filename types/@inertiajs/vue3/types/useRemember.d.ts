import { Ref } from 'vue';
export default function useRemember<T extends object>(data: T & {
    __rememberable?: boolean;
    __remember?: Function;
    __restore?: Function;
}, key?: string): Ref<T> | T;
