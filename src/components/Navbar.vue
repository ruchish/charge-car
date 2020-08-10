<template>
  <div class="navbar">
    <UIButton text="Toggle Info Panel (test)" color="dark" @click="toggleInfoPanel" />Nav-bar
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import UIButton from "@/components/ui/UIButton.vue";

@Component({ components: { UIButton } })
export default class Navbar extends Vue {
  toggleInfoPanel() {
    document.getElementsByClassName("info-panel")[0].toggleAttribute("opened");
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 7vh;
  background-color: var(--color-primary);
}
</style>