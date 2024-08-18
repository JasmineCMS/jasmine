<template>
  <div>
    <GMapAutocomplete
      class="form-control form-control-sm"
      :class="{'is-invalid': invalid}"
      @place_changed="setLocation"
      :types="opts.types || []"
      :value="val.address"
      ref="gmapAutocomplete">
    </GMapAutocomplete>

    <div class="input-group input-group-sm my-2">
      <span class="input-group-text" v-text="$t('Lat')" />
      <input class="form-control form-control-sm" type="text" v-model="val.lat" />
      <span class="input-group-text" v-text="$t('Lng')" />
      <input class="form-control form-control-sm" type="text" v-model="val.lng" />
    </div>

    <GMapMap :zoom="zoom" :center="{lat: val.lat || 0, lng: val.lng || 0}" class="j-location-field-map">
      <GMapMarker v-if="val.lat && val.lng" :position="{lat: val.lat, lng: val.lng}" draggable @dragend="onMove" />
    </GMapMap>
  </div>
</template>

<script>
import JasmineBaseField from './BaseField';

export default {
  name: 'GeocodingField',
  extends: JasmineBaseField,
  data() {
    return {
      opts: Object.assign({}, this.options),
      zoom: 10,
    };
  },

  methods: {
    loadGmapApi() {
      let url = `https://maps.googleapis.com/maps/api/js?key=${this.opts.api_key}&libraries=places`;
      if (!window.google) {
        let s = document.createElement('script');
        s.src = url;
        s.onload = this.initMap;
        document.body.appendChild(s);
      } else {
        this.initMap();
      }
    },

    initMap() {
      window.vueGoogleMapsInit();
    },

    setLocation(loc) {
      this.val.lat = loc.geometry.location.lat();
      this.val.lng = loc.geometry.location.lng();
      this.val.address = loc.formatted_address;

      this.zoom = 16;
    },

    onMove(evt) {
      this.val.lat = evt.latLng.lat();
      this.val.lng = evt.latLng.lng();

      this.val.address = '';
      this.$refs.gmapAutocomplete.$refs.input.value = '';
    },
  },

  mounted() {
    this.loadGmapApi();
  },
};
</script>

<style scoped lang="scss">
.j-location-field-map {
  width: 100%;
  height: 400px;
  border: 1px solid #eee;
  margin-bottom: 5px;
}
</style>
