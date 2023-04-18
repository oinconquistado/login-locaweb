<script lang="ts">
  import { defineComponent } from "vue";
  import { plans } from "../PlansPage/components/PlansContainer/data/Plans";
  import useRegisterStore from "@/stores/useRegisterStore";
  import { useRoute } from "vue-router";
  import Button from "../../components/button/Button.vue";
  import FormDivider from "../../components/formdivider/FormDivider.vue";
  import Header from "../../components/header/Header.vue";
  import Input from "../../components/input/Input.vue";
  import PlanCol from "../../components/plancol/PlanCol.vue";
  import RegisterTitleVue from "./components/registertitle/RegisterTitle.vue";
  import SelectedPlan from "./components/selectplan/SelectedPlan.vue";
  import UserForm from "./components/userform/UserForm.vue";

  export default defineComponent({
    // declaração dos componentes
    components: {
      Button,
      FormDivider,
      Header,
      Input,
      PlanCol,
      RegisterTitleVue,
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
        <RegisterTitleVue />
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
