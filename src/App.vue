<template>
  <div id="app">
    <Navbar />
    <main>
      <InfoPanel ref="info-panel" opened/>
      <GoogleMap ref="google-map" />
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
  /**
   * Determines if the app is in a mobile-container view by reading the size of the window width and height.
   */
  public static get isMobile(): boolean {
    return window.outerWidth <= 1024 || window.outerHeight <= 1024;
  }

  private _map!: GoogleMap;

  /**
   * Vue lifecycle callback.
   * @see https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
   */
  private mounted() {
    this._map = this.$refs["google-map"] as GoogleMap;
    this._map.mapOptions = { fullscreenControl: false };
  }
}
</script>

<style lang="scss">
@import "@/theme/variables.scss";
@import "@/theme/fonts/all.scss";
@import "@/theme/responsive.scss";

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

  main {
    position: relative;
    display: flex;
    width: 100%;
    height: calc(100vh - 7vh);
    background-color: var(--color-primary);
  }
}

@include mobileView() {
  #app {
    main {
      flex-flow: column-reverse;
    }
  }
}
</style>
