<template>
  <file-manager ref="fm" :settings="settings"/>
</template>

<script>

export default {
  name: 'FileManagerWrapper',
  props: {
    path: {type: String, default: ''},
  },
  computed: {
    settings() {
      const token = document.head.querySelector('meta[name="csrf-token"]');
      return {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-TOKEN': token.content,
        },
        baseUrl: '/file-manager/',
      };
    },
  },
};
</script>

<style scoped>

</style>
