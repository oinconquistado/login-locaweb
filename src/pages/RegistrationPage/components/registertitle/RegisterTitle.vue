<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      return {};
    },
  });
</script>

<template>
  <!-- container dos títulos da página de registro -->
  <div class="register_container-box_register-titles">
    <!-- título da página de registro -->
    <h1 class="register_container-box_register-titles--title">
      Dados Pessoais
    </h1>
    <!-- subtítulo da página de registro -->
    <h2 class="register_container-box_register-titles--subtitle">
      Informe seus dados pessoais para acesso à sua conta
    </h2>
  </div>
</template>

<style scoped>
  /* container dos títulos da página de registro */
  .register_container-box_register-titles--title {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 5px;
  }
  /* container dos subtítulos da página de registro */
  .register_container-box_register-titles--subtitle {
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 20px;
  }
</style>
