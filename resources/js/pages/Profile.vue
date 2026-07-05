<script setup lang="ts">
import AppLayout from '@/js/layouts/AppLayout.vue';
import {Head, router, useForm} from '@inertiajs/vue3';
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/vue';
import VueQrcode from '@chenfengyuan/vue-qrcode';
import dayjs from 'dayjs';
import {useI18n} from 'vue-i18n';
import {inject, ref} from 'vue';
import type {route as routeFn} from 'ziggy-js';
import Swal from '@/js/lib/Swal';
import FieldDispatcher, {type Field} from '@/js/components/FieldDispatcher.vue';
import {getCookie} from '@/js/utils.ts';

interface ApiToken {
  id: number;
  name: string;
  token: string;
  created_at: string;
  last_used_at: string | null;
}

const props = defineProps<{
  user: {name: string; email: string};
  otp: {enabled: boolean; secret?: string | null; url?: string | null};
  webauthn: {credentials: {id: number; name: string; created_at: string; last_used_at: string | null}[]};
  tokens: ApiToken[];
}>();

const {t} = useI18n();

const route = inject('route') as typeof routeFn;

const makeField = (overrides: Partial<Field> & Pick<Field, 'type' | 'component' | 'name'>): Field => ({
  width: 12,
  id: overrides.name,
  classes: '',
  options: {},
  validation: [],
  label: null,
  description: null,
  repeats: false,
  repeaterWidth: 12,
  default: null,
  ...overrides,
});

// ---------- Field configs ----------
const fields = {
  name: makeField({
    type: 'InputField',
    component: 'input-field',
    name: 'name',
    label: t('Profile.name'),
    validation: ['required'],
    options: {type: 'text', autocomplete: 'name'},
  }),
  currentPassword: makeField({
    type: 'InputField',
    component: 'input-field',
    name: 'password',
    label: t('Profile.current_password'),
    validation: ['required'],
    options: {type: 'password', autocomplete: 'current-password'},
  }),
  newPassword: makeField({
    type: 'InputField',
    component: 'input-field',
    name: 'new_password',
    label: t('Profile.new_password'),
    validation: ['required'],
    options: {type: 'password', autocomplete: 'new-password'},
  }),
  newPasswordConfirmation: makeField({
    type: 'InputField',
    component: 'input-field',
    name: 'new_password_confirmation',
    label: t('Profile.confirm_new_password'),
    validation: ['required'],
    options: {type: 'password', autocomplete: 'new-password'},
  }),
  otpCode: makeField({
    type: 'InputField',
    component: 'input-field',
    name: 'code',
    label: t('Profile.enter_generated_code'),
    validation: ['required'],
    options: {
      type: 'text',
      autocomplete: 'one-time-code',
      inputmode: 'numeric',
      maxlength: 6,
      minlength: 6,
    },
  }),
  otpPassword: makeField({
    type: 'InputField',
    component: 'input-field',
    name: 'password',
    label: t('Profile.password'),
    validation: ['required'],
    options: {type: 'password', autocomplete: 'current-password'},
  }),
  webauthnName: makeField({
    type: 'InputField',
    component: 'input-field',
    name: 'name',
    label: t('Profile.security_key_name'),
    validation: ['required'],
    options: {type: 'text', placeholder: t('Profile.eg_yubikey_macbook')},
  }),
  webauthnPassword: makeField({
    type: 'InputField',
    component: 'input-field',
    name: 'password',
    label: t('Profile.current_password'),
    validation: ['required'],
    options: {type: 'password', autocomplete: 'current-password'},
  }),
  createTokenName: makeField({
    type: 'InputField',
    component: 'input-field',
    name: 'name',
    label: t('Profile.name'),
    validation: ['required'],
    options: {type: 'text'},
  }),
};

// ---------- Forms ----------
const detailsForm = useForm({_sec: 'details', name: props.user.name});
const passwordForm = useForm({_sec: 'password', password: '', new_password: '', new_password_confirmation: ''});
const otpForm = useForm({_sec: 'otp', password: '', enabled: props.otp.enabled, code: null as string | null});
const createTokenForm = useForm({_sec: 'createToken', name: '', abilities: ['*']});

// ---------- Tabs ----------
const tabs = [
  t('Profile.details'),
  t('Profile.change_password'),
  t('Profile.two_factor_authentication'),
  t('Profile.security_keys'),
  t('Profile.api_tokens'),
];

// ---------- Submitters ----------
const submitDetails = () => detailsForm.post('', {preserveScroll: true});

const submitPassword = () =>
  passwordForm.post('', {
    preserveScroll: true,
    onSuccess: () => passwordForm.reset('password', 'new_password', 'new_password_confirmation'),
  });

