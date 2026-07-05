<script setup lang="ts">
import {ref} from 'vue';
import {Form, Link} from '@inertiajs/vue3';
import AuthLayout from '@/js/layouts/AuthLayout.vue';

defineProps<{
  email: string;
  token: string;
}>();

const showPassword = ref(false);
const showConfirmPassword = ref(false);
</script>

<template>
  <AuthLayout :title="$t('auth.reset_password')">
    <Form method="POST" #default="{processing, errors}" class="space-y-5">
      <input type="hidden" name="token" :value="token" />

      <!-- Email -->
      <div class="group">
        <label
          class="block text-white/80 text-xs font-semibold tracking-widest uppercase mb-2"
          v-text="$t('auth.email')"
        />
        <div class="relative" dir="ltr">
          <span class="absolute inset-s-3 top-1/2 -translate-y-1/2 text-white/60" role="none">
            <i class="fas fa-at" />
          </span>
          <input
            type="email"
            name="email"
            readonly
            class="w-full bg-white/10 border text-white placeholder-white/30 rounded-xl ps-10 pe-4 py-3 text-sm outline-none focus:border-white/60 focus:bg-white/15 transition-all duration-200 border-white/20"
            :value="email"
          />
        </div>
        <p v-if="errors.email" class="mt-1.5 text-xs text-red-300">{{ errors.email }}</p>
      </div>

      <!-- Password -->
      <div class="group">
        <label
          class="block text-white/80 text-xs font-semibold tracking-widest uppercase mb-2"
          v-text="$t('auth.password')"
        />
        <div class="relative" dir="ltr">
          <span class="absolute inset-s-3 top-1/2 -translate-y-1/2 text-white/60">
            <i class="fas fa-lock" />
          </span>
          <input
            :type="showPassword ? 'text' : 'password'"
            name="password"
            required
            autocomplete="new-password"
            placeholder="••••••••"
            class="w-full bg-white/10 border text-white placeholder-white/30 rounded-xl ps-10 pe-10 py-3 text-sm outline-none focus:border-white/60 focus:bg-white/15 transition-all duration-200"
            :class="[errors.password ? 'border-red-400/60' : 'border-white/20']"
          />
          <button
            type="button"
            @click.prevent="showPassword = !showPassword"
            class="absolute inset-e-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/70 transition-colors cursor-pointer"
            :title="showPassword ? $t('auth.hide_password') : $t('auth.show_password')"
          >
            <i class="far" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'" role="none" />
          </button>
        </div>
        <p v-if="errors.password" class="mt-1.5 text-xs text-red-300">{{ errors.password }}</p>
      </div>

      <!-- Confirm password -->
      <div class="group">
        <label
          class="block text-white/80 text-xs font-semibold tracking-widest uppercase mb-2"
          v-text="$t('auth.confirm_password')"
        />
        <div class="relative" dir="ltr">
          <span class="absolute inset-s-3 top-1/2 -translate-y-1/2 text-white/60">
            <i class="fas fa-lock" />
          </span>
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            name="password_confirmation"
            required
            autocomplete="new-password"
            placeholder="••••••••"
            class="w-full bg-white/10 border text-white placeholder-white/30 rounded-xl ps-10 pe-10 py-3 text-sm outline-none focus:border-white/60 focus:bg-white/15 transition-all duration-200 border-white/20"
          />
          <button
            type="button"
            @click.prevent="showConfirmPassword = !showConfirmPassword"
            class="absolute inset-e-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/70 transition-colors cursor-pointer"
            :title="showConfirmPassword ? $t('auth.hide_password') : $t('auth.show_password')"
          >
            <i class="far" :class="showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'" role="none" />
          </button>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div />
        <Link
          :href="route('jasmine.login')"
          class="text-sm text-white/70 hover:text-white/90 transition-colors underline underline-offset-2"
          v-text="$t('auth.back_to_login')"
        />
      </div>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="processing"
        class="w-full mt-2 py-3 px-6 rounded-xl font-bold tracking-widest uppercase text-sm bg-white/50 text-fuchsia-600 hover:bg-white/90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-black/20 cursor-pointer"
      >
        <span v-if="!processing" v-text="$t('auth.reset_password')" />
        <span v-else class="flex items-center justify-center gap-2 animate-pulse">
          <i class="fas fa-spinner animate-spin" />
          {{ $t('auth.processing') }} . . .
        </span>
      </button>
    </Form>
  </AuthLayout>
</template>
