<template>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle h-100" :class="{show: open}" :id="id" href="#" role="button" ref="btn"
       data-bs-toggle="dropdown" @click.prevent="open = !open" @keydown.esc="open = false"
       :aria-expanded="open ? 'true' : 'false'">
      <slot/>
    </a>
    <ul class="dropdown-menu" :class="[{show: open}, menuClass]" :aria-labelledby="id" data-bs-popper>
      <slot name="menu"/>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'NavItemDropdown',

  props: {
    id: {
      required: true,
      type: String,
    },
    menuClass: {
      required: false,
      type: String,
    },
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

<style scoped>

</style>
