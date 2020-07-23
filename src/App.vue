<template>
  <div id="app">Charge Car Web App</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {}
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
