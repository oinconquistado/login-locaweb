<script lang="ts">
  import { defineComponent } from "vue";
  import Button from "../../../../components/button/Button.vue";

  export default defineComponent({
    components: { Button },
    setup() {},
  });
</script>
<template>
  <!-- container do botão de registro -->
  <div class="register_container-box_register-button">
    <!-- botão de registro -->
    <Button button_msg="criar conta" variant="cta" size="xs" />
  </div>
</template>
<style scoped>
  /* container dos botões da página de registro */
  .register_container-box_register-button {
    display: grid;
    margin-top: 10px;
    place-items: center;
    width: 100%;
  }
</style>
