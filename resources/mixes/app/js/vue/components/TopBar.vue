<i18n>
{
    "en": {
        "Hi": "Hi",
        "Logout": "Logout"
    },
    "he": {
        "Hi": "היי",
        "Logout": "יציאה"
    }
}
</i18n>

<template>
    <header class="top-bar sticky-top d-flex justify-content-between align-items-center">
        <div class="start px-2">
            <dropdown btn-class="btn text-white">
                <template v-slot:btn>
                    {{ $t('Hi') }},
                    {{ user.name }}
                </template>
                <template v-slot:dropdown>
                    <a v-if="$i18n.locale === 'en'" class="dropdown-item" :href="localeUrl( 'he')">עברית</a>
                    <a v-else-if="$i18n.locale === 'he'" class="dropdown-item"
                       :href="localeUrl('en')">English</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" @click="$root.logout()">{{ $t('Logout') }}</a>
                </template>
            </dropdown>
        </div>

        <div class="center">
            <slot name="center"></slot>
        </div>

        <div class="end px-2">
            <slot name="end"></slot>
        </div>
    </header>
</template>

<script>
export default {
    name: "TopBar",
    props: {
        user: {
            required: true,
            type: Object,
        },
    },

    methods: {
        localeUrl(locale) {
            let url = new URL(document.location.href);
            let params = url.searchParams;
            params.set('locale', locale);
            url.search = params.toString();
            return url.toString();
        },
    },
}
</script>

<style lang="scss">
@import "../../../sass/variables";

header.top-bar {
    min-height: 40px;
    background-color: $black;

    .dropdown {
        .dropdown-menu {
            background-color: $black;
            color: $white;
            padding: 0;

            .dropdown-divider {
                margin: 0;
                border-top: 1px solid #e9ecef30;
            }

            .dropdown-item {
                color: $white;
                padding: 0.5rem 1.5rem;

                &:hover {
                    color: $white;
                    background-color: rgba($white, 0.2);
                }
            }
        }
    }
}
</style>
