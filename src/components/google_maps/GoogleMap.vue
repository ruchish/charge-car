<template>
  <div class="google-map-wrapper">
    <GmapMap
      class="google-map"
      ref="google-map"
      :center="center"
      :zoom="zoom"
      :options="mapOptions"
      map-type-id="terrain"
      tabindex="-1"
    ></GmapMap>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import MapOptions from "./interfaces/MapOptions";
import LatLng from "./interfaces/LatLng";

import { gmapApi } from "gmap-vue";

@Component
export default class GoogleMap extends Vue {
  public center: LatLng = { lat: 25, lng: 0 };
  public zoom: number = 3;
  public mapOptions: MapOptions = {};

  private _mapRef!: Vue;

  /**
   * Vue lifecycle callback.
   * @see https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
   */
  private mounted() {
    this._mapRef = this.$refs["google-map"] as Vue;

    (this._mapRef as any).$mapPromise.then((map: any) => {
      gmapApi().maps.event.addListener(map, "click", this.focus);
      gmapApi().maps.event.addListener(map, "dragstart", this.focus);
    });
  }

  private focus() {
    (this._mapRef.$el as any).focus();
  }
}
</script>

<style lang="scss" scoped>
.google-map-wrapper {
  width: 100%;
  height: 100%;

  .google-map {
    width: inherit;
    height: inherit;
    outline: none;
  }
}
</style>