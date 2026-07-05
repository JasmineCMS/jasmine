<script setup lang="ts">
import {Link, usePage} from '@inertiajs/vue3';
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue';
import {computed, inject} from 'vue';
import {route as routeFn} from 'ziggy-js';
import {useLabel} from '@/js/composeables/useLabel.ts';

type IsRoute = string | {r: string; p?: Record<string, string | number | boolean>} | null;

interface SideBarChild {
  title: string;
  href: string;
  target?: string;
  icon?: string;
  class?: string;
  'is-route'?: IsRoute;
}

interface SideBarLeaf {
  title: string;
  href: string;
  target?: string;
  icon?: string;
  class?: string;
  'is-route'?: IsRoute;
}

interface SideBarParent {
  title: string;
  icon?: string;
  class?: string;
  opened?: boolean;
  children: Record<string, SideBarChild>;
}

type SideBarItem = SideBarLeaf | SideBarParent;
export type SideBarItems = Record<string, SideBarItem>;

withDefaults(defineProps<{collapsed?: boolean}>(), {collapsed: false});

const emit = defineEmits<{navigate: []}>();

const route = inject('route') as typeof routeFn;

const page = usePage();

const sbMenu = computed(() => (usePage().props._sb_menu || {}) as SideBarItems);

const isActive = (ir: IsRoute | undefined): boolean => {
  // Touch page.url so the helper re-evaluates on every Inertia navigation,
  // even if this component instance persists across navigations.
  void page.url;
  if (!ir) return false;
  const name = typeof ir === 'string' ? ir : ir.r;
  const params = typeof ir === 'string' ? undefined : ir.p;
  try {
    return route().current(name, params);
  } catch {
    return false;
  }
};

const isParent = (item: SideBarItem): item is SideBarParent =>
  'children' in item && !!item.children && Object.keys(item.children).length > 0;

const isItemActive = (item: SideBarItem): boolean => {
  if (isParent(item)) return Object.values(item.children).some((c) => isActive(c['is-route']));
  return isActive(item['is-route']);
};

const iconClasses = (icon: string | undefined): string | string[] | null => {
  if (!icon) return null;
  if (icon.indexOf('fa-') > -1) return ['fas', icon];
  if (icon.indexOf('bi-') > -1) return ['bi', icon];
  return icon;
};

const onNavigate = () => emit('navigate');

const parseLabel = useLabel();
</script>

<template>
  <nav class="flex-1 overflow-y-auto py-4 px-2 space-y-0.5">
    <template v-for="(i, id) in sbMenu" :key="id">
      <!-- Parent (has children) -->
      <Disclosure v-if="isParent(i)" v-slot="{open}" as="div" :default-open="i.opened || isItemActive(i)">
        <DisclosureButton
          :title="collapsed ? parseLabel(i.title, 'menu') : ''"
          :class="[
            'relative w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer',
            collapsed ? 'justify-center' : '',
            isItemActive(i) ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white',
            i.class || '',
          ]"
        >
          <span
            v-if="isItemActive(i)"
            class="absolute inset-s-0 top-1/2 -translate-y-1/2 h-5 w-0.75 rounded-e bg-brand-400"
            aria-hidden="true"
          />
          <i
            v-if="i.icon"
            :class="[
              iconClasses(i.icon),
              'text-lg inline-block w-5 text-center shrink-0',
              isItemActive(i) ? 'text-brand-400' : '',
            ]"
          />
          <span v-if="!collapsed" class="flex-1 text-start" v-text="parseLabel(i.title, 'menu')" />
          <svg
            v-if="!collapsed"
            class="w-4 h-4 text-white/40 transition-transform duration-200 rtl:-scale-x-100"
            :class="open ? 'rotate-90' : ''"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </DisclosureButton>

        <transition
          enter-active-class="transition-all duration-200 ease-out overflow-hidden"
          leave-active-class="transition-all duration-150 ease-in overflow-hidden"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-96 opacity-100"
          leave-from-class="max-h-96 opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <DisclosurePanel v-if="!collapsed" class="mt-0.5 ms-4 ps-4 border-s border-white/10 space-y-0.5">
            <template v-for="(child, cid) in i.children" :key="cid">
              <component
                :is="child.target === '_blank' ? 'a' : Link"
                :href="child.href"
                :target="child.target || '_self'"
                :rel="child.target === '_blank' ? 'noopener noreferrer' : null"
                @click="onNavigate"
                :class="[
                  'flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors',
                  isActive(child['is-route'])
                    ? 'bg-white/10 text-white font-medium'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white',
                  child.class || '',
                ]"
              >
                <i
                  v-if="child.icon"
                  :class="[iconClasses(child.icon), 'text-base inline-block w-4 text-center shrink-0']"
                />
                <span v-text="parseLabel(child.title, 'menu')" />
              </component>
            </template>
          </DisclosurePanel>
        </transition>
      </Disclosure>

      <!-- Leaf -->
      <component
        v-else
        :is="i.target === '_blank' ? 'a' : Link"
        :href="i.href"
        :target="i.target || '_self'"
        :rel="i.target === '_blank' ? 'noopener noreferrer' : null"
        :title="collapsed ? parseLabel(i.title, 'menu') : ''"
        @click="onNavigate"
        :class="[
          'relative flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
          collapsed ? 'justify-center' : '',
          isActive(i['is-route']) ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white',
          i.class || '',
        ]"
      >
        <span
          v-if="isActive(i['is-route'])"
          class="absolute inset-s-0 top-1/2 -translate-y-1/2 h-5 w-0.75 rounded-e bg-brand-400"
          aria-hidden="true"
        />
        <i
          v-if="i.icon"
          :class="[
            iconClasses(i.icon),
            'text-lg inline-block w-5 text-center shrink-0',
            isActive(i['is-route']) ? 'text-brand-400' : '',
          ]"
        />
        <span v-if="!collapsed" class="flex-1 text-start" v-text="parseLabel(i.title, 'menu')" />
      </component>
    </template>
  </nav>
</template>
