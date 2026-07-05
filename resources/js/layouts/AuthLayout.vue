<script setup lang="ts">
import MascotSvg from '@/svg/mascot.svg';
import LocaleLinks from '@/js/components/LocaleLinks.vue';
import {Head, usePage} from '@inertiajs/vue3';
import {computed} from 'vue';
import {useFlashSwal} from '@/js/composeables/useFlashSwal.ts';

defineProps<{title?: string}>();

const ssos = computed(() => usePage().props._ssos);

useFlashSwal();
</script>

<template>
  <Head :title="title" />

  <div class="live-bg min-h-screen flex items-center justify-center px-4">
    <div class="relative w-full max-w-md">
      <MascotSvg class="relative z-10 mx-auto w-36 -mb-5" />
      <div class="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl px-8 pt-16 pb-8">
        <slot name="title">
          <h1
            class="text-center text-white text-2xl font-bold tracking-[0.2em] uppercase mb-8 opacity-90"
            v-text="title"
          />
        </slot>
        <slot />

        <template v-if="ssos && Object.keys(ssos).length">
          <div class="my-6 flex items-center gap-3">
            <div class="h-px flex-1 bg-white/20" />
            <span class="text-xs uppercase tracking-widest text-white/60">
              {{ $t('auth.or_continue_with') }}
            </span>
            <div class="h-px flex-1 bg-white/20" />
          </div>

          <div class="flex items-center justify-center gap-3">
            <a
              v-for="sso in ssos"
              :key="sso.name"
              :title="sso.name"
              :href="route('jasmine.sso.oauth2.attempt', {provider: sso.name})"
              class="flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all hover:scale-105 active:scale-95"
            >
              <img :src="sso.icon" :alt="sso.name" class="h-full w-auto p-1 object-contain" />
            </a>
          </div>
        </template>

        <div class="mt-6 flex items-center justify-center divide-x divide-white/20 text-sm/none text-white/60">
          <LocaleLinks class="hover:text-white/80 transition-colors px-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.live-bg {
  background: linear-gradient(45deg, #da46ae, #4e90fe, #da46ae, #4e90fe);
  background-size: 400% 400%;
  animation: liveBg 15s ease-in-out infinite;
}

@keyframes liveBg {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

/* WebKit (Chrome, Safari, Edge) Autofill Fix */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  /* Delay the background color applying for 5000 seconds */
  transition:
    background-color 5000s ease-in-out 0s,
    color 5000s ease-in-out 0s !important;
  transition-delay: 5000s;
  -webkit-text-fill-color: #fff !important;
  caret-color: #fff;
}

/* Firefox */
input:autofill {
  /* Firefox typically respects transparent backgrounds better, but we enforce it here */
  filter: none;
  background: transparent !important;
  color: #fff !important;
}
</style>
