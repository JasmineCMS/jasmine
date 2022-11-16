<template>
  <div>
    <input type="text" :name="name+'[address]'" class="form-control form-control-sm"
           :class="{'is-invalid': invalid}" ref="addressElem" v-model="val.address">

    <div class="j-location-field-map" ref="mapElem"></div>
  </div>
</template>

<script>
import JasmineBaseField from './BaseField';

export default {
  name: 'GeocodingField',
  extends: JasmineBaseField,
  data() {
    return {
      opts: Object.assign({
        type: 'text',
      }, this.options),

      latLng: null,
      map: null,
      marker: null,
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

    createMarker(location) {
      let vm = this;
      if (vm.marker) {
        vm.marker.setMap(null);
      }

      //Create a marker and placed it on the map.
      vm.marker = new google.maps.Marker({
        position: location,
        map: vm.map,
      });

      vm.map.panTo(location);

      // Add location to hidden fields
      vm.val.lat = location.lat();
      vm.val.lng = location.lng();
    },

    initMap() {
      let vm = this;
      vm.latLng = new google.maps.LatLng(vm.val.lat, vm.val.lng);
      vm.map = new google.maps.Map(vm.$refs.mapElem, {
        center: vm.latLng,
        zoom: 2,
      });

      let markerLatLng = new google.maps.LatLng(vm.val.lat, vm.val.lng);
      vm.marker = new google.maps.Marker({
        position: markerLatLng,
        map: vm.map,
      });

      vm.map.panTo(markerLatLng);
      vm.map.setZoom(10);

      let autocomplete = new google.maps.places.Autocomplete(
          /** @type {!HTMLInputElement} */
          (vm.$refs.addressElem),
          {types: ['geocode']},
      );

      autocomplete.addListener('place_changed', function () {
        let place = autocomplete.getPlace();
        vm.val.address = place.formatted_address;
        vm.createMarker(place.geometry.location);
      });

      google.maps.event.addListener(vm.map, 'click', function (e) {
        //Determine the location where the user has clicked.
        let location = e.latLng;
        vm.createMarker(location);
      });
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
