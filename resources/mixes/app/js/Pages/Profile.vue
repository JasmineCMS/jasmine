<template>
  <Head :title="$t('Profile')" />

  <Layout>
    <div class="row px-4">
      <div class="col-md-3">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="mb-2" v-text="$t('Details')" />
            <form @submit.prevent="details_form.post('')">
              <div class="mb-3">
                <label for="profile_name" class="form-label" v-text="$t('Name')" />
                <input
                  type="text"
                  class="form-control form-control-sm"
                  :class="{'is-invalid': details_form.errors.name}"
                  id="profile_name"
                  aria-describedby="emailHelp"
                  v-model="details_form.name" />
                <div class="invalid-feedback" v-text="details_form.errors.name" />
              </div>
              <div class="mb-3">
                <label for="profile_email" class="form-label" v-text="$t('Email address')" />
                <input
                  type="email"
                  class="form-control form-control-sm"
                  id="profile_email"
                  aria-describedby="emailHelp"
                  :value="email"
                  disabled />
              </div>
              <button
                v-if="details_form.isDirty"
                type="submit"
                class="btn btn-primary btn-sm rounded-1"
                v-text="$t('Submit')" />
            </form>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="mb-2" v-text="$t('Change password')" />
            <form @submit.prevent="password_form.post('')">
              <div class="mb-3">
                <label for="profile_password" class="form-label" v-text="$t('Current password')" />
                <input
                  type="password"
                  class="form-control form-control-sm"
                  :class="{'is-invalid': password_form.errors.password}"
                  id="profile_password"
                  autocomplete="current-password"
                  v-model="password_form.password" />
                <div class="invalid-feedback" v-text="password_form.errors.password" />
              </div>
              <div class="mb-3">
                <label for="profile_new_password" class="form-label" v-text="$t('New password')" />
                <input
                  type="password"
                  class="form-control form-control-sm"
                  id="profile_new_password"
                  :class="{'is-invalid': password_form.errors.new_password}"
                  autocomplete="new-password"
                  v-model="password_form.new_password" />
                <div class="invalid-feedback" v-text="password_form.errors.new_password" />
              </div>
              <div class="mb-3">
                <label for="profile_new_password_confirmation" class="form-label" v-text="$t('Confirm new password')" />
                <input
                  type="password"
                  class="form-control form-control-sm"
                  id="profile_new_password_confirmation"
                  :class="{'is-invalid': password_form.errors.new_password_confirmation}"
                  autocomplete="new-password"
                  v-model="password_form.new_password_confirmation" />
                <div class="invalid-feedback" v-text="password_form.errors.new_password_confirmation" />
              </div>
              <button
                v-if="password_form.isDirty"
                type="submit"
                class="btn btn-primary btn-sm rounded-1"
                v-text="$t('Submit')" />
            </form>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="mb-2" v-text="$t('Two factor authentication')" />
            <form @submit.prevent="otp_form.transform(d => ({...d, secret: otp.secret, url: otp.url})).post('')">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="require_mfa"
                  v-model="otp_form.enabled" />
                <label class="form-check-label" for="require_mfa" v-text="$t('Require Two factor authentication')" />
              </div>

              <div v-if="otp.url" class="my-3">
                <p v-text="$t('Please scan the QR code with your OTP app')" />
                <vue-qrcode class="d-block mx-auto" :value="otp.url" :options="{width: 242}" />

                <div class="my-4" v-if="!otp.enabled">
                  <label for="mfa_code" class="form-label" v-text="$t('Enter generated code')" />
                  <input
                    type="text"
                    inputmode="numeric"
                    class="form-control form-control-sm text-center"
                    :class="{'is-invalid': otp_form.errors.code}"
                    id="mfa_code"
                    minlength="6"
                    maxlength="6"
                    autocomplete="current-password"
                    v-model="otp_form.code" />
                  <div class="invalid-feedback" v-text="otp_form.errors.code" />
                </div>
              </div>

              <div class="my-4">
                <label for="mfa_profile_password" class="form-label" v-text="$t('Password')" />
                <input
                  type="password"
                  class="form-control form-control-sm"
                  :class="{'is-invalid': otp_form.errors.password}"
                  id="mfa_profile_password"
                  autocomplete="current-password"
                  v-model="otp_form.password" />
                <div class="invalid-feedback" v-text="otp_form.errors.password" />
              </div>

              <div class="mt-3">
                <button
                  v-if="otp_form.isDirty"
                  type="submit"
                  class="btn btn-primary btn-sm rounded-1"
                  v-text="$t('Submit')" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="card">
          <div class="card-body">
            <h5 class="mb-2" v-text="$t('API Tokens')" />

            <div class="row">
              <div class="col-md-3">
                <p class="form-label" v-text="$t('Name')" />
              </div>
              <div class="col-md-5">
                <p class="form-label" v-text="$t('Token')" />
              </div>
            </div>
            <form v-for="t in tokens" :key="t.id" @submit.prevent="updateToken($event, t)" class="row mb-3">
              <div class="col-md-2">
                <label :for="'token_' + t.id + '_name'" class="sr-only" v-text="$t('Name')" />
                <input
                  type="text"
                  :id="'token_' + t.id + '_name'"
                  name="name"
                  :value="t.name"
                  class="form-control form-control-sm" />
              </div>
              <div class="col-md-4">
                <label :for="'token_' + t.id + '_token'" class="sr-only" v-text="$t('Token')" />
                <input
                  type="text"
                  readonly
                  :id="'token_' + t.id + '_token'"
                  name="token"
                  :value="t.token"
                  class="form-control form-control-sm font-monospace"
                  style="background: #e9ecef" />
              </div>
              <div class="col-md-6">
                <div class="d-flex">
                  <button type="submit" class="btn btn-primary btn-sm rounded-1" v-text="$t('Update')" />
                  <div class="mx-1" />
                  <button
                    type="button"
                    @click="deleteToken(t)"
                    v-text="$t('Delete')"
                    class="btn btn-danger btn-sm rounded-1" />
                  <div class="mx-2" />
                  <div class="d-flex">
                    <small><strong>Created</strong>: {{ formatDate(t.created_at) }}</small>
                    <div class="mx-2" />
                    <small><strong>Used</strong>: {{ formatDate(t.last_used_at) || 'Never' }}</small>
                  </div>
                </div>
              </div>
            </form>

            <form
              @submit.prevent="create_token_form.post('', {onSuccess: () => (create_token_form.name = '')})"
              class="mt-5 row">
              <h6 v-text="$t('Create new token')" />
              <div class="col-md-3">
                <label for="create_token_name" class="form-label" v-text="$t('Name')" />
                <input
                  type="text"
                  class="form-control form-control-sm"
                  :class="{'is-invalid': create_token_form.errors.name}"
                  id="create_token_name"
                  aria-describedby="createTokenNameHelp"
                  v-model="create_token_form.name" />
                <div
                  v-if="create_token_form.errors.name"
                  v-text="create_token_form.errors.name"
                  id="createTokenNameHelp"
                  class="invalid-feedback" />
              </div>
              <div class="col-md-6">
                <label for="create_token_token" class="form-label" v-text="$t('Token')" />
                <input type="text" disabled class="form-control form-control-sm" id="create_token_token" />
              </div>
              <div class="col-md-2">
                <div class="form-label">&nbsp;</div>
                <button
                  v-if="create_token_form.isDirty"
                  type="submit"
                  class="btn btn-primary btn-sm rounded-1"
                  v-text="$t('Create')" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode';
