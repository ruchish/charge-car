<template>
  <div id="app">
    <HereMap ref="here-map" width="100vw" height="100vh"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import HereMap from "@/components/HereMap.vue";
import { environment } from "./environment";

@Component({
  components: {
    HereMap,
  },
})
export default class App extends Vue {
  /**
   * Vue lifecycle callback.
   * @see https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
   */
  mounted() {
    const hereMap: HereMap = this.$refs["here-map"] as HereMap;
    hereMap.initialize("temp");
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
</style>
