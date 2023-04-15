<script setup lang="ts">
  import { defineProps } from "vue";
  import {
    TypesOfButtons,
    SizesOfButtons,
    ButtonProps,
  } from "./interface/ButtonInterface";
  import {
    initButton,
    buttonVariant,
    buttonSize,
  } from "./controller/ButtonController";

  const props: ButtonProps = defineProps<{
    button_msg: string;
    variant?: TypesOfButtons;
    size?: SizesOfButtons;
  }>();

  props && initButton(props);
</script>

<template>
  <button
    :class="buttonVariant"
    :style="{
      width: buttonSize.width,
      height: buttonSize.height,
    }"
  >
    {{ button_msg }}
  </button>
</template>

<style scoped>
  @import "./style/ButtonStyle.css";
</style>
