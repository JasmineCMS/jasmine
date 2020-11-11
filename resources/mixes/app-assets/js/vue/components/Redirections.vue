<template>
    <div>
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <div class="h4 mb-0" v-text="$t('Redirections')"></div>

                <div>
                    <a :href="exportUrl" target="_blank" class="btn btn-outline-info">
                        <i class="fas fa-download"></i>
                        {{ $t('Export') }}
                    </a>


                    <button type="button" @click="importRedirections" class="btn btn-outline-success">
                        <i class="fas fa-upload"></i>
                        {{ $t('Import') }}
                    </button>
                </div>
            </div>

            <div class="card-body">
                <div v-for="(r,i) in redirections" :key="r.id" class="redirection-item px-1 pt-3 mb-4">
                    <div class="d-flex align-items-center">
                        <div class="r-id" v-text="r.id"></div>
                        <div class="flex-fill">
                            <div class="form-row">
                                <div class="form-group px-2 col-md-5">
                                    <label :for="'from_'+r.id">
                                        {{ $t('From (old url)') }}
                                    </label>
                                    <input type="text" :id="'from_'+r.id" v-model="r.from" class="form-control">
                                </div>

                                <div class="form-group px-2 col-md-5">
                                    <label :for="'to_'+r.id">
                                        {{ $t('To (new url)') }}
                                    </label>
                                    <input type="text" :id="'to_'+r.id" v-model="r.to" class="form-control">
                                </div>

                                <div class="form-group px-2 flex-fill">
                                    <label :for="'permanent_'+r.id">
                                        {{ $t('Type') }}
                                    </label>
                                    <select :id="'permanent_'+r.id" v-model="r.permanent" class="form-control">
                                        <option :value="false">302 ({{ $t('Temporary') }})</option>
                                        <option :value="true">301 ({{ $t('Permanent') }})</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group px-2">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" :id="'regex_'+r.id"
                                               v-model="r.regex">
                                        <label class="custom-control-label" :for="'regex_'+r.id">
                                            {{ $t('Regular Expression') }}
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group px-2">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" :id="'enabled_'+r.id"
                                               v-model="r.enabled">
                                        <label class="custom-control-label" :for="'enabled_'+r.id">
                                            {{ $t('Enabled') }}
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group px-2">
                                    <button class="btn btn-outline-info" :disabled="r.regex"
                                            type="button" @click="appendQuery(r)">
                                        {{ $t('Catch query') }}
                                    </button>

                                    <button class="btn btn-outline-info"
                                            type="button" @click="httpAndS(r)">
                                        {{ $t('HTTP/HTTPS') }}
                                    </button>
                                </div>

                                <div class="flex-fill"></div>

                                <div class="form-group px-2">
                                    <button class="btn btn-primary" type="button" @click="save(r)">
                                        {{ $t('Save') }}
                                    </button>

                                    <button class="btn btn-danger" type="button" @click="remove(r.id, i)">
                                        {{ $t('Delete') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="h4" v-text="$t('New Redirection')"></div>
                <div class="redirection-item px-1 pt-3 mb-4">
                    <div class="d-flex align-items-center">
                        <div class="r-id">-</div>
                        <div class="flex-fill">
                            <div class="form-row">
                                <div class="form-group px-2 col-md-5">
                                    <label for="new_from">
                                        {{ $t('From (old url)') }}
                                    </label>
                                    <input type="text" id="new_from" v-model="newRedirection.from" class="form-control">
                                </div>

                                <div class="form-group px-2 col-md-5">
                                    <label for="new_to">
                                        {{ $t('To (new url)') }}
                                    </label>
                                    <input type="text" id="new_to" v-model="newRedirection.to" class="form-control">
                                </div>

                                <div class="form-group px-2 flex-fill">
                                    <label for="new_permanent">
                                        {{ $t('Type') }}
                                    </label>
                                    <select id="new_permanent" v-model="newRedirection.permanent" class="form-control">
                                        <option :value="false">302 ({{ $t('Temporary') }})</option>
                                        <option :value="true">301 ({{ $t('Permanent') }})</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group px-2">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="new_regex"
                                               v-model="newRedirection.regex">
                                        <label class="custom-control-label" for="new_regex">
                                            {{ $t('Regular Expression') }}
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group px-2">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="new_enabled"
                                               v-model="newRedirection.enabled">
                                        <label class="custom-control-label" for="new_enabled">
                                            {{ $t('Enabled') }}
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group px-2">
                                    <button class="btn btn-outline-info" :disabled="newRedirection.regex"
                                            type="button" @click="appendQuery(newRedirection)">
                                        {{ $t('Catch query') }}
                                    </button>

                                    <button class="btn btn-outline-info"
                                            type="button" @click="httpAndS(newRedirection)">
                                        {{ $t('HTTP/HTTPS') }}
                                    </button>
                                </div>

                                <div class="flex-fill"></div>

                                <div class="form-group px-2">
                                    <button class="btn btn-primary" type="button" @click="save(newRedirection)">
                                        {{ $t('Save') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <form :action="importUrl" method="post" enctype="multipart/form-data"
              class="d-none" ref="importForm">
            <input type="hidden" name="_token" :value="$csrf_token">
            <input ref="importFormInput"
                   type="file" name="file" accept=".*csv" class="d-none">
        </form>
    </div>
</template>

<script>
export default {
    name: "Redirections",
    props: {
        indexUrl: {
            required: true,
            type: String,
        },
        saveUrl: {
            required: true,
            type: String,
        },
        deleteUrl: {
            required: true,
            type: String,
        },
        exportUrl: {
            required: true,
            type: String,
        },
        importUrl: {
            required: true,
            type: String,
        },
    },

    data() {
        return {
            newRedirection: {
                from: '',
                to: '',
                permanent: true,
                regex: false,
                enabled: true,
            },

            redirections: [],
        };
    },

    methods: {
        load() {
            let vm = this;
            axios.get(vm.indexUrl).then(r => {
                vm.redirections = r.data;
            });
        },

        save(r) {
            let vm = this;
            axios.post(vm.saveUrl, r).then(res => {
                if (!r.id) {
                    vm.newRedirection.from = '';
                    vm.newRedirection.to = '';
                    vm.newRedirection.permanent = true;
                    vm.newRedirection.regex = false;
                    vm.newRedirection.enabled = true;
                    vm.load();
                }
            });
        },

        remove(id, i) {
            let vm = this;

            Swal.fire({
                title: vm.$t('swal.Delete'),
                text: vm.$t('swal.sure', {title: id}),
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: vm.$t('swal.Cancel'),
                confirmButtonText: vm.$t('swal.Yes'),
            }).then(r => {
                if (r.value) {
                    axios.delete(vm.saveUrl, {params: {id}}).then(res => {
                        if (res.data.success) {
                            vm.load();
                        }
                    });
                }
            });
        },

        appendQuery(r) {
            if (r.regex) {
                return;
            }

            r.regex = true;

            // remove query string if exists;
            r.from = r.from.split('?')[0];

            r.from = `^${r.from}(\\?.*)?$`;
            r.to = `${r.to}$1`;

        },

        httpAndS(r) {
            r.regex = true;

            r.from = r.from.replace(/https?:\/\//, 'https?://');
        },

        importRedirections() {
            let vm = this;
            vm.$refs.importFormInput.click();

            vm.$refs.importFormInput.addEventListener('change', function (evt) {
                setTimeout(function () {
                    vm.$refs.importForm.submit();
                }, 250);
            });

        },
    },

    mounted() {
        this.load();
    }
}
</script>

<style scoped lang="scss">
.redirection-item {
    background-color: #f2f2f2;

    .r-id {
        text-align: center;
        width: 5ch;
        font-weight: bold;
    }
}
</style>
