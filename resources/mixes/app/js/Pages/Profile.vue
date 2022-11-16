<template>
  <Head :title="$t('Profile')"/>

  <Layout>
    <div class="row px-4">
      <div class="col-md-3">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="mb-2" v-text="$t('Details')"/>
            <form @submit.prevent="details_form.post('')">
              <div class="mb-3">
                <label for="profile_name" class="form-label" v-text="$t('Name')"/>
                <input type="text" class="form-control form-control-sm"
                       :class="{'is-invalid': details_form.errors.name}"
                       id="profile_name" aria-describedby="emailHelp" v-model="details_form.name">
                <div class="invalid-feedback" v-text="details_form.errors.name"/>
              </div>
              <div class="mb-3">
                <label for="profile_email" class="form-label" v-text="$t('Email address')"/>
                <input type="email" class="form-control form-control-sm" id="profile_email" aria-describedby="emailHelp"
                       :value="email" disabled>
              </div>
              <button v-if="details_form.isDirty" type="submit"
                      class="btn btn-primary btn-sm rounded-1" v-text="$t('Submit')"/>
            </form>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="mb-2" v-text="$t('Change password')"/>
            <form @submit.prevent="password_form.post('')">
              <div class="mb-3">
                <label for="profile_password" class="form-label" v-text="$t('Current password')"/>
                <input type="password" class="form-control form-control-sm"
                       :class="{'is-invalid': password_form.errors.password}"
                       id="profile_password"
                       autocomplete="current-password" v-model="password_form.password">
                <div class="invalid-feedback" v-text="password_form.errors.password"/>
              </div>
              <div class="mb-3">
                <label for="profile_new_password" class="form-label" v-text="$t('New password')"/>
                <input type="password" class="form-control form-control-sm" id="profile_new_password"
                       :class="{'is-invalid': password_form.errors.new_password}"
                       autocomplete="new-password" v-model="password_form.new_password">
                <div class="invalid-feedback" v-text="password_form.errors.new_password"/>
              </div>
              <div class="mb-3">
                <label for="profile_new_password_confirmation" class="form-label" v-text="$t('Confirm new password')"/>
                <input type="password" class="form-control form-control-sm" id="profile_new_password_confirmation"
                       :class="{'is-invalid': password_form.errors.new_password_confirmation}"
                       autocomplete="new-password" v-model="password_form.new_password_confirmation">
                <div class="invalid-feedback" v-text="password_form.errors.new_password_confirmation"/>
              </div>
              <button v-if="password_form.isDirty" type="submit"
                      class="btn btn-primary btn-sm rounded-1" v-text="$t('Submit')"/>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="mb-2" v-text="$t('Two factor authentication')"/>
            <form
                @submit.prevent="otp_form.transform(d => ({...d,secret: otp.secret, url:otp.url})).post('')">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="require_mfa"
                       v-model="otp_form.enabled">
                <label class="form-check-label" for="require_mfa"
                       v-text="$t('Require Two factor authentication')"/>
              </div>

              <div v-if="otp.url" class="my-3">
                <p v-text="$t('Please scan the QR code with your OTP app')"/>
                <vue-qrcode class="d-block mx-auto" :value="otp.url" :options="{width:242}"/>

                <div class="my-4" v-if="!otp.enabled">
                  <label for="mfa_code" class="form-label" v-text="$t('Enter generated code')"/>
                  <input type="text" inputmode="numeric" class="form-control form-control-sm text-center"
                         :class="{'is-invalid': otp_form.errors.code}"
                         id="mfa_code" minlength="6" maxlength="6"
                         autocomplete="current-password" v-model="otp_form.code">
                  <div class="invalid-feedback" v-text="otp_form.errors.code"/>
                </div>
              </div>

              <div class="my-4">
                <label for="mfa_profile_password" class="form-label" v-text="$t('Password')"/>
                <input type="password" class="form-control form-control-sm"
                       :class="{'is-invalid': otp_form.errors.password}"
                       id="mfa_profile_password"
                       autocomplete="current-password" v-model="otp_form.password">
                <div class="invalid-feedback" v-text="otp_form.errors.password"/>
              </div>


              <div class="mt-3">
                <button v-if="otp_form.isDirty" type="submit"
                        class="btn btn-primary btn-sm rounded-1" v-text="$t('Submit')"/>
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

import Layout from '../Shared/Layout';

export default {
  name: 'Profile',
  components: {Layout, VueQrcode},
  props: {
    name: {type: String, required: true},
    email: {type: String, required: true},
    otp: {type: Object, required: true},
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
    };
  },

  methods: {
    otpSub(v) {
      debugger;
    },
  },
};
</script>

<style scoped>

</style>
