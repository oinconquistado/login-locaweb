<script setup lang="ts">
  import { defineProps } from "vue";
  import { typesOfButtons, sizesOfButtons } from "./interface/ButtonInterface";
  import { initButton, buttonVariant, buttonSize } from "./controller/ButtonController";

  const props = defineProps<{
    button_msg: string;
    variant?: typesOfButtons;
    size?: sizesOfButtons;
  }>();

  const startButton = async () => {
    props && initButton(props);
  };

  startButton();
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
  button {
    display: grid;
    place-items: center;
    font-weight: 400;
  }
  .cta {
    background-color: #f30168;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
  }
  .ghost {
    border: 1px solid #000000;
    border-radius: 5px;
    color: #000000;
  }
</style>
