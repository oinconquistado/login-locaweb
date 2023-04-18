<scrip lang="ts">
// importação dos componentes e bibliotecas
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</scrip>
<template>
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
      <h2 class="plans_call--host-your-site">hospedar seu site</h2>
      <!-- <h2 class="plans_call--choose-your-plan--text">Escolha o seu plano</h2> -->
    </div>
  </div>
</template>
<style scoped>
  /* importação do css */
  @import url("./style/PlansHeaderStyle.css");
</style>
