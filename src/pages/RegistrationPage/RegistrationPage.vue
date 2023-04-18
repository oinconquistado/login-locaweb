<script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import { plans } from "../PlansPage/components/PlansContainer/data/Plans";
  import Button from "../../components/button/Button.vue";
  import Input from "../../components/input/Input.vue";
  import PlanCol from "../PlansPage/components/PlanCol/PlanCol.vue";
  import PlansHeader from "../PlansPage/components/PlansHeader/PlansHeader.vue";
  import { useWindowSize } from "vue-window-size";
  export default defineComponent({
    // declaração dos componentes
    components: {
      Button,
      Input,
      PlanCol,
      PlansHeader,
    },
    setup() {
      // declaração das variáveis
      const websitename = ref("");
      const termsChecked = ref(true);

      // declaração dos campos do formulário
      const formFields = [
        {
          label: "Nome completo",
          model: ref(""),
          name: "name",
          placeholder: "Informe seu nome completo",
          required: true,
          type: "text",
        },
        {
          label: "Celular",
          model: ref(""),
          name: "phone",
          placeholder: "(99) 9 9999-9999",
          required: true,
          type: "text",
        },
        {
          label: "E-mail",
          model: ref(""),
          name: "email",
          placeholder: "Informe seu e-mail",
          required: true,
          type: "text",
        },
        {
          label: "Senha",
          model: ref(""),
          name: "password",
          placeholder: "Informe sua senha",
          required: true,
          type: "password",
        },
        {
          label: "Confirmar senha",
          model: ref(""),
          name: "confirmPassword",
          placeholder: "Confirme sua senha",
          required: true,
          type: "password",
        },
      ];
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

      return {
        formFields,
        plans,
        responsiveButton,
        responsiveInput,
        termsChecked,
        websitename,
        width,
      };
    },
  });
</script>
<template>
  <div class="registration-page">
    <PlansHeader subtitle="vender on-line" />
    <div class="register_container">
      <div class="register_container-box_register">
        <!-- títulos da página de registro -->
        <div class="register_container-box_register-titles">
          <h1 class="register_container-box_register-titles--title">
            Dados Pessoais
          </h1>
          <h2 class="register_container-box_register-titles--subtitle">
            Informe seus dados pessoais para acesso à sua conta
          </h2>
        </div>

        <!-- formulário de registro -->
        <form class="register-form">
          <Input
            v-for="(field, index) in formFields"
            :key="index"
            :label="field.label"
            v-model="field.model.value"
            :name="field.name"
            :placeholder="field.placeholder"
            :required="field.required"
            input-type="text"
            :size="responsiveInput"
          />
        </form>

        <!-- divider -->
        <div class="divider_section">
          <img src="../../assets/icons/divider-large.svg" alt="" />
        </div>

        <!-- segunda seção -->
        <div class="website_register">
          <div class="website_register-titles">
            <h1 class="website_register-titles--title">Dados do seu website</h1>
          </div>

          <Input
            class="mainbox--input_email"
            input-type="text"
            label="Nome do seu site"
            v-model="websitename"
            placeholder="Meu site"
            :size="responsiveInput"
          />

          <!-- divider -->
          <div class="divider_section">
            <img src="../../assets/icons/divider-large.svg" alt="" />
          </div>
        </div>

        <!-- termos de uso -->
        <div class="user_terms">
          <label>
            <input class="checkbox" v-model="termsChecked" type="checkbox" />
          </label>
          <p>
            Ao concluir com seu cadastro vocé concorda com nossos termos de uso
            e politicas de privacidade.
          </p>
        </div>

        <!-- button container -->
        <div class="register_container-box_register-button">
          <Button
            button_msg="criar conta"
            variant="cta"
            :size="responsiveButton"
          />
        </div>
      </div>

      <!-- plano escolhido -->
      <div class="plancol_container">
        <!-- container trocar de plano -->
        <div class="change_plan_container">
          <Button button_msg="Trocar plano" size="xs" variant="ghost" />
        </div>
        <div class="plan_selected_container">
          <p class="plan_selected_container--text">Plano Escolhido</p>
        </div>
        <PlanCol
          class="plancol_component"
          :sections="plans.plan1"
          :forcedHeight="'1033px'"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
  /* importação do arquivo de estilos */
  @import url("./style/RegistrationPageStyle.css");
</style>
