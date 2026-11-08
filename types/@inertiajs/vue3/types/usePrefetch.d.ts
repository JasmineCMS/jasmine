import { VisitOptions } from '@inertiajs/core';
import { Ref } from 'vue';
export default function usePrefetch(options?: VisitOptions): {
    lastUpdatedAt: Ref<number | null>;
    isPrefetching: Ref<boolean>;
    isPrefetched: Ref<boolean>;
    flush: () => void;
};
