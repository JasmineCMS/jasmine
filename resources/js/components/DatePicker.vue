<script setup lang="ts">
import {VueDatePicker, type ModelValue} from '@vuepic/vue-datepicker';
import {useI18n} from 'vue-i18n';

type DatePickerProps = InstanceType<typeof VueDatePicker>['$props'];

export interface ProxyProps extends /* @vue-ignore */ Omit<DatePickerProps, 'modelValue' | 'onUpdate:modelValue'> {}

defineProps<ProxyProps>();
defineOptions({inheritAttrs: false});

const model = defineModel<ModelValue>();

const {t} = useI18n();

const buildDefaults = () => {
  const today = new Date();
  return {
    range: true,
    multiCalendars: true,
    timeConfig: {enableTimePicker: false},
    modelType: 'yyyy-MM-dd',
    weekStart: 0, // TODO
    presetDates: [
      {label: t('DatePicker.today'), value: [today, today]},
      {
        label: t('DatePicker.this_month'),
        value: [
          new Date(today.getFullYear(), today.getMonth(), 1),
          new Date(today.getFullYear(), today.getMonth() + 1, 0),
        ],
      },
      {
        label: t('DatePicker.last_month'),
        value: [
          new Date(today.getFullYear(), today.getMonth() - 1, 1),
          new Date(today.getFullYear(), today.getMonth(), 0),
        ],
      },
      {label: t('DatePicker.last_30_days'), value: [new Date(new Date().setDate(today.getDate() - 30)), today]},
      {
        label: t('DatePicker.this_year'),
        value: [new Date(today.getFullYear(), 0, 1), new Date(today.getFullYear(), 11, 31)],
      },
      {
        label: t('DatePicker.last_year'),
        value: [new Date(today.getFullYear() - 1, 0, 1), new Date(today.getFullYear() - 1, 11, 31)],
      },
    ],
  };
};
</script>

<template>
  <VueDatePicker v-bind="{...buildDefaults(), ...$attrs}" v-model="model">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </VueDatePicker>
</template>

<style>
@import '@vuepic/vue-datepicker/dist/main.css';

:root {
  /*General*/
  --dp-font-family: var(--font-sans);
  --dp-border-radius: 8px; /*Configurable border-radius*/
  --dp-cell-border-radius: 8px; /*Specific border radius for the calendar cell*/
  --dp-common-transition: all 0.1s ease-in; /*Generic transition applied on buttons and calendar cells*/

  /*Colors — wired to the app theme tokens so the calendar tracks the brand*/
  --dp-background-color: #ffffff;
  --dp-text-color: var(--color-slate-700);
  --dp-secondary-color: var(--color-slate-400);
  --dp-icon-color: var(--color-slate-400);
  --dp-border-color: var(--color-slate-200);
  --dp-menu-border-color: var(--color-slate-200);
  --dp-border-color-hover: var(--color-slate-300);
  --dp-border-color-focus: var(--color-brand-500);
  --dp-hover-color: var(--color-slate-100);
  --dp-hover-text-color: var(--color-slate-900);
  --dp-hover-icon-color: var(--color-slate-600);
  --dp-primary-color: var(--color-brand-500);
  --dp-primary-disabled-color: var(--color-brand-200);
  --dp-primary-text-color: #ffffff;
  --dp-range-between-dates-background-color: var(--color-brand-50);
  --dp-range-between-dates-text-color: var(--color-brand-700);
  --dp-highlight-color: rgba(78, 144, 254, 0.12);
  --dp-disabled-color: var(--color-slate-100);
  --dp-disabled-color-text: var(--color-slate-300);
  --dp-success-color: var(--color-brand-500);
  --dp-success-color-disabled: var(--color-brand-200);
  --dp-danger-color: #e11d48;
  --dp-marker-color: var(--color-magenta-500);
  --dp-scroll-bar-background: var(--color-slate-100);
  --dp-scroll-bar-color: var(--color-slate-300);

  /*Sizing*/
  --dp-button-height: 35px; /*Size for buttons in overlays*/
  --dp-month-year-row-height: 35px; /*Height of the month-year select row*/
  --dp-month-year-row-button-size: 35px; /*Specific height for the next/previous buttons*/
  --dp-button-icon-height: 20px; /*Icon sizing in buttons*/
  --dp-cell-size: 35px; /*Width and height of calendar cell*/
  --dp-cell-padding: 5px; /*Padding in the cell*/
  --dp-common-padding: 10px; /*Common padding used*/
  --dp-input-icon-padding: 35px; /*Padding on the left side of the input if icon is present*/
  --dp-input-padding: 6px 30px 6px 12px; /*Padding in the input*/
  --dp-menu-min-width: 260px; /*Adjust the min width of the menu*/
  --dp-action-buttons-padding: 2px 5px; /*Adjust padding for the action buttons in action row*/
  --dp-row-margin: 5px 0; /*Adjust the spacing between rows in the calendar*/
  --dp-calendar-header-cell-padding: 0.5rem; /*Adjust padding in calendar header cells*/
  --dp-two-calendars-spacing: 10px; /*Space between multiple calendars*/
  --dp-overlay-col-padding: 3px; /*Padding in the overlay column*/
  --dp-time-inc-dec-button-size: 32px; /*Sizing for arrow buttons in the time picker*/
  --dp-menu-padding: 6px 8px; /*Menu padding*/

  /*Font sizes*/
  --dp-font-size: 0.875rem; /*Default font-size — matches the app's text-sm scale*/
  --dp-preview-font-size: 0.8rem; /*Font size of the date preview in the action row*/
  --dp-time-font-size: 0.8rem; /*Font size in the time picker*/

  /*Transitions*/
  --dp-animation-duration: 0.1s; /*Transition duration*/
  --dp-menu-appear-transition-timing: cubic-bezier(0.4, 0, 1, 1); /*Timing on menu appear animation*/
  --dp-transition-timing: ease-out; /*Timing on slide animations*/
}