const submitOtp = () =>
  otpForm
    .transform((d) => ({...d, secret: props.otp.secret, url: props.otp.url}))
    .post('', {
      preserveScroll: true,
      onSuccess: () => otpForm.reset('password', 'code'),
    });

// ceremony state + helpers
const webauthnForm = useForm({name: '', password: ''});
const webauthnBusy = ref(false);
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

const registerCredential = async () => {
  webauthnError.value = null;

  if (!window.PublicKeyCredential) {
    webauthnError.value = t('Profile.webauthn_unsupported');
    return;
  }

  webauthnBusy.value = true;
  try {
    // 1. Get options from the server.
    const optRes = await fetch(route('jasmine.profile.webauthn.options'), {
      method: 'POST',
      headers: {'X-XSRF-TOKEN': getCookie('XSRF-TOKEN') ?? '', Accept: 'application/json'},
      credentials: 'same-origin',
    });
    if (!optRes.ok) throw new Error('options');
    const options = await optRes.json();

    // 2. Decode the binary fields and run the authenticator ceremony.
    options.challenge = b64urlToBuf(options.challenge);
    options.user.id = b64urlToBuf(options.user.id);
    (options.excludeCredentials ?? []).forEach((c: {id: string}) => (c.id = b64urlToBuf(c.id) as unknown as string));

    const cred = (await navigator.credentials.create({publicKey: options})) as PublicKeyCredential;
    const att = cred.response as AuthenticatorAttestationResponse;

    // 3. Re-encode into the WebAuthn JSON shape the server expects.
    const payload = {
      id: cred.id,
      rawId: bufToB64url(cred.rawId),
      type: cred.type,
      authenticatorAttachment: cred.authenticatorAttachment,
      clientExtensionResults: cred.getClientExtensionResults(),
      response: {
        clientDataJSON: bufToB64url(att.clientDataJSON),
        attestationObject: bufToB64url(att.attestationObject),
        transports: att.getTransports?.() ?? [],
      },
    };

    // 4. Post to the server via Inertia so the list + toast refresh.
    webauthnForm
      .transform(() => ({
        name: webauthnForm.name,
        password: webauthnForm.password,
        credential: payload,
      }))
      .post(route('jasmine.profile.webauthn.register'), {
        preserveScroll: true,
        onSuccess: () => webauthnForm.reset('name', 'password'),
        onError: (errors) => (webauthnError.value = errors.credential),
      });
  } catch (e: unknown) {
    console.error(e);
    // User cancelled, no authenticator, or verification failed.
    if (e instanceof DOMException && e.name === 'InvalidStateError') {
      webauthnError.value = t('Profile.security_key_already_registered');
    } else if (!(e instanceof DOMException && e.name === 'NotAllowedError')) {
      webauthnError.value = t('Profile.security_key_failed');
    }
  } finally {
    webauthnBusy.value = false;
  }
};

const deleteCredential = (c: {id: number; name: string}) => {
  Swal.fire({
    icon: 'warning',
    title: t('Profile.are_you_sure'),
    text: t('Profile.are_you_sure_you_want_to_delete', {i: c.name}),
    showCancelButton: true,
  }).then(({isConfirmed}) => {
    if (!isConfirmed) return;
    router.post('', {_sec: 'deleteWebauthn', id: c.id}, {preserveScroll: true});
  });
};

const submitCreateToken = () =>
  createTokenForm.post('', {
    preserveScroll: true,
    onSuccess: () => createTokenForm.reset('name'),
  });

const updateToken = (evt: Event, token: ApiToken) => {
  const form = evt.target as HTMLFormElement;
  const nameInput = form.elements.namedItem('name') as HTMLInputElement;
  router.post('', {_sec: 'updateToken', id: token.id, name: nameInput.value}, {preserveScroll: true});
};

const deleteToken = (token: ApiToken) => {
  Swal.fire({
    icon: 'warning',
    title: t('Profile.are_you_sure'),
    text: t('Profile.are_you_sure_you_want_to_delete', {i: token.name}),
    showCancelButton: true,
  }).then(({isConfirmed}) => {
    if (!isConfirmed) return;
    router.post('', {_sec: 'deleteToken', id: token.id}, {preserveScroll: true});
  });
};

const formatDate = (date: string | null, format = 'DD.MM.YYYY HH:mm:ss') => (date ? dayjs(date).format(format) : null);
</script>

