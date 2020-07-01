<template>
    <div class="vDataTable" :class="{'vDataTable-loading': loading}">
        <div class="vDataTable-toolbar d-flex flex-wrap justify-content-between align-content-center">
            <div class="vDataTable-search">
                <label>
                    <span>Search:</span>
                    <input type="search" v-model="request.search.value">
                </label>
                <label>
                    <span>Regex:</span>
                    <input type="checkbox" v-model="request.search.regex">
                </label>
            </div>

            <div class="vDataTable-pageLength" v-if="lengths.length > 0">
                <label>
                    Show
                    <select v-model="request.length">
                        <option v-for="(length,li) in lengths" :key="li" :value="length">
                            {{ length }}
                        </option>
                    </select>
                </label>
            </div>
        </div>

        <table :class="Array.isArray(tableClass) ? tableClass.join(' ') : tableClass">
            <thead @click="order">
            <slot name="thead" :t="this"></slot>
            </thead>
            <draggable
                :list="response.data"
                tag="tbody"
                ghost-class="ghost"
                handle=".dnd-handler"
                @change="reorder"
            >
                <tr v-for="(row, ri) in response.data">
                    <td v-for="(column, ci) in columns">
                        <slot :name="'td_'+ci" :data="row[column.data]" :row="row" :column="column">
                            {{ row[column.data] }}
                        </slot>
                    </td>
                </tr>
            </draggable>
        </table>

        <div class="vDataTable-footer d-flex flex-wrap justify-content-between align-content-center">
            <div class="vDataTable-count">
                <span>Showing</span>
                <span v-text="request.start + 1"></span>
                <span>to</span>
                <span v-text="request.start + response.data.length"></span>
                <span>of</span>
                <span v-text="response.recordsFiltered"></span>
                <span>entries</span>
                <template v-if="response.recordsFiltered !== response.recordsTotal">
                    <span>
                        (<span>Filtered from</span>
                        <span v-text="response.recordsTotal"></span>
                        <span>total entries</span>)
                    </span>
                </template>
            </div>

            <div class="vDataTable-pagination">
                <ul class="pagination">
                    <li class="vDataTable-pagination-back page-item">
                        <a class="page-link" @click.prevent="prev" :disabled="request.start === 0"
                           aria-label="« Previous">&lt;</a>
                    </li>

                    <template v-if="pages < 8">
                        <li v-for="n in pages" :key="n" class="page-item"
                            :class="{'vDataTable-pagination-current': n === currentPage}">
                            <a class="page-link" @click.prevent="goToPage(n)">{{ n }}</a>
                        </li>
                    </template>
                    <template v-else-if="pages > 7 && currentPage < 5">
                        <li v-for="n in 5" :key="n"
                            :class="{'vDataTable-pagination-current': n === currentPage}">
                            <a class="page-link" @click.prevent="goToPage(n)">{{ n }}</a>
                        </li>
                        <li class="vDataTable-disabled">
                            <a @click.prevent class="vDataTable-disabled">...</a>
                        </li>
                        <li>
                            <a class="page-link" @click.prevent="goToPage(pages)">{{ pages }}</a>
                        </li>
                    </template>
                    <template v-else-if="pages > 7 && currentPage > 4 && currentPage < pages - 4">
                        <li>
                            <a class="page-link" @click.prevent="goToPage(1)">1</a>
                        </li>
                        <li class="vDataTable-disabled">
                            <a @click.prevent class="vDataTable-disabled">...</a>
                        </li>
                        <li>
                            <a class="page-link" @click.prevent="goToPage(currentPage - 1)">{{ currentPage - 1 }}</a>
                        </li>
                        <li class="vDataTable-pagination-current">
                            <a class="page-link" @click.prevent="goToPage(currentPage)">{{ currentPage }}</a>
                        </li>
                        <li>
                            <a class="page-link" @click.prevent="goToPage(currentPage + 1)">{{ currentPage + 1 }}</a>
                        </li>
                        <li class="vDataTable-disabled">
                            <a @click.prevent class="vDataTable-disabled">...</a>
                        </li>
                        <li>
                            <a class="page-link" @click.prevent="goToPage(pages)">{{ pages }}</a>
                        </li>
                    </template>
                    <template v-else-if="currentPage > pages - 5">
                        <li>
                            <a class="page-link" @click.prevent="goToPage(1)">1</a>
                        </li>
                        <li class="vDataTable-disabled">
                            <a @click.prevent class="vDataTable-disabled">...</a>
                        </li>
                        <li v-for="n in 5" :key="n"
                            :class="{'vDataTable-pagination-current': pages +(n-5) === currentPage}">
                            <a class="page-link" @click.prevent="goToPage(pages +(n-5))">{{ pages +(n-5) }}</a>
                        </li>

                    </template>

                    <li class="vDataTable-pagination-next">
                        <a class="page-link" @click.prevent="next"
                           :disabled="request.start === (pages - 1) * request.length"
                           aria-label="Next »">&gt;</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    let axios = require('axios');
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    let qs = require('qs');

    function indexInParent(node) {
        let children = node.parentNode.childNodes;
        let num = 0;
        for (let i = 0; i < children.length; i++) {
            if (children[i] === node) return num;
            if (children[i].nodeType === 1) num++;
        }
        return -1;
    }

    let VDataTable = {
        name: 'VDataTable',

        props: {
            dataUrl: {
                required: true,
                type: String,
            },

            sortUrl: {
                required: false,
                type: String,
            },

            sortColumn: {
                required: false,
                type: String,
            },

            keyColumn: {
                required: false,
                type: String,
            },

            tableClass: {
                required: false,
                type: [Array, String],
                default: '',
            },

            lengths: {
                required: false,
                type: Array,
                default() {
                    return [10, 25, 50, 100];
                },
            },
        },

        data() {
            return {
                columns: [],

                request: {
                    draw: 0,
                    start: 0,
                    length: 10,
                    columns: [],
                    order: [],
                    search: {
                        value: null,
                        regex: false,
                    },
                },

                response: {
                    draw: 0,
                    recordsTotal: 0,
                    recordsFiltered: 0,
                    data: [],
                    error: null,
                },

                loading: true,
            };
        },

        methods: {
            load() {
                let vm = this;

                vm.loading = true;

                vm.request.columns = vm.columns;

                vm.request.draw++;

                axios.get(vm.dataUrl, {
                    params: vm.request,
                    paramsSerializer: params => {
                        return qs.stringify(params);
                    }
                }).then(r => {
                    vm.response = r.data;
                    vm.loading = false;
                });
            },

            order($event) {
                window.e = $event;
            },

            goToPage(n) {
                this.request.start = this.request.length * (n - 1);
            },

            next() {
                if (this.currentPage !== this.pages) {
                    this.request.start += this.request.length;
                }
            },

            prev() {
                if (this.currentPage > 1) {
                    this.request.start -= this.request.length;
                }
            },

            reorder(change) {
                if (!change.moved) {
                    return;
                }

                if (!this.sortUrl) {
                    return;
                }

                let newOrder = this.response.data.map((i, n) => {
                    return {id: i[this.keyColumn], order: n + 1};
                });

                axios.put(this.sortUrl, {order: newOrder}).then(r => {
                    this.load();
                });
            },
        },

        computed: {
            pages() {
                return Math.ceil(this.response.recordsFiltered / this.request.length);
            },

            currentPage() {
                return (this.request.start / this.request.length) + 1;
            },
        },

        watch: {
            'request.start'() {
                this.load();
            },

            'request.length'() {
                this.request.start = 0;
                this.load();
            },

            'request.search.value'() {
                this.load();
            },

            'request.search.regex'() {
                this.load();
            },
        },

        mounted() {
            if (this.lengths.length > 0) {
                this.request.length = this.lengths[0];
            }

            this.load();
        },

        install(Vue, options) {
            Vue.component('v-data-table', this);

            Vue.directive('dt-column', {
                inserted(el, binding, vnode) {
                    let vdt = binding.value[0] || null;

                    if (vdt && vdt.$options && vdt.$options.name === 'VDataTable') {
                        let settings = Object.assign({
                            name: null,
                            data: null,
                            searchable: true,
                            orderable: true,
                        }, binding.value[1] || {});

                        let i = vdt.columns.push(settings) - 1;

                        // handle order
                        if (settings.orderable) {
                            el.addEventListener('click', function (evt) {
                                let th = this;
                                let thI = indexInParent(th);
                                let dir;
                                if (th.classList.contains('vDataTable-asc')) {
                                    th.classList.remove('vDataTable-asc');
                                    th.classList.add('vDataTable-desc');
                                    dir = 'desc';
                                } else {
                                    th.classList.remove('vDataTable-desc');
                                    th.classList.add('vDataTable-asc');
                                    dir = 'asc';
                                }

                                // clear all sorting
                                th.parentNode.querySelectorAll('th')
                                    .forEach((oneTh, oneThI) => {
                                        if (oneThI === thI) {
                                            return;
                                        }

                                        oneTh.classList.remove('vDataTable-asc');
                                        oneTh.classList.remove('vDataTable-desc');
                                    });

                                vdt.request.order = [];
                                vdt.request.order.push({
                                    column: thI,
                                    dir: dir,
                                });

                                vdt.load();
                            });
                        }

                        return;
                    }

                    console.error(el, 'VDataTable is required');
                },
            });
        },
    };

    window.VDataTable = VDataTable;

    export default VDataTable;
