<style>
.vue-date-range-picker {
  color: #333;
  width: 100%;
}

.vue-drp-input {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 0.8em;
  font-weight: 300;
}

.vue-drp-input:before {
  content: '\f073';
  font-family: 'Font Awesome 5 Free';
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: 900;
  display: inline;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  font-size: smaller;
  margin-inline-end: 0.5em;
}

.vue-drp-calendar {
  position: absolute;
  right: 0;
  margin-top: -1px;
  display: flex;
  box-shadow: -3px 4px 12px -1px #ccc;
  background: white;
  height: 270px;
  width: 700px;
  padding: 0;
  z-index: 9;
}

.vue-drp-close {
  cursor: pointer;
  user-select: none;
  color: #fff;
  background-color: #06f;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.4em 0.7em;
  font-weight: bolder;
}

.vue-drp-close:after {
  content: '\2715';
}

.vue-drp-close:hover {
  opacity: 0.8;
}

.vue-drp-months-view {
  flex: 1;
}

.vue-drp-title {
  padding: 0.5em;
  text-align: left;
  font-size: 2em;
}

.vue-drp-months {
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  text-align: center;
  padding: 0 1em;
}

.vue-drp-month {
  flex: 1;
  padding: 0 1em;
}

.vue-drp-month-title {
  position: relative;
  font-weight: bold;
  padding: 0.5em 0;
  color: #06f;
}

.vue-drp-prev,
.vue-drp-next {
  cursor: pointer;
  user-select: none;
  font-size: 2.5em;
  line-height: 0.4em;
}

.vue-drp-prev:hover,
.vue-drp-next:hover {
  opacity: 0.8;
}

.vue-drp-prev {
  float: left;
  margin-left: -0.5em;
}

.vue-drp-prev:after {
  content: '\2190';
}

.vue-drp-next {
  float: right;
  margin-right: -0.5em;
}

.vue-drp-next:after {
  content: '\2192';
}

.vue-drp-weekdays {
  display: flex;
  color: #b3b3b3;
  padding-bottom: 0.5em;
  font-family: monospace;
}

.vue-drp-weekdays > div {
  flex: 1;
}

.vue-drp-week {
  display: flex;
}

.vue-drp-day {
  flex-grow: 1;
  width: 14.285%;
  user-select: none;
  font-size: 0.9em;
}

.vue-drp-selectable {
  cursor: pointer;
}

.vue-drp-selectable:hover {
  background-color: rgba(51, 51, 51, 0.1);
  color: #333;
}

.vue-drp-selected {
  background-color: #06f;
  color: #fff;
}

.vue-drp-presets {
  box-sizing: border-box;
  background-color: #f5f5f5;
  width: 21%;
  padding: 1em;
}

.vue-drp-preset {
  cursor: pointer;
  margin: 0.2em 0;
  padding: 0.3em;
}

.vue-drp-preset:hover {
  background-color: #fafafa;
}

.vue-drp-selected-preset {
  border: 1px solid #06f;
  color: #06f;
  background-color: #fcfcfc;
  font-weight: 500;
}

.vue-drp-apply {
  margin-top: 1em;
  cursor: pointer;
  background-color: #06f;
  color: #fff;
  text-align: center;
  padding: 0.4em;
  font-weight: 500;
}

.vue-drp-apply:hover {
  opacity: 0.8;
}

