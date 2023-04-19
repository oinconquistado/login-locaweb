<script lang="ts">
  // importação das bibliotecas
  import { defineComponent } from "vue";
  import { useRoute } from "vue-router";
  // importação dos componentes
  import { Button, FormDivider, Header, Input, PlanCol } from "@/components/";
  import { plans } from "@/data/Plans";
  // pages components
  import { RegisterTitle, SelectedPlan, UserForm } from "@/pages/components";
  //stores
  import { useRegisterStore } from "@/stores";

  export default defineComponent({
    // declaração dos componentes
    components: {
      Button,
      FormDivider,
      Header,
      Input,
      PlanCol,
      RegisterTitle,
      SelectedPlan,
      UserForm,
    },

    setup() {
      // declaração da rota
      const route = useRoute();
      // desestruturação dos parâmetros da rota
      const { params } = route;

      // declaração do store
      const registerStore = useRegisterStore();

      return {
        plans,
        params,
        registerStore,
      };
    },
  });
</script>

<template>
  <!-- container da página de registro -->
  <div class="registration-page">
    <!-- header da página de registro -->
    <Header subtitle="vender on-line" />
    <!-- container do formulário de registro -->
    <div class="register_container">
      <div class="register_container-box_register">
        <!-- títulos da página de registro -->
        <RegisterTitle />
        <!-- formulário de registro -->
        <UserForm />
      </div>
      <!-- container da coluna de planos -->
      <SelectedPlan :plan="params.id as string" />
    </div>
  </div>
</template>
<style scoped>
  /* importação do arquivo de estilos */
  @import url("./style/RegistrationPageStyle.css");
  /* importação do arquivo de estilos mobile */
  @import url("./style/RegistrationPageStyleMobile.css");
</style>
