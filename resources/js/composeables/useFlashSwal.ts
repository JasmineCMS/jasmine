import {watch} from 'vue';
import {usePage} from '@inertiajs/vue3';
import Swal from '@/js/lib/Swal';

export function useFlashSwal() {
  watch(
    () => usePage().props._swal,
    (v) => v && Swal.fire(v),
    {immediate: true},
  );
}
