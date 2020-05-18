if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value(search, rawPos) {
            let pos = rawPos > 0 ? rawPos | 0 : 0;
            return this.substring(pos, pos + search.length) === search;
        }
    });
}

window.Swal = require('sweetalert2');

require('./inc/axios');

require('./inc/tinymce');

require('./vue/vue');
