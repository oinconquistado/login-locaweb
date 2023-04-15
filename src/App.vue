<script setup lang="ts">
  import { ref } from "vue";
  import Button from "./components/button/Button.vue";
  import Input from "./components/input/Input.vue";

  const message = ref("");
</script>

<template>
  <Button button_msg="Machado 98" variant="cta" size="xs"></Button>
  <Input
    label="E-mail"
    v-model="message"
    inputType="text"
    placeholder="Insira seu e-mail"
    description="Insira seu e-mail para receber as novidades"
    size="mobile"
  />
</template>

<style scoped></style>
