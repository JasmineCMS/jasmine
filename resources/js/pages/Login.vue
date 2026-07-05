<script setup lang="ts">
import {ref} from 'vue';
import {Form, Link} from '@inertiajs/vue3';
import AuthLayout from '@/js/layouts/AuthLayout.vue';

const showPassword = ref(false);
</script>

<template>
  <AuthLayout :title="$t('auth.login')">
    <Form method="POST" #default="{processing, errors}" class="space-y-5">
      <!-- Email -->
      <div class="group">
        <label
          for="email"
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
            id="email"
            required
            autocomplete="email"
            placeholder="you@example.com"
            class="w-full bg-white/10 border text-white placeholder-white/30 rounded-xl ps-10 pe-4 py-3 text-sm outline-none focus:border-white/60 focus:bg-white/15 transition-all duration-200"
            :class="[errors.email ? 'border-red-400/60' : 'border-white/20']"
          />
        </div>
        <p v-if="errors.email" class="mt-1.5 text-xs text-red-300">{{ errors.email }}</p>
      </div>

      <!-- Password -->
      <div class="group">
        <label
          for="password"
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
            id="password"
            required
            autocomplete="current-password"
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

      <!-- Remember me -->
      <div class="flex items-center justify-between">
        <label class="flex items-center gap-2.5 cursor-pointer group/check">
          <span class="relative">
            <input type="checkbox" name="remember" class="sr-only peer" />
            <span
              class="w-5 h-5 group rounded-md border border-white/30 bg-white/10 peer-checked:bg-fuchsia-500 peer-checked:border-fuchsia-400 transition-all duration-200 flex items-center justify-center"
            >
              <i class="text-xs fas fa-check text-white opacity-0 group-peer-checked:opacity-100" />
            </span>
          </span>
          <span
            class="text-white/80 text-sm group-hover/check:text-white/80 transition-colors"
            v-text="$t('auth.remember_me')"
          />
        </label>

        <Link
          :href="route('jasmine.password.forgot')"
          class="text-sm text-white/70 hover:text-white/90 transition-colors underline underline-offset-2"
          v-text="$t('auth.forgot_password')"
        />
      </div>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="processing"
        class="w-full mt-2 py-3 px-6 rounded-xl font-bold tracking-widest uppercase text-sm bg-white/50 text-fuchsia-600 hover:bg-white/90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-black/20 cursor-pointer"
      >
        <span v-if="!processing" v-text="$t('auth.login')" />
        <span v-else class="flex items-center justify-center gap-2 animate-pulse">
          <i class="fas fa-spinner animate-spin" />
          {{ $t('auth.signing_in') }} . . .
        </span>
      </button>
    </Form>
  </AuthLayout>
</template>