import dayjs from 'dayjs';

export default {
  name: 'Profile',
  components: {VueQrcode},
  props: {
    name: {type: String, required: true},
    email: {type: String, required: true},
    otp: {type: Object, required: true},
    tokens: {type: Array, required: true},
  },

  data() {
    return {
      details_form: this.$inertia.form({
        _sec: 'details',
        name: this.name,
      }),
      password_form: this.$inertia.form({
        _sec: 'password',
        password: '',
        new_password: '',
        new_password_confirmation: '',
      }),

      otp_form: this.$inertia.form({
        _sec: 'otp',
        password: '',
        enabled: this.otp.enabled,
        code: null,
      }),

      create_token_form: this.$inertia.form({
        _sec: 'createToken',
        name: null,
        abilities: ['*'], // TODO
      }),
    };
  },

  methods: {
    updateToken(evt, token) {
      this.$inertia
        .form({
          _sec: 'updateToken',
          id: token.id,
          name: evt.target.name.value,
          //abilities: ['*'], // TODO
        })
        .post('');
    },

    deleteToken(token) {
      window.Swal.fire({
        icon: 'warning',
        title: this.$t('Are you sure'),
        text: this.$t('Are you sure you want to delete') + ' "' + token.name + '"',
        showCancelButton: true,
      }).then(({isConfirmed}) => {
        if (isConfirmed)
          this.$inertia
            .form({
              _sec: 'deleteToken',
              id: token.id,
            })
            .post('');
      });
    },

    formatDate(date, format = 'DD.MM.YYYY HH:mm:ss') {
      return date ? dayjs(date).format(format) : null;
    },
  },
};
</script>

<style scoped></style>
