<script setup lang="ts">
import {Form, Link} from '@inertiajs/vue3';
import AuthLayout from '@/js/layouts/AuthLayout.vue';
</script>

<template>
  <AuthLayout :title="$t('auth.reset_password')">
    <Form method="POST" #default="{processing, errors}" class="space-y-5">
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
            required
            autocomplete="email"
            placeholder="you@example.com"
            class="w-full bg-white/10 border text-white placeholder-white/30 rounded-xl ps-10 pe-4 py-3 text-sm outline-none focus:border-white/60 focus:bg-white/15 transition-all duration-200"
            :class="[errors.email ? 'border-red-400/60' : 'border-white/20']"
          />
        </div>
        <p v-if="errors.email" class="mt-1.5 text-xs text-red-300">{{ errors.email }}</p>
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
        <span v-if="!processing" v-text="$t('auth.send')" />
        <span v-else class="flex items-center justify-center gap-2 animate-pulse">
          <i class="fas fa-spinner animate-spin" />
          {{ $t('auth.processing') }} . . .
        </span>
      </button>
    </Form>
  </AuthLayout>
</template>
