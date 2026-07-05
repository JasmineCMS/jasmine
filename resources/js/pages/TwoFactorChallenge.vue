<script setup lang="ts">
import {inject, ref} from 'vue';
import {router, useForm} from '@inertiajs/vue3';
import {useI18n} from 'vue-i18n';
import AuthLayout from '@/js/layouts/AuthLayout.vue';
import type {route as routeFn} from 'ziggy-js';

const props = defineProps<{
  hasOtp: boolean;
  hasWebauthn: boolean;
}>();

const route = inject('route') as typeof routeFn;

const {t} = useI18n();

// ---- OTP ----
const otpForm = useForm({code: ''});
const submitOtp = () => otpForm.post(route('jasmine.2fa.otp'));

// ---- WebAuthn ----
const busy = ref(false);
const webauthnError = ref<string | null>(null);

const b64urlToBuf = (s: string): ArrayBuffer => {
  const pad = '='.repeat((4 - (s.length % 4)) % 4);
  const bin = atob((s + pad).replace(/-/g, '+').replace(/_/g, '/'));
  const buf = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
  return buf.buffer;
};
const bufToB64url = (b: ArrayBuffer): string => {
  let bin = '';
  for (const byte of new Uint8Array(b)) bin += String.fromCharCode(byte);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};
const xsrf = (): string => decodeURIComponent(document.cookie.match(/XSRF-TOKEN=([^;]+)/)?.[1] ?? '');

const useSecurityKey = async () => {
  webauthnError.value = null;

  if (!window.PublicKeyCredential) {
    webauthnError.value = t('auth.webauthn_unsupported');
    return;
  }

  busy.value = true;
  try {
    // 1. Assertion options from the server.
    const res = await fetch(route('jasmine.2fa.webauthn.options'), {
      method: 'POST',
      headers: {'X-XSRF-TOKEN': xsrf(), Accept: 'application/json'},
      credentials: 'same-origin',
    });
    if (!res.ok) throw new Error('options');
    const options = await res.json();

    // 2. Decode binary fields, run the authenticator.
    options.challenge = b64urlToBuf(options.challenge);
    (options.allowCredentials ?? []).forEach((c: {id: string}) => (c.id = b64urlToBuf(c.id) as unknown as string));

    const cred = (await navigator.credentials.get({publicKey: options})) as PublicKeyCredential;
    const asr = cred.response as AuthenticatorAssertionResponse;

    // 3. Re-encode into the WebAuthn JSON shape the server expects.
    const payload = {
      id: cred.id,
      rawId: bufToB64url(cred.rawId),
      type: cred.type,
      authenticatorAttachment: cred.authenticatorAttachment,
      clientExtensionResults: cred.getClientExtensionResults(),
      response: {
        clientDataJSON: bufToB64url(asr.clientDataJSON),
        authenticatorData: bufToB64url(asr.authenticatorData),
        signature: bufToB64url(asr.signature),
        userHandle: asr.userHandle ? bufToB64url(asr.userHandle) : null,
      },
    };

    // 4. Submit via Inertia; the controller redirects on success.
    router.post(
      route('jasmine.2fa.webauthn'),
      {credential: payload as any},
      {
        onError: () => (webauthnError.value = t('auth.security_key_failed')),
      },
    );
  } catch (e: unknown) {
    // NotAllowedError = user cancelled / timed out; stay quiet on that one.
    if (!(e instanceof DOMException && e.name === 'NotAllowedError')) {
      webauthnError.value = t('auth.security_key_failed');
    }
  } finally {
    busy.value = false;
  }
};
</script>

<template>
  <AuthLayout :title="$t('auth.two_factor_title')">
    <p class="mb-6 text-sm text-white/70">{{ $t('auth.two_factor_subtitle') }}</p>

    <!-- WebAuthn first: it's the lowest-friction factor when present -->
    <div v-if="props.hasWebauthn" class="mb-5">
      <button
        type="button"
        :disabled="busy"
        class="w-full py-3 px-6 rounded-xl font-bold tracking-widest uppercase text-sm bg-white/50 text-fuchsia-600 hover:bg-white/90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-black/20 cursor-pointer"
        @click="useSecurityKey"
      >
        <span v-if="!busy" class="flex items-center justify-center gap-2">
          <i class="fas fa-key" role="none" />
          {{ $t('auth.use_security_key') }}
        </span>
        <span v-else class="flex items-center justify-center gap-2 animate-pulse">
          <i class="fas fa-spinner animate-spin" />
          {{ $t('auth.waiting_for_key') }} . . .
        </span>
      </button>
      <p v-if="webauthnError" class="mt-1.5 text-xs text-red-300">{{ webauthnError }}</p>
    </div>

    <div
      v-if="props.hasOtp && props.hasWebauthn"
      class="my-5 flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-white/60"
    >
      <span class="h-px flex-1 bg-white/20"></span>
      {{ $t('auth.or') }}
      <span class="h-px flex-1 bg-white/20"></span>
    </div>

    <!-- OTP -->
    <form v-if="props.hasOtp" class="space-y-5" @submit.prevent="submitOtp">
      <div class="group">
        <label
          for="code"
          class="block text-white/80 text-xs font-semibold tracking-widest uppercase mb-2"
          v-text="$t('auth.authentication_code')"
        />
        <div class="relative" dir="ltr">
          <span class="absolute inset-s-3 top-1/2 -translate-y-1/2 text-white/60" role="none">
            <i class="fas fa-shield-halved" />
          </span>
          <input
            v-model="otpForm.code"
            type="text"
            name="code"
            id="code"
            inputmode="numeric"
            autocomplete="one-time-code"
            maxlength="6"
            autofocus
            placeholder="••••••"
            class="w-full bg-white/10 border text-white placeholder-white/30 rounded-xl ps-10 pe-10 py-3 text-center text-lg tracking-[0.4em] outline-none focus:border-white/60 focus:bg-white/15 transition-all duration-200"
            :class="[otpForm.errors.code ? 'border-red-400/60' : 'border-white/20']"
          />
        </div>
        <p v-if="otpForm.errors.code" class="mt-1.5 text-xs text-red-300">{{ otpForm.errors.code }}</p>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="otpForm.processing"
        class="w-full mt-2 py-3 px-6 rounded-xl font-bold tracking-widest uppercase text-sm bg-white/50 text-fuchsia-600 hover:bg-white/90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-black/20 cursor-pointer"
      >
        <span v-if="!otpForm.processing" v-text="$t('auth.verify')" />
        <span v-else class="flex items-center justify-center gap-2 animate-pulse">
          <i class="fas fa-spinner animate-spin" />
          {{ $t('auth.processing') }} . . .
        </span>
      </button>
    </form>

    <form class="mt-6 flex justify-center" @submit.prevent="router.post(route('jasmine.logout'))">
      <button
        type="submit"
        class="text-sm text-white/70 hover:text-white/90 transition-colors underline underline-offset-2 cursor-pointer"
      >
        {{ $t('auth.cancel_and_sign_out') }}
      </button>
    </form>
  </AuthLayout>
</template>
