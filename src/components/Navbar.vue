<template>
  <div class="navbar">
      Nav-bar
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 7vh;
  background-color: var(--color-primary);
}
</style>