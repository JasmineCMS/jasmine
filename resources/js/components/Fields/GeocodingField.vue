<script setup lang="ts">
import {onMounted, onBeforeUnmount, shallowRef, useTemplateRef, watch} from 'vue';
import 'leaflet/dist/leaflet.css';
import L, {Map, Marker} from 'leaflet';

type LocationValue = {address: string | null; lat: number | null; lng: number | null};

const props = defineProps<{
  id: string;
  name: string;
  options: {
    class?: string;
    placeholder?: string;
    zoom?: number;
    [key: string]: any;
  };
  rtl: boolean;
  validation: Array<string>;
  invalid: boolean;
  errors: Record<string, string>;
  path: string;
}>();

const model = defineModel<LocationValue>({required: true});

const mapEl = useTemplateRef('map');
const map = shallowRef<Map | null>(null);

let marker: Marker | null = null;

const num = (v: unknown): number | null => (typeof v === 'number' && Number.isFinite(v) ? v : null);
const round6 = (n: number) => Math.round(n * 1e6) / 1e6;

const pinIcon = L.divIcon({
  className: 'geocoding-pin',
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"
         fill="#4f46e5" stroke="#fff" stroke-width="1.5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5" fill="#fff"/>
    </svg>
  `,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const setPoint = (lat: number, lng: number): void => {
  model.value.lat = round6(lat);
  model.value.lng = round6(lng);
};

const setPin = (lat: number, lng: number): void => {
  if (!map.value) return;

  if (!marker) {
    marker = L.marker([lat, lng], {draggable: true, icon: pinIcon})
      .addTo(map.value)
      .on('dragend', () => {
        const p = marker!.getLatLng();
        setPoint(p.lat, p.lng);
      });
  } else {
    marker.setLatLng([lat, lng]);
  }

  if (!map.value.getBounds().contains([lat, lng])) map.value.setView([lat, lng]);
};

const clearPin = () => {
  marker?.remove();
  marker = null;
};

onMounted(() => {
  const lat = num(model.value.lat);
  const lng = num(model.value.lng);
  const hasPoint = lat != null && lng != null;

  map.value = L.map(mapEl.value!).setView(hasPoint ? [lat!, lng!] : [0, 0], hasPoint ? (props.options.zoom ?? 13) : 2);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
  }).addTo(map.value);

  map.value.on('click', (e) => setPoint(e.latlng.lat, e.latlng.lng));

  if (hasPoint) setPin(lat!, lng!);
});

watch([() => model.value.lat, () => model.value.lng], () => {
  const lat = num(model.value.lat);
  const lng = num(model.value.lng);
  if (lat != null && lng != null) setPin(lat, lng);
  else clearPin();
});

onBeforeUnmount(() => {
  map.value?.remove();
  map.value = null;
  marker = null;
});

const inputClass = (invalid: boolean) =>
  invalid
    ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500'
    : 'border-gray-300 text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500';
</script>

<template>
  <div :class="options.class">
    <input
      :id="id"
      :name="name"
      v-model="model.address"
      type="text"
      class="block w-full rounded-md shadow-xs sm:text-sm transition-colors duration-200"
      :class="inputClass(invalid)"
      :placeholder="options.placeholder ?? $t('GeocodingField.name-address')"
      :required="validation.includes('required')"
      :aria-invalid="invalid || undefined"
      :dir="rtl ? 'rtl' : 'ltr'"
    />
    <div class="mt-2 flex gap-2">
      <input
        v-model.number="model.lat"
        type="number"
        step="any"
        min="-90"
        max="90"
        dir="ltr"
        :placeholder="$t('GeocodingField.Lat')"
        class="block w-full rounded-md shadow-xs sm:text-sm transition-colors duration-200"
        :class="inputClass(invalid)"
        @change="model.lat = num(model.lat)"
      />
      <input
        v-model.number="model.lng"
        type="number"
        step="any"
        min="-180"
        max="180"
        dir="ltr"
        :placeholder="$t('GeocodingField.Lng')"
        class="block w-full rounded-md shadow-xs sm:text-sm transition-colors duration-200"
        :class="inputClass(invalid)"
        @change="model.lng = num(model.lng)"
      />
    </div>
    <div ref="map" dir="ltr" class="map-container mt-2 h-96 w-full overflow-hidden rounded-md border border-gray-200" />
  </div>
</template>
