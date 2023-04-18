<script lang="ts">
  import { defineComponent } from "vue";
  import Button from "../../components/button/Button.vue";
  import FormDivider from "../../components/formdivider/FormDivider.vue";
  import Header from "../../components/header/Header.vue";
  import Input from "../../components/input/Input.vue";
  import PlanCol from "../../components/plancol/PlanCol.vue";
  import RegisterButton from "./components/registerbutton/RegisterButton.vue";
  import RegisterTitleVue from "./components/registertitle/RegisterTitle.vue";
  import SelectedPlan from "./components/selectplan/SelectedPlan.vue";
  import UserForm from "./components/userform/UserForm.vue";
  import UserTerms from "./components/userterms/UserTerms.vue";
  import WebsiteForm from "./components/websiteform/WebsiteForm.vue";
  import { plans } from "../PlansPage/components/PlansContainer/data/Plans";
  import formFields from "./data/RegistrationForm";

  export default defineComponent({
    // declaração dos componentes
    components: {
      Button,
      FormDivider,
      Header,
      Input,
      PlanCol,
      RegisterButton,
      RegisterTitleVue,
      SelectedPlan,
      UserForm,
      UserTerms,
      WebsiteForm,
    },
    setup() {
      return {
        formFields,
        plans,
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
        <form class="register-form">
          <!-- formulário do usuário -->
          <UserForm :formFields="formFields" />
          <!-- formulário do site -->
          <WebsiteForm />
          <!-- termo de uso -->
          <UserTerms />
          <!-- button container -->
          <RegisterButton />
        </form>
      </div>

      <!-- container da coluna de planos -->
      <SelectedPlan :plans="plans.plan1" />
    </div>
  </div>
</template>
<style scoped>
  /* importação do arquivo de estilos */
  @import url("./style/RegistrationPageStyle.css");
  /* importação do arquivo de estilos mobile */
  @import url("./style/RegistrationPageStyleMobile.css");
</style>
