<script setup lang="ts">
  import initButton from "./controller/ButtonController";
  import * as Types from "./interface/ButtonInterface";
  import { buttonSize, buttonVariant } from "./utils/buttontSetDefaultProps";

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
      // TODO: fix this
      height: buttonSize?.height,
      width: buttonSize?.width,
    }"
    :aria-label="button_msg"
  >
    {{ button_msg }}
  </button>
</template>

<style scoped>
  @import "./style/ButtonStyle.css";
</style>