.vue-drp-apply[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.vue-drp-clear {
  margin-top: 0.5em;
  cursor: pointer;
  text-align: center;
  padding: 0.2em 0.2em 0;
  font-weight: 300;
}
</style>

<template>
  <div class="vue-date-range-picker">
    <div
      class="vue-drp-input"
      :class="{chosen: dateRangeStart && dateRangeEnd}"
      @click="toggleCalendar"
      v-text="rangeString" />

    <div class="vue-drp-calendar" v-if="open">
      <div class="vue-drp-close" @click="toggleCalendar"></div>

      <div class="vue-drp-months-view">
        <div class="vue-drp-title">Choose Dates</div>

        <div class="vue-drp-months">
          <div class="vue-drp-month">
            <div class="vue-drp-month-title">
              <div class="vue-drp-prev" @click="goPrevMonth"></div>
              <span>
                {{ locale.monthes[active.start.month] }}
                {{ active.start.year }}
              </span>
            </div>

            <div class="vue-drp-weekdays">
              <div v-for="wdi in 7" :key="wdi" v-text="locale.weekdays[wdi - 1]"></div>
            </div>

            <div class="vue-drp-week" v-for="wi in 6" :key="wi">
              <div
                class="vue-drp-day"
                v-for="di in 7"
                :key="di"
                :class="{
                  'vue-drp-selectable': isSelectable(wi, di, startMonthDay, endMonthDate),
                  'vue-drp-selected': isInRange(wi, di),
                }"
                @click="select(wi, di)"
                v-text="getDayCell(wi, di, startMonthDay, endMonthDate)"></div>
            </div>
          </div>

          <div class="vue-drp-month">
            <div class="vue-drp-month-title">
              <span>
                {{ locale.monthes[nextActiveMonth] }}
                {{ active.end.year }}
              </span>
              <div class="vue-drp-next" @click="goNextMonth"></div>
            </div>

            <div class="vue-drp-weekdays">
              <div v-for="wdi in 7" :key="wdi" v-text="locale.weekdays[wdi - 1]"></div>
            </div>

            <div class="vue-drp-week" v-for="wi in 6" :key="wi">
              <div
                class="vue-drp-day"
                v-for="di in 7"
                :key="di"
                :class="{
                  'vue-drp-selectable': isSelectable(wi, di, startNextMonthDay, endNextMonthDate),
                  'vue-drp-selected': isInRange(wi, di, true),
                }"
                @click="select(wi, di, true)"
                v-text="getDayCell(wi, di, startNextMonthDay, endNextMonthDate)"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="vue-drp-presets">
        <div
          class="vue-drp-preset"
          v-for="(preset, pri) in presets"
          :key="pri"
          :class="{'vue-drp-selected-preset': selectedPreset === preset.label}"
          v-text="preset.label"
          @click="setPreset(preset)"></div>

        <div
          class="vue-drp-apply"
          tabindex="1"
          role="button"
          :disabled="dateRangeEnd === null ? true : null"
          @click="apply">
          Apply
        </div>

        <div
          class="vue-drp-clear"
          tabindex="1"
          role="button"
          :disabled="!dateRangeEnd ? true : undefined"
          @click="clear">
          Clear
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'DatePicker',
  props: {
    format: {
      type: String,
      required: false,
      default: 'DD MMM YYYY',
    },

    presets: {
      type: Array,
      required: false,
      default() {
        return [
          {
            label: 'Today',
            dateRange: {
              start: dayjs(),
              end: dayjs(),
            },
          },
          {
            label: 'This Month',
            dateRange: {
              start: dayjs().startOf('month'),
              end: dayjs(),
            },
          },
          {
            label: 'Last Month',
            dateRange: {
              start: dayjs().subtract(1, 'month').startOf('month'),
              end: dayjs().subtract(1, 'month').endOf('month'),
            },
          },
          {
            label: 'Last 30 days',
            dateRange: {
              start: dayjs().subtract(30, 'day'),
              end: dayjs(),
            },
          },
        ];
      },
    },

    value: {type: Array},
  },

  data() {
    return {
      locale: {
        monthes: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      },

      open: false,

      selectedPreset: '',

      active: {
        start: {
          month: new Date().getMonth(),
          year: new Date().getFullYear(),
        },
        end: {
          year: new Date().getFullYear(),
        },
      },

      isFirstChoice: true,

      dateRangeStartRaw: null,
      dateRangeEndRaw: null,
    };
  },

  computed: {
    /**
     * Assure date is at the beginning of the selected day
     */
    dateRangeStart: {
      get() {
        return this.dateRangeStartRaw;
      },

      set(date) {
        if (date && date.startOf) {
          this.dateRangeStartRaw = date.startOf('day');
        } else {
          this.dateRangeStartRaw = date;
        }
      },
    },

    /**
     * Assure date is at the end of the selected day
     */
    dateRangeEnd: {
      get() {
        return this.dateRangeEndRaw;
      },

      set(date) {
        if (date && date.endOf) {
          this.dateRangeEndRaw = date.endOf('day');
        } else {
          this.dateRangeEndRaw = date;
        }
      },
    },

    /**
     * Get date range string
     *
     * @return {string}
     */
    rangeString() {
      let string = '';

      if (this.dateRangeStart && this.dateRangeStart.format) {
        string += this.dateRangeStart.format(this.format) + ' - ';
      }

      if (this.dateRangeEnd && this.dateRangeEnd.format) {
        string += this.dateRangeEnd.format(this.format);
      }

      return string ? string : 'Choose Date';
    },

    /**
     * Get next calendar month
     *
     * @return {number}
     */
    nextActiveMonth() {
      return this.active.start.month >= 11 ? 0 : this.active.start.month + 1;
    },

    /**
     * Get first weekday of month
     * 0 sunday , 6 saturday
     *
     * @return {number}
     */
    startMonthDay() {
      return new Date(this.active.start.year, this.active.start.month, 1).getDay();
    },

    /**
     * Get last day of month
     *
     * @return {number}
     */
    endMonthDate() {
      return new Date(this.active.end.year, this.nextActiveMonth, 0).getDate();
    },

    /**
     * Get first weekday of next month
     * 0 sunday , 6 saturday
     *
     * @return {number}
     */
    startNextMonthDay() {
      return new Date(this.active.end.year, this.nextActiveMonth, 1).getDay();
    },

    /**
     * Get last day of next month
     *
     * @return {number}
     */
    endNextMonthDate() {
      return new Date(this.active.end.year, this.active.start.month + 2, 0).getDate();
    },
  },

  methods: {
    /**
     * Get the position relative to month
     *
     * @param {number} wi Week number 1-6
     * @param {number} di Day of week 1-7
     * @param {number} startMonthDay
     *
     * @return {number}
     */
    getDayIndexInMonth(wi, di, startMonthDay) {
      let date = 7 * (wi - 1) + di;
      return date - startMonthDay;
    },

    /**
     * Get Month day
     *
     * @param {number} wi Week number 1-6
     * @param {number} di Day of week 1-7
     * @param {number} startMonthDay
     * @param {number} endMonthDate

     * @return {number}
     */
    getDayCell(wi, di, startMonthDay, endMonthDate) {
      let result = this.getDayIndexInMonth(wi, di, startMonthDay);

      return result > 0 && result <= endMonthDate ? result : ' ';
    },

    /**
     * Go to next month
     */
    goPrevMonth() {
      let prevMonth = new Date(this.active.start.year, this.active.start.month, 0);

      this.active.start.month = prevMonth.getMonth();
      this.active.start.year = prevMonth.getFullYear();
      this.active.end.year = prevMonth.getFullYear();
    },

    /**
     * Go to previous month
     */
    goNextMonth() {
      let nextMonth = new Date(this.active.end.year, this.nextActiveMonth, 1);

      this.active.start.month = nextMonth.getMonth();
      this.active.start.year = nextMonth.getFullYear();
      this.active.end.year = nextMonth.getFullYear();
    },

    /**
     * Calc date from date params
     *
     * @return {dayjs}
     */
    calcDate(wi, di, next) {
      let year = next ? this.active.end.year : this.active.start.year;
      let month = next ? this.nextActiveMonth : this.active.start.month;
      let startMonthDay = next ? 'startNextMonthDay' : 'startMonthDay';

      let dayInMonth = this.getDayIndexInMonth(wi, di, this[startMonthDay]);

      return dayInMonth > 0 ? dayjs(`${year}-${month + 1}-${dayInMonth}`) : false;
    },

    /**
     * Check if day is in selectable
     * @param {number} wi Week number 1-6
     * @param {number} di Day of week 1-7
     * @param {number} startMonthDay
     * @param {number} endMonthDate
     *
     * @return {boolean}
     */
    isSelectable(wi, di, startMonthDay, endMonthDate) {
      let result = this.getDayIndexInMonth(wi, di, startMonthDay);

      return result > 0 && result <= endMonthDate;
    },

    /**
     * Check if day is within selected range
     * @param {number} wi Week number 1-6
     * @param {number} di Day of week 1-7
     * @param {boolean} next Use start of end
     *
     * @return {boolean}
     */
    isInRange(wi, di, next) {
      let date = this.calcDate(wi, di, next);

      if (!date) {
        return false;
      }

      /** If start is null then cant be anything in range */
      if (this.dateRangeStart === null) {
        return false;
      }

      /** If is first choice then any date after is in range */
      if (this.dateRangeEnd === null) {
        return date.isSame(this.dateRangeStart);
      }

      /** Else assure in range */
      return (
        (date.isSame(this.dateRangeStart) || date.isAfter(this.dateRangeStart)) &&
        (date.isSame(this.dateRangeEnd) || date.isBefore(this.dateRangeEnd))
      );
    },

    /**
     * Pick a date
     *
     * @param {number} wi Week number 1-6
     * @param {number} di Day of week 1-7
     * @param {boolean} next use start of end
     */
    select(wi, di, next) {
      let date = this.calcDate(wi, di, next);

      if (!date) {
        return;
      }

      if (this.isFirstChoice) {
        this.dateRangeStart = date;
        this.dateRangeEnd = null;
      } else {
        this.dateRangeEnd = date;
      }

      this.isFirstChoice = !this.isFirstChoice;
    },

    /**
     * Set a preset
     *
     * @param preset {{label: string, dateRange: {start: dayjs, end: dayjs}}}
     */
    setPreset(preset) {
      this.setRange(preset.dateRange);
      this.selectedPreset = preset.label;
    },

    /**
     * Set date range
     *
     * @param dateRange {{start: dayjs, end: dayjs}}
     */
    setRange(dateRange) {
      if (dateRange) {
        /** If is not a dayjs, load into a dayjs */
        if (typeof dateRange.start !== 'object' || typeof dateRange.start.$d === 'undefined') {
          /** If is a moment object extract js Date */
          if (dateRange.start._isAMomentObject) {
            dateRange.start = dateRange.start._d;
          }

          dateRange.start = dayjs(dateRange.start);
        }

        if (typeof dateRange.end !== 'object' || typeof dateRange.end.$d === 'undefined') {
          /** If is a moment object extract js Date */
          if (dateRange.end._isAMomentObject) {
            dateRange.end = dateRange.end._d;
          }

          dateRange.end = dayjs(dateRange.end);
        }
      }

      this.dateRangeStart = dateRange?.start || null;
      this.dateRangeEnd = dateRange?.end || null;

      /** Move start of range in to calendar view */
      this.active.start.month = this.dateRangeStart?.month() || new Date().getMonth();
      this.active.start.year = this.dateRangeStart?.year() || new Date().getFullYear();

      if (this.nextActiveMonth === 0) {
        this.active.end.year = (this.dateRangeStart?.year() || new Date().getFullYear()) + 1;
      }
    },

    /**
     * Open and close the calendar
     */
    toggleCalendar() {
      /** If calendar was closed without setting a full range, reset */
      if (this.dateRangeEnd === null) {
        this.dateRangeStart = null;
      }

      this.open = !this.open;
    },

    /**
     * Apply the selected range
     */
    apply() {
      /** If a full range is not selected, return */
      if (this.dateRangeEnd === null) {
        return;
      }

      this.toggleCalendar();

      /** Emit the selected event */
      this.$emit('selected', {
        string: this.rangeString,
        start: this.dateRangeStart,
        end: this.dateRangeEnd,
      });
    },

    /** Clear */
    clear() {
      this.setRange(null);
      this.toggleCalendar();

      /** Emit the selected event */
      this.$emit('selected', null);
    },
  },

  watch: {
    /**
     * if next active month is January, set the end year to the next one
     */
    nextActiveMonth(value) {
      if (value === 0) {
        this.active.end.year++;
      }
    },
  },

  created() {
    /** If the first month is December, set the end year to the next one */
    if (this.active.start.month === 11) {
      this.active.end.year++;
    }
  },

  mounted() {
    if (Array.isArray(this.value) && this.value.length === 2) {
      this.setRange({
        start: this.value[0],
        end: this.value[1],
      });
    }
  },
};
</script>
