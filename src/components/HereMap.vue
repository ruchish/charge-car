<template>
  <div ref="map" class="here-map" :style="{ width: width, height: height }"></div>
</template>

<script lang="ts">
declare let H: any;

import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class HereMap extends Vue {
  @Prop() public width?: string;
  @Prop() public height?: string;

  private _platform: typeof H;
  private _map: typeof H;
  private _mapBehaviour: typeof H;

  public initialize(apiKey: string) {
    this._platform = new H.service.Platform({ apikey: "apiKey" });

    const defaultLayers = this._platform.createDefaultLayers();
    this._map = new H.Map(this.$refs.map, defaultLayers.vector.normal.map);

    window.addEventListener('resize', () => this._map.getViewPort().resize());

    this._mapBehaviour = new H.mapevents.Behavior(new H.mapevents.MapEvents(this._map));

    this._map.addEventListener("tap", (event: any) => {
      console.log(event);
    });
  }
}
</script>

<style lang="scss" scoped>
.here-map {
  display: block;
  width: 100%;
  height: 100%;
  outline: solid black;
}
</style>