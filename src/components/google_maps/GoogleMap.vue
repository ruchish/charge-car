<template>
  <div class="google-map">
    <GmapMap
      :center="center"
      :zoom="zoom"
      :options="mapOptions"
      map-type-id="terrain"
      style="width: 100%; height: 100%"
    ></GmapMap>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import MapOptions from "./interfaces/MapOptions";
import LatLng from "./interfaces/LatLng";
import { Prop } from "vue-property-decorator";

@Component
export default class GoogleMap extends Vue {
  public center: LatLng = { lat: 25, lng: 0 };
  public zoom: number = 3;
  public mapOptions: MapOptions = {};
}
</script>

<style lang="scss" scoped>
</style>