</script>

<style scoped lang="scss">
    .vDataTable-asc {
        &:before {
            content: ' ';
            background: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301.219 301.219"><path d="M149.365 262.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h139.365c5.522 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM10 229.736h120.586c5.522 0 10-4.477 10-10v-10c0-5.523-4.478-10-10-10H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10zM10 166.736h101.805c5.522 0 10-4.477 10-10v-10c0-5.523-4.478-10-10-10H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10zM10 96.736h83.025c5.522 0 10-4.477 10-10v-10c0-5.523-4.478-10-10-10H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10zM10 33.736h64.244c5.522 0 10-4.477 10-10v-10c0-5.523-4.478-10-10-10H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10zM298.29 216.877l-7.07-7.071a10.001 10.001 0 00-14.142 0l-34.394 34.393V18.736c0-5.523-4.477-10-10-10h-10c-5.522 0-10 4.477-10 10v225.462l-34.394-34.393a9.999 9.999 0 00-14.142 0l-7.07 7.071c-3.905 3.905-3.905 10.237 0 14.142l63.535 63.536a10.003 10.003 0 0014.142 0l63.535-63.536c3.905-3.905 3.905-10.236 0-14.141z"/></svg>') no-repeat center /100% 100%;
            display: inline-block;
            height: 0.8125rem;
            width: 1rem;
        }
    }

    .vDataTable-desc {
        &:before {
            content: ' ';
            background: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301.219 301.219"><path d="M159.365 23.736v-10c0-5.523-4.477-10-10-10H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h139.365c5.523 0 10-4.477 10-10zM130.586 66.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h120.586c5.523 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM111.805 129.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h101.805c5.523 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM93.025 199.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h83.025c5.522 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM74.244 262.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h64.244c5.522 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM298.29 216.877l-7.071-7.071a10.001 10.001 0 00-14.143 0l-34.393 34.393V18.736c0-5.523-4.477-10-10-10h-10c-5.523 0-10 4.477-10 10v225.462l-34.393-34.393a10.003 10.003 0 00-14.142 0l-7.072 7.071c-3.904 3.905-3.904 10.237 0 14.142l63.536 63.536a9.968 9.968 0 007.071 2.929 9.966 9.966 0 007.071-2.929l63.536-63.536c3.905-3.905 3.905-10.237 0-14.141z"/></svg>') no-repeat center /100% 100%;
            display: inline-block;
            height: 0.8125rem;
            width: 1rem;
        }
    }
</style>
