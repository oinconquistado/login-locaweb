<script lang="ts">
  import { computed, defineComponent } from "vue";
  import { useWindowSize } from "vue-window-size";
  import { Button, FormDivider, Input } from "@/components";
  // types
  import FormField from "@/types/UserFormTypes";
  // stores
  import { useRegisterStore } from "@/stores";

  export default defineComponent({
    components: {
      Button,
      FormDivider,
      Input,
    },

    setup() {
      // Obtém a largura da janela
      const responsiveButton = computed(() => {
        // Retorna "xs" se a largura da janela for menor que 640px e "xl" caso contrário
        return width.value < 640 ? "md" : "xl";
      });

      const responsiveInput = computed(() => {
        // Retorna "small" se a largura da janela for menor que 640px e "large" caso contrário
        return width.value > 640 ? "medium" : "small";
      });

      // declaração do store
      const registerStore = useRegisterStore();

      const { width } = useWindowSize();
      // Define uma propriedade computada para o tamanho responsivo do input

      const formFields: FormField[] = [
        {
          label: "Celular",
          value: registerStore.getPhone,
          name: "phone",
          placeholder: "(99) 9 9999-9999",
          required: true,
          type: "text",
          setter: (value: string) => registerStore.setPhone(value),
        },
        {
          label: "Confirmar senha",
          value: registerStore.getConfirmPassword,
          name: "confirmPassword",
          placeholder: "Confirme sua senha",
          required: true,
          type: "password",
          setter: (value: string) => registerStore.setConfirmPassword(value),
        },
        {
          label: "E-mail",
          value: registerStore.getEmail,
          name: "email",
          placeholder: "Informe seu e-mail",
          required: true,
          type: "text",
          setter: (value: string) => registerStore.setEmail(value),
        },
        {
          label: "Nome completo",
          value: registerStore.getName,
          name: "name",
          placeholder: "Informe seu nome completo",
          required: true,
          type: "text",
          setter: (value: string) => registerStore.setName(value),
        },
        {
          label: "Senha",
          value: registerStore.getPassword,
          name: "password",
          placeholder: "Informe sua senha",
          required: true,
          type: "password",
          tooltip: "A senha deve conter no mínimo 8 caracteres.",
          setter: (value: string) => registerStore.setPassword(value),
        },
      ];
      return { formFields, responsiveButton, responsiveInput };
    },
  });
</script>

<template>
  <form class="register-form" @submit.prevent="">
    <!-- formulário do usuário -->
    <!-- formulário de registro -->

    <!-- itera sobre os campos do formulário -->
    <Input
      :input-type="field.type"
      :key="index"
      :label="field.label"
      :name="field.name"
      :placeholder="field.placeholder"
      :required="field.required"
      :setter="field.setter"
      :size="responsiveInput"
      :tooltip="field.tooltip"
      v-for="(field, index) in formFields"
    />
    <!-- divider -->
    <FormDivider />

    <!-- segunda seção -->
    <div class="website_register">
      <!-- título da seção -->
      <div class="website_register-titles">
        <h1 class="website_register-titles--title">Dados do seu website</h1>
      </div>

      <!-- input do nome do site -->
      <Input
        :size="responsiveInput"
        input-type="text"
        label="Nome do seu site"
        name="WebsiteName"
        placeholder="Meu site"
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
        Ao concluir com seu cadastro vocé concorda com nossos termos de uso e
        politicas de privacidade.
      </p>
    </div>

    <!-- button container -->
    <!-- container do botão de registro -->
    <div class="register_container-box_register-button">
      <!-- botão de registro -->
      <Button button_msg="criar conta" :size="responsiveButton" variant="cta" />
    </div>
  </form>
</template>
<style scoped>
  @import url("./style/UserFormStyle.css");
</style>