[dir='rtl'] {
  --dp-direction: rtl;
}

/* ——— Component polish: align the picker internals with the app UI ———
   Colors come from the variables above; these rules add the radius,
   elevation, focus rings, and hover states the variables don't cover.
   Class names follow @vuepic/vue-datepicker; tweak if a future version
   renames one. */

/* Input — ring-style focus like the app's other inputs */
.dp__input {
  font-family: var(--font-sans);
  font-weight: 500;
  color: var(--color-slate-900);
  transition:
    border-color 0.12s ease,
    box-shadow 0.12s ease;
}

.dp__input::placeholder {
  color: var(--color-slate-400);
}

.dp__input:hover {
  border-color: var(--color-slate-300);
}

.dp__input_focus,
.dp__input:focus {
  border-color: var(--color-brand-500);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-brand-500) 22%, transparent);
}

/* Floating menu — soft elevated card, like the popovers */
.dp__menu {
  border-radius: 12px;
  box-shadow:
    0 10px 30px -8px rgb(17 17 17 / 0.18),
    0 4px 10px -6px rgb(17 17 17 / 0.1);
}

.dp__arrow_top,
.dp__arrow_bottom {
  border-color: var(--color-slate-200);
}

/* Calendar header — muted weekday labels, soft month/year + nav buttons */
.dp__calendar_header_item {
  font-weight: 600;
  color: var(--color-slate-500);
}

.dp__month_year_select {
  font-weight: 600;
  border-radius: 8px;
}

.dp__month_year_select:hover {
  background: var(--color-slate-100);
}

.dp__inner_nav {
  border-radius: 8px;
}

.dp__inner_nav:hover {
  background: var(--color-slate-100);
}

/* Today — a soft brand outline rather than a hard ring */
.dp__today {
  border: 1px solid var(--color-brand-300);
}

/* Month/year overlay cells */
.dp__overlay_cell {
  border-radius: 8px;
}

.dp__overlay_cell:hover:not(.dp__overlay_cell_active) {
  background: var(--color-slate-100);
}

/* Preset sidebar — styled like the app's menu items */
.dp__preset_dates {
  padding: 4px;
  gap: 2px;
}

.dp__preset_date {
  border-radius: 8px;
  padding: 6px 10px;
  font-weight: 500;
  color: var(--color-slate-600);
  transition:
    background 0.12s ease,
    color 0.12s ease;
}

.dp__preset_date:hover {
  background: var(--color-brand-50);
  color: var(--color-brand-700);
}

/* Action row — brand pill confirm, ghost cancel */
.dp__action_button {
  border-radius: 8px;
  font-weight: 600;
  padding: 5px 14px;
  transition:
    background 0.12s ease,
    color 0.12s ease,
    box-shadow 0.12s ease;
}

.dp__action_cancel {
  background: transparent;
  color: var(--color-slate-600);
}

.dp__action_cancel:hover {
  background: var(--color-slate-100);
  color: var(--color-slate-900);
}

.dp__action_select {
  background: var(--color-brand-500);
  box-shadow: 0 6px 16px -6px color-mix(in srgb, var(--color-brand-500) 55%, transparent);
}

.dp__action_select:hover {
  background: var(--color-brand-600);
}

/* ——— Optional dark mode ———
   Requires a class-based `.dark` on a parent (e.g. <html class="dark">).
   The menu teleports to <body>, so this only works if `.dark` lives on
   <html>/<body>. You may also pass :dark="true" to the picker so its own
   theme class matches. Uncomment to enable. */
/*
.dark .dp__menu,
.dark .dp__input {
  --dp-background-color: var(--color-slate-900);
  --dp-text-color: var(--color-slate-100);
  --dp-secondary-color: var(--color-slate-500);
  --dp-icon-color: var(--color-slate-500);
  --dp-border-color: rgb(255 255 255 / 0.1);
  --dp-menu-border-color: rgb(255 255 255 / 0.1);
  --dp-hover-color: rgb(255 255 255 / 0.06);
  --dp-hover-text-color: #ffffff;
  --dp-range-between-dates-background-color: color-mix(in srgb, var(--color-brand-500) 18%, transparent);
  --dp-range-between-dates-text-color: var(--color-brand-200);
}
*/
</style>
