import {watch} from 'vue';
import {router, usePage} from '@inertiajs/vue3';
import Swal from '@/js/lib/Swal';
import type {FlashSwal} from '@/js/globals';

const fireFlashSwal = async ({submit, nonce: _, ...options}: FlashSwal) => {
  const {isConfirmed, value} = await Swal.fire(options);
  if (!isConfirmed || !submit?.url) return;

  // through inertia, so the response's own flash swal shows
  router.visit(submit.url, {
    method: submit.method ?? 'post',
    data: value?.constructor === Object ? value : {value},
    preserveScroll: true,
  });
};

export function useFlashSwal() {
  watch(
    () => usePage().props._swal,
    (v) => v && fireFlashSwal(v),
    {immediate: true},
  );
}
