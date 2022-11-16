<template>
  <Head :title="$t('File Manager')"/>

  <Layout>
    <div class="h-100 d-flex flex-column flex-grow-1">
      <div class="flex-grow-1">
        <file-manager :settings="settings"/>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../Shared/Layout';

export default {
  name: 'FileManagerPage',
  components: {Layout},

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
