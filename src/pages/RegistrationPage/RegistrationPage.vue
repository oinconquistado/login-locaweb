<script lang="ts">
  import { defineComponent, computed, ref } from "vue";
  import { plans } from "../PlansPage/components/PlansContainer/data/Plans";
  import Button from "../../components/button/Button.vue";
  import FormDivider from "../../components/formdivider/FormDivider.vue";
  import Header from "../../components/header/Header.vue";
  import Input from "../../components/input/Input.vue";
  import PlanCol from "../../components/plancol/PlanCol.vue";
  import RegisterTitleVue from "./components/registertitle/RegisterTitle.vue";
  import SelectedPlan from "./components/selectplan/SelectedPlan.vue";
  import { useRoute } from "vue-router";
  import { useRegisterStore } from "../../stores/useRegisterStore";
  import { useWindowSize } from "vue-window-size";
  import FormField from "./interfaces/UserFormTypes";
  import axios from "axios";

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
    },

    setup() {
      // declaração da rota
      const route = useRoute();
      // desestruturação dos parâmetros da rota
      const { params } = route;

      // Obtém a largura da janela
      const { width } = useWindowSize();

      // Define uma propriedade computada para o tamanho responsivo do input
      const responsiveInput = computed(() => {
        // Retorna "small" se a largura da janela for menor que 640px e "large" caso contrário
        return width.value < 640 ? "small" : "medium";
      });

      const responsiveButton = computed(() => {
        // Retorna "xs" se a largura da janela for menor que 640px e "xl" caso contrário
        return width.value < 640 ? "md" : "xl";
      });

      // declaração do store
      const registerStore = useRegisterStore();

      const formFields: FormField[] = [
        {
          label: "Nome completo",
          value: registerStore.getName,
          name: "name",
          placeholder: "Informe seu nome completo",
          required: true,
          type: "text",
          setter: (value) => registerStore.setName(value),
        },
        {
          label: "Celular",
          value: registerStore.getPhone,
          name: "phone",
          placeholder: "(99) 9 9999-9999",
          required: true,
          type: "text",
          setter: (value) => registerStore.setPhone(value),
        },
        {
          label: "E-mail",
          value: registerStore.getEmail,
          name: "email",
          placeholder: "Informe seu e-mail",
          required: true,
          type: "text",
          setter: (value) => registerStore.setEmail(value),
        },
        {
          label: "Senha",
          value: registerStore.getPassword,
          name: "password",
          placeholder: "Informe sua senha",
          required: true,
          type: "password",
          tooltip: "A senha deve conter no mínimo 8 caracteres.",
          setter: (value) => registerStore.setPassword(value),
        },
        {
          label: "Confirmar senha",
          value: registerStore.getConfirmPassword,
          name: "confirmPassword",
          placeholder: "Confirme sua senha",
          required: true,
          type: "password",
          setter: (value) => registerStore.setConfirmPassword(value),
        },
      ];

      return {
        plans,
        params,
        responsiveInput,
        responsiveButton,
        formFields,
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
        <form class="register-form" @submit.prevent="">
          <!-- formulário do usuário -->
          <!-- formulário de registro -->
          {{ registerStore.getName }}
          <!-- itera sobre os campos do formulário -->
          <Input
            v-for="(field, index) in formFields"
            :input-type="field.type"
            :key="index"
            :label="field.label"
            :name="field.name"
            :placeholder="field.placeholder"
            :required="field.required"
            :size="responsiveInput"
            :tooltip="field.tooltip"
            :setter="field.setter"
          />
          <!-- divider -->
          <FormDivider />

          <!-- segunda seção -->
          <div class="website_register">
            <!-- título da seção -->
            <div class="website_register-titles">
              <h1 class="website_register-titles--title">
                Dados do seu website
              </h1>
            </div>

            <!-- input do nome do site -->
            <Input
              input-type="text"
              name="WebsiteName"
              label="Nome do seu site"
              placeholder="Meu site"
              :size="responsiveInput"
              required="true"
              tooltip="Exatamente igual ao título do seu site."
            />
          </div>
          <!-- divider -->
          <FormDivider />

          <!-- termo de uso -->
          <div class="user_terms">
            <label>
              <!-- checkbox de termos de uso -->
              <input class="checkbox" type="checkbox" />
            </label>
            <!-- texto de termos de uso -->
            <p>
              Ao concluir com seu cadastro vocé concorda com nossos termos de
              uso e politicas de privacidade.
            </p>
          </div>

          <!-- button container -->
          <!-- container do botão de registro -->
          <div class="register_container-box_register-button">
            <!-- botão de registro -->
            <Button
              button_msg="criar conta"
              variant="cta"
              :size="responsiveButton"
            />
          </div>
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
