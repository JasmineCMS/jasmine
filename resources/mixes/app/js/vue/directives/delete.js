export default {
    inserted(el, binding, vnode) {
        el.addEventListener('click', function (evt) {
            evt.preventDefault();

            Swal.fire({
                title: vnode.context.$t('swal.Delete'),
                //text: `Are you sure you want to delete "${el.dataset.title}"?`,
                text: vnode.context.$t('swal.sure', {title: el.dataset.title}),
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: vnode.context.$t('swal.Cancel'),
                confirmButtonText: vnode.context.$t('swal.Yes'),
            }).then(r => {
                if (r.value) {
                    axios.delete(el.href).then(response => {
                        document.location.reload();
                    });
                }
            });
        });
    },
}