<template>
  <Head :title="$t('Profile.profile')" />

  <AppLayout>
    <div class="max-w-4xl">
      <TabGroup>
        <!-- TAB BAR -->
        <TabList class="mb-6 flex flex-wrap gap-x-6 border-b border-gray-200 dark:border-gray-700">
          <Tab v-for="tab in tabs" :key="tab" as="template" v-slot="{selected}">
            <button
              type="button"
              class="-mb-px cursor-pointer border-b-2 px-1 py-3 text-sm font-medium transition focus:outline-none"
              :class="
                selected
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              "
              v-text="tab"
            />
          </Tab>
        </TabList>

        <TabPanels>
          <!-- DETAILS -->
          <TabPanel :unmount="false" class="rounded-lg bg-white p-6 shadow-sm focus:outline-none dark:bg-gray-800">
            <form class="space-y-3" @submit.prevent="submitDetails">
              <FieldDispatcher
                v-model="detailsForm.name"
                :field="fields.name"
                :errors="detailsForm.errors"
                path="name"
              />

              <div>
                <label for="profile_email" class="mb-1 block text-sm font-medium">
                  {{ $t('Profile.email_address') }}
                </label>
                <input
                  id="profile_email"
                  :value="user.email"
                  type="email"
                  dir="ltr"
                  disabled
                  class="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>

              <button
                v-if="detailsForm.isDirty"
                type="submit"
                :disabled="detailsForm.processing"
                class="cursor-pointer rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {{ $t('Profile.submit') }}
              </button>
            </form>
          </TabPanel>

          <!-- PASSWORD -->
          <TabPanel :unmount="false" class="rounded-lg bg-white p-6 shadow-sm focus:outline-none dark:bg-gray-800">
            <form class="space-y-3" method="post" @submit.prevent="submitPassword">
              <FieldDispatcher
                v-model="passwordForm.password"
                :field="fields.currentPassword"
                :errors="passwordForm.errors"
                path="password"
              />

              <FieldDispatcher
                v-model="passwordForm.new_password"
                :field="fields.newPassword"
                :errors="passwordForm.errors"
                path="new_password"
              />

              <FieldDispatcher
                v-model="passwordForm.new_password_confirmation"
                :field="fields.newPasswordConfirmation"
                :errors="passwordForm.errors"
                path="new_password_confirmation"
              />

              <button
                v-if="passwordForm.isDirty"
                type="submit"
                :disabled="passwordForm.processing"
                class="cursor-pointer rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {{ $t('Profile.submit') }}
              </button>
            </form>
          </TabPanel>

          <!-- OTP -->
          <TabPanel :unmount="false" class="rounded-lg bg-white p-6 shadow-sm focus:outline-none dark:bg-gray-800">
            <form class="space-y-3" @submit.prevent="submitOtp">
              <!-- Toggle switch -->
              <label class="flex cursor-pointer items-center gap-2">
                <input v-model="otpForm.enabled" type="checkbox" class="peer sr-only" />
                <span
                  class="relative h-5 w-9 rounded-full bg-gray-300 transition peer-checked:bg-blue-600 after:absolute after:start-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-4 rtl:peer-checked:after:-translate-x-4"
                />
                <span class="text-sm">
                  {{ $t('Profile.require_two_factor_authentication') }}
                </span>
              </label>

              <!-- QR -->
              <div v-if="otp.url" class="my-3">
                <p class="mb-2 text-sm">{{ $t('Profile.please_scan_qr_with_otp_app') }}</p>
                <VueQrcode :value="otp.url" :options="{width: 242}" class="mx-auto block" />

                <div v-if="!otp.enabled" class="mt-4">
                  <FieldDispatcher
                    v-model="otpForm.code"
                    :field="fields.otpCode"
                    :errors="otpForm.errors"
                    path="code"
                  />
                </div>
              </div>

              <FieldDispatcher
                v-model="otpForm.password"
                :field="fields.otpPassword"
                :errors="otpForm.errors"
                path="password"
              />

              <button
                v-if="otpForm.isDirty"
                type="submit"
                :disabled="otpForm.processing"
                class="cursor-pointer rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {{ $t('Profile.submit') }}
              </button>
            </form>
          </TabPanel>

          <!-- PASSKEYS / SECURITY KEYS -->
          <TabPanel :unmount="false" class="rounded-lg bg-white p-6 shadow-sm focus:outline-none dark:bg-gray-800">
            <ul v-if="webauthn.credentials.length" class="mb-4 space-y-2">
              <li
                v-for="c in webauthn.credentials"
                :key="c.id"
                class="flex items-center justify-between rounded-md border border-gray-200 px-3 py-2 text-sm dark:border-gray-700"
              >
                <div>
                  <div class="font-medium">{{ c.name }}</div>
                  <div class="text-xs text-gray-500">
                    {{ $t('Profile.added') }}: {{ formatDate(c.created_at, 'DD.MM.YYYY') }} &middot;
                    {{ $t('Profile.used') }}:
                    {{ formatDate(c.last_used_at) || $t('Profile.never') }}
                  </div>
                </div>
                <button
                  type="button"
                  class="cursor-pointer rounded-md bg-red-600 px-2.5 py-1 text-xs text-white transition hover:bg-red-700"
                  @click="deleteCredential(c)"
                >
                  {{ $t('Profile.delete') }}
                </button>
              </li>
            </ul>
            <p v-else class="mb-4 text-sm text-gray-500">{{ $t('Profile.no_security_keys_yet') }}</p>

            <form class="space-y-3" @submit.prevent="registerCredential">
              <FieldDispatcher
                v-model="webauthnForm.name"
                :field="fields.webauthnName"
                :errors="webauthnForm.errors"
                path="name"
              />
              <FieldDispatcher
                v-model="webauthnForm.password"
                :field="fields.webauthnPassword"
                :errors="webauthnForm.errors"
                path="password"
              />
              <p v-if="webauthnError" class="text-xs text-red-500">{{ webauthnError }}</p>
              <button
                type="submit"
                :disabled="webauthnBusy"
                class="cursor-pointer rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {{ webauthnBusy ? $t('Profile.waiting_for_key') : $t('Profile.add_security_key') }}
              </button>
            </form>
          </TabPanel>

          <!-- API TOKENS -->
          <TabPanel :unmount="false" class="rounded-lg bg-white p-6 shadow-sm focus:outline-none dark:bg-gray-800">
            <!-- Existing tokens -->
            <p v-if="!tokens.length" class="mb-4 text-sm text-gray-500">{{ $t('Profile.no_tokens_yet') }}</p>

            <form
              v-for="t in tokens"
              :key="t.id"
              class="mb-3 rounded-md border border-gray-200 p-3 dark:border-gray-700"
              @submit.prevent="updateToken($event, t)"
            >
              <div class="grid grid-cols-12 items-end gap-2">
                <div class="col-span-12 sm:col-span-3">
                  <label :for="`token_${t.id}_name`" class="mb-1 block text-sm font-medium">{{
                    $t('Profile.name')
                  }}</label>
                  <input
                    :id="`token_${t.id}_name`"
                    type="text"
                    name="name"
                    :value="t.name"
                    class="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label :for="`token_${t.id}_token`" class="mb-1 block text-sm font-medium">{{
                    $t('Profile.token')
                  }}</label>
                  <input
                    :id="`token_${t.id}_token`"
                    type="text"
                    readonly
                    :value="t.token"
                    class="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-1.5 font-mono text-sm dark:border-gray-600 dark:bg-gray-900"
                  />
                </div>
                <div class="col-span-12 flex gap-2 sm:col-span-3">
                  <button
                    type="submit"
                    class="cursor-pointer rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white transition hover:bg-blue-700"
                  >
                    {{ $t('Profile.update') }}
                  </button>
                  <button
                    type="button"
                    class="cursor-pointer rounded-md bg-red-600 px-3 py-1.5 text-sm text-white transition hover:bg-red-700"
                    @click="deleteToken(t)"
                  >
                    {{ $t('Profile.delete') }}
                  </button>
                </div>
              </div>

              <div class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 dark:text-gray-400">
                <span>
                  <strong>{{ $t('Profile.created') }}:</strong>
                  {{ formatDate(t.created_at) }}
                </span>
                <span>
                  <strong>{{ $t('Profile.used') }}:</strong>
                  {{ formatDate(t.last_used_at) || $t('Profile.never') }}
                </span>
              </div>
            </form>

            <!-- Create token -->
            <form class="mt-6 border-t border-gray-200 pt-6 dark:border-gray-700" @submit.prevent="submitCreateToken">
              <h6 class="mb-3 text-sm font-semibold">
                {{ $t('Profile.create_new_token') }}
              </h6>

              <div class="grid grid-cols-12 items-end gap-2">
                <div class="col-span-12 sm:col-span-3">
                  <FieldDispatcher
                    v-model="createTokenForm.name"
                    :field="fields.createTokenName"
                    :errors="createTokenForm.errors"
                    path="name"
                  />
                </div>

                <div class="col-span-12 sm:col-span-6">
                  <label for="create_token_token" class="mb-1 block text-sm font-medium">
                    {{ $t('Profile.token') }}
                  </label>
                  <input
                    id="create_token_token"
                    type="text"
                    disabled
                    class="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-1.5 font-mono text-sm dark:border-gray-600 dark:bg-gray-900"
                  />
                </div>

                <div class="col-span-12 sm:col-span-3">
                  <button
                    v-if="createTokenForm.isDirty"
                    type="submit"
                    :disabled="createTokenForm.processing"
                    class="cursor-pointer rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {{ $t('Profile.create') }}
                  </button>
                </div>
              </div>
            </form>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </AppLayout>
</template>
