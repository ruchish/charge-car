<template>
  <div class="info-panel" ref="info-panel" tabindex="-1" @click="focus" @scroll="focus">
    <div class="image-wrapper">
      <img src="@/assets/images/placeholder.jpg" alt="placeholder" class="place-photo" />
    </div>
    <span class="place-name">Place Name</span>
    <span class="place-info location">Place Location</span>
    <span class="place-info opening-hours">Opening Hours</span>
    <span class="place-info parking-cost">Parking Cost</span>
    <div class="place-info plug-types">
      <span>Plug Types</span>
      <ul>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
    </div>
    <UIButton text="Start a Route" border="capsule" block />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import UIButton from "@/components/ui/UIButton.vue";

@Component({ components: { UIButton } })
export default class InfoPanel extends Vue {
  public setOpened(opened: boolean) {
    if (opened) {
      this.$el.setAttribute("opened", "");
    } else {
      this.$el.removeAttribute("opened");
      (this.$el as any).scrollTo(0, 0);
    }
  }

  private focus() {
    (this.$el as any).focus();
  }
}
</script>

<style lang="scss" scoped>
@import "@/theme/responsive.scss";

.info-panel {
  display: flex;
  flex-flow: column;
  min-width: 0px;
  width: 0vw;
  max-width: 100vw;
  height: 100%;
  background-color: var(--color-secondary);
  outline: none;
  opacity: 0;
  transform: translateX(100%);
  overflow: auto;
  transition: 0.25s;
  pointer-events: none;

  &[opened] {
    min-width: 400px;
    width: 30vw;
    opacity: 1;
    transform: translateX(0%);
    pointer-events: all;
  }

  .image-wrapper {
    display: flex;
    width: 100%;
    max-height: 15vmax;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .place-name {
    padding: 1.5vh;
    color: var(--color-primary-contrast);
    background-color: var(--color-primary-shade);
    font-size: calc(0.5vmax + 18px);
    font-weight: bold;
    text-align: center;
  }

  .place-info {
    margin-top: 2vh;
    padding: 1vh;
    color: var(--color-secondary-contrast);
    background-color: var(--color-secondary-shade);
    font-size: calc(0.5vmax + 10px);
  }

  .ui-button {
    align-self: center;
    width: 90%;
    margin: 2vh;
  }
}

@include mobileView() {
  .info-panel {
    width: 100%;
    height: 0vh;
    transform: translateY(100%);
    pointer-events: all;

    &[opened] {
      min-width: auto;
      width: inherit;
      height: 15vh;
      transform: translateY(0%);
      pointer-events: all;

      &:focus {
        height: 100vh;
      }
    }

    .image-wrapper {
      max-height: 30vmax;
    }
  }
}
</style>