import {inject} from 'vue';
import {usePage} from '@inertiajs/vue3';
import {useI18n} from 'vue-i18n';
import type {route as routeFn} from 'ziggy-js';
import Swal from '@/js/lib/Swal';

export function useFileManager() {
  const page = usePage();
  const {t} = useI18n();

  const route = inject('route') as typeof routeFn;
  if (!route) throw new Error('useFileManager: "route" injection not found');

  function openFileManager(options: {
    onSelect: (fileUrl: string) => void;
    path?: string | null;
    disk?: string | null;
    extensions?: string[];
  }) {
    options.path ??= [(page.props as any)?.breadable?.key, page.props?.id].filter(Boolean).join('/');

    const url = route('jasmine.file-manager.standalone', {
      leftDisk: options.disk ?? null,
      leftPath: options.path,
      extensions: options.extensions ? options.extensions.join(',') : null,
    });

    Swal.fire({
      title: t('FileManager.title'),
      html: `<iframe src="${url}" style="width:100%;height:75vh;border:0;border-radius:0.375rem;"></iframe>`,
      width: '80vw',
      padding: '1rem',
      showConfirmButton: false,
      showCloseButton: true,
      didOpen: () => {
        const frame = Swal.getHtmlContainer()?.querySelector('iframe') as HTMLIFrameElement | null;
        frame?.addEventListener('load', () => {
          const fm = (frame.contentWindow as any)?.fm;
          if (!fm) return;

          fm.$store.commit('fm/setFileCallBack', (fileUrl: null | string) => {
            if (!fileUrl) return;

            const origin = document.location.origin;
            if (fileUrl.startsWith(origin)) fileUrl = fileUrl.replace(origin, '');

            options.onSelect(fileUrl);

            Swal.close();
          });
        });
      },
    });
  }

  return {openFileManager};
}
