<template>
  <div id="app">
    <Navbar />
    <main>
      <GoogleMap ref="google-map" />
      <InfoPanel />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import Navbar from "@/components/Navbar.vue";
import GoogleMap from "@/components/google_maps/GoogleMap.vue";
import InfoPanel from "@/components/InfoPanel.vue";

@Component({
  components: {
    Navbar,
    GoogleMap,
    InfoPanel,
  },
})
export default class App extends Vue {
  private _map!: GoogleMap;

  /**
   * Vue lifecycle callback.
   * @see https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
   */
  mounted() {
    this._map = this.$refs["google-map"] as GoogleMap;
    this._map.mapOptions = {
      zoomControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    };
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

#app {
  position: relative;
  width: 100vw;
  height: calc(100vh - 7vh);

  main {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
