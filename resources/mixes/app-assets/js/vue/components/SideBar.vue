<i18n>
    {
        "en": {
        }
    }
</i18n>

<template>
    <aside class="side-bar" :class="{opened:opened}">
        <ul class="nav flex-column">
            <li v-for="(item, i) in items" :key="i" class="nav-item"
                :class="item.children && item.children.length ? 'dropdown' : ''">

                <a v-if="item.children && item.children.length" class="nav-link dropdown-toggle d-flex"
                   :href="item.href || '#'" :title="item.title" role="button" @click="item.opened = !item.opened"
                   :aria-expanded="item.opened ? 'true' : 'false'" aria-haspopup="true">
                    <i class="fas" :class="item.icon || 'none'"></i>
                    <span v-text="item.title"></span>
                </a>
                <a v-else class="nav-link d-flex" :href="item.href || '#'" :title="item.title">
                    <i v-if="item.icon" class="fas" :class="item.icon"></i>
                    <span v-text="item.title"></span>
                </a>

                <div v-if="item.children && item.children.length" class="child-menu">
                    <a v-for="(child, ci) in item.children" :key="ci"
                       class="nav-link" :href="child.href || '#'" :title="child.title">
                        {{ child.title }}
                    </a>
                </div>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "SideBar",
        props: {
            menuItems: {
                required: true,
                type: Array,
            },
        },

        data() {
            return {
                opened: true,
                items: [],
            };
        },

        mounted() {
            this.items = this.menuItems;
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../sass/_variables.scss";

    .side-bar {
        background-color: darken($pink, 40);
        min-height: calc(100vh - 40px);
        width: 65px;
        padding: 0.5rem 0;
        transition: width 0.3s ease-in-out;

        &.opened {
            width: 200px;
        }

        .nav {
            .nav-item {
                .nav-link {
                    color: lighten($blue, 20);
                    padding: 0.5rem 0.5rem;
                    font-size: 1.25em;
                    justify-content: flex-start;

                    .fas {
                        font-size: 1.25rem;
                        display: inline-block;
                        padding-inline-end: 0.5em;

                        & + span {
                            flex: 1;
                        }

                        &.none {
                            &:before {
                                content: ' ';
                                width: 1.15ch;
                                display: inline-block;
                            }
                        }
                    }
                }

                &:hover {
                    background-color: darken($pink, 45);
                    text-shadow: 0 0 10px $blue;
                }

                &.dropdown {
                    .child-menu {
                        display: none;
                        background-color: darken($pink, 30);
                        > * {
                            padding-inline-start: 3rem;
                            font-size: 1.1em;
                            &:hover {
                                background-color: darken($pink, 35);
                            }
                        }
                    }

                    [aria-haspopup] {
                        &[aria-expanded='true'] {
                            & + .child-menu {
                                display: block;
                            }
                        }
                    }

                }
            }
        }
    }

</style>
