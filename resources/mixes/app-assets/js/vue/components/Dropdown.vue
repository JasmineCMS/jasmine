<template>
    <div class="dropdown" :class="{show: opened}">
        <button type="button" class="dropdown-toggle" :class="btnClass" aria-haspopup="true"
                :aria-expanded="opened ? 'true' : 'false'" @click="opened = !opened">
            <slot name="btn"></slot>
        </button>
        <div class="dropdown-menu" :class="{show: opened}">
            <slot name="dropdown"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dropdown",
        props: {
            btnClass: {
                required: false,
                type: String,
            },
        },
        data() {
            return {
                opened: false,
            };
        },
    }
</script>

<style scoped>

</style>
