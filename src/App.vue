<template>
  <div id="app">
    <GoogleMap ref="google-map" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { environment } from "@/environment";

import GoogleMap from "@/components/google_maps/GoogleMap.vue";

@Component({
  components: { GoogleMap },
})
export default class App extends Vue {
  private _map!: GoogleMap;

  /**
   * Vue lifecycle callback.
   * @see https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
   */
  mounted() {
    this._map = this.$refs["google-map"] as GoogleMap;
  }
}
</script>

<style lang="scss">
@import "@/theme/variables.scss";
@import "@/theme/fonts/all.scss";

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Quicksand", Helvetica, Arial, sans-serif;
}

.google-map {
  height: 100vh;
}
</style>
