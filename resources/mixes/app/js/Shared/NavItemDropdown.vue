<template>
  <component :is="as" class="dropdown">
    <a
      class="nav-link dropdown-toggle h-100"
      :class="{show: open}"
      :id="id"
      href="#"
      role="button"
      ref="btn"
      data-bs-toggle="dropdown"
      @click.prevent="open = !open"
      @keydown.esc="open = false"
      :aria-expanded="open ? 'true' : 'false'">
      <slot />
    </a>
    <ul
      class="dropdown-menu"
      :style="menuStyle"
      :class="[{show: open}, menuClass]"
      :aria-labelledby="id"
      data-bs-popper>
      <slot name="menu" />
    </ul>
  </component>
</template>

<script>
export default {
  name: 'NavItemDropdown',

  props: {
    id: {type: String, required: true},
    menuClass: {type: String, required: false},
    menuStyle: {type: String, required: false},
    as: {type: String, default: 'li'},
  },

  data() {
    return {
      open: false,
    };
  },

  methods: {
    clickOut(evt) {
      for (let target = evt.target; target && target !== this; target = target.parentNode) {
        if (this.$refs.btn.contains(target)) break;
        this.open = false;
      }
    },
  },

  watch: {
    open(v) {
      if (v) {
        document.addEventListener('click', this.clickOut);
      } else {
        document.removeEventListener('click', this.clickOut);
      }
    },
  },
};
</script>

<style scoped></style>
