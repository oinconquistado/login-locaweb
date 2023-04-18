<script lang="ts">
  // importação dos componentes e bibliotecas
  import { defineComponent } from "vue";

  export default defineComponent({
    props: {
      subtitle: {
        type: String,
        default: "hospedar seu site",
      },
    },
    setup() {
      return {};
    },
  });
</script>
<template>
  <!-- container do logo -->
  <div class="container__header">
    <div class="container__logo-plans--logobox">
      <img
        src="../../../../assets/images/locaweb.svg"
        class="container__logo-plans--logobox--locaweb"
        alt="Logo da Locaweb"
      />
    </div>

    <!-- chamadas do principal -->
    <div class="plans_call">
      <h1>Você está muito próximo de mudar a forma de</h1>
      <h2 class="plans_call--host-your-site">{{ subtitle }}</h2>
      <!-- TODO: criar a lógica de exibir ou não o texto abaixo -->
      <!-- <h2 class="plans_call--choose-your-plan--text">Escolha o seu plano</h2> -->
    </div>
  </div>
</template>
<style scoped>
  /* importação do css */
  @import url("./style/PlansHeaderStyle.css");
</style>
