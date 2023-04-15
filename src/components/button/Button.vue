<script setup lang="ts">
  import { defineProps } from "vue";
  import * as Types from "./interface/ButtonInterface";
  import {
    initButton,
    buttonVariant,
    buttonSize,
  } from "./controller/ButtonController";

  const props: Types.ButtonProps = defineProps<{
    button_msg: string;
    size?: Types.SizesOfButtons;
    variant?: Types.TypesOfButtons;
  }>();

  props && initButton(props);
</script>

<template>
  <button
    :class="buttonVariant"
    :style="{
      height: buttonSize.height,
      width: buttonSize.width,
    }"
  >
    {{ button_msg }}
  </button>
</template>

<style scoped>
  @import "./style/ButtonStyle.css";
</style>
