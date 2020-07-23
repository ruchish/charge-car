<template>
  <a
    v-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="ui-button"
    :type="type ? type : 'button'"
    :size="size ? size : 'medium'"
    :color="color"
    :text-align="textAlign"
    @click="onClick()"
  >
    <div v-if="icon" class="button-icon-wrapper">
      <img :src="require(`@/assets/${icon.src}`)" :alt="icon.alt" class="button-icon" />
    </div>
    <span class="button-text">{{text ? text : href}}</span>
  </a>

  <button
    v-else
    class="ui-button"
    :type="type ? type : 'button'"
    :size="size ? size : 'medium'"
    :color="color"
    :text-align="textAlign"
    @click="onClick()"
  >
    <div v-if="icon" class="button-icon-wrapper">
      <img :src="require(`@/assets/${icon.src}`)" :alt="icon.alt" class="button-icon" />
    </div>
    <span v-if="text" class="button-text">{{text}}</span>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Image from "@/interfaces/Image";

@Component
export default class UIButton extends Vue {
  @Prop() public readonly type?: ButtonType;
  @Prop() public readonly text?: string;
  @Prop() public readonly color?: ButtonColor;
  @Prop() public readonly size?: ButtonSize;
  @Prop() public readonly textAlign?: string;
  @Prop() public readonly icon?: Image;
  @Prop() public readonly href?: string;

  onClick() {
    this.$emit("click");
  }
}

export type ButtonType = "button" | "submit" | "reset";
export type ButtonSize = "small" | "medium" | "large";
export type textAlign = "left" | "center" | "right";
export type ButtonColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "light"
  | "medium"
  | "dark";
</script>

<style scoped lang="scss">
@import "@/theme/responsive.scss";

.ui-button {
  display: inline-flex;
  align-self: baseline;
  align-items: center;
  justify-content: center;
  height: 3vmax;
  min-height: calc(40px + 1vmax);
  padding: calc(6px + 0.1vmax);
  color: var(--color-tertiary-contrast);
  background-color: var(--color-tertiary);
  border: none;
  outline: none;
  transition: 0.25s;
  text-decoration: none;
  cursor: pointer;

  .button-icon-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-width: 50px;
    max-height: 50px;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0.25vmax;

    .button-icon {
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  .button-text {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 0.8vmax;
    font-family: "Quicksand";
    font-size: calc(10px + 1vmax);
    color: inherit;
    font-weight: bold;
  }

  &:hover {
    background-color: var(--color-tertiary-shade);
  }

  &:active {
    background-color: var(--color-tertiary-tint);
  }

  &[color="primary"] {
    color: var(--color-primary-contrast);
    background-color: var(--color-primary);

    &:hover {
      background-color: var(--color-primary-shade);
    }

    &:active {
      background-color: var(--color-primary-tint);
    }
  }

  &[color="secondary"] {
    color: var(--color-secondary-contrast);
    background-color: var(--color-secondary);

    &:hover {
      background-color: var(--color-secondary-shade);
    }

    &:active {
      background-color: var(--color-secondary-tint);
    }
  }

  &[color="light"] {
    color: var(--color-light-contrast);
    background-color: var(--color-light);

    &:hover {
      background-color: var(--color-light-shade);
    }

    &:active {
      background-color: var(--color-light-tint);
    }
  }

  &[color="medium"] {
    color: var(--color-medium-contrast);
    background-color: var(--color-medium);

    &:hover {
      background-color: var(--color-medium-shade);
    }

    &:active {
      background-color: var(--color-medium-tint);
    }
  }

  &[color="dark"] {
    color: var(--color-dark-contrast);
    background-color: var(--color-dark);

    &:hover {
      background-color: var(--color-dark-shade);
    }

    &:active {
      background-color: var(--color-dark-tint);
    }
  }

  &[border="rounded"] {
    border-radius: calc(6px + 0.1vmax);
  }

  &[border="capsule"] {
    border-radius: 100px;
  }

  &[size="small"] {
    height: 2.5vmax;
    min-height: calc(20px + 1vmax);

    .button-text {
      font-size: calc(8px + 1vmax);
    }
  }

  &[size="large"] {
    height: 3.75vmax;
    min-height: calc(50px + 1vmax);

    .button-text {
      font-size: calc(14px + 1vmax);
    }
  }

  &[text-align="left"] {
    justify-content: flex-start;
  }

  &[text-align="right"] {
    justify-content: flex-end;
  }

  &[block] {
    display: flex;
    align-self: auto;
    width: 100%;
  }

  &[icon-right] {
    flex-flow: row-reverse;
  }
}

@include mobileView() {
  .ui-button {
    &[block-mobile] {
      display: flex;
      align-self: auto;
      width: 100%;
    }

    &[size="small"] {
      height: 2.5vmax;
      min-height: calc(25px + 1vmax);

      .button-text {
        font-size: calc(10px + 1vmax);
      }
    }
  }
}
</style>