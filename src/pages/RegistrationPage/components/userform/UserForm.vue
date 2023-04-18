<script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import { useRegisterStore } from "../../../../stores/useRegisterStore";
  import { useWindowSize } from "vue-window-size";
  import Input from "../../../../components/input/Input.vue";
  import FormField from "./interface/UserFormTypes";

  export default defineComponent({
    // declaração das props
    props: {},
    components: {
      Input,
    },
    setup() {
      // declaração da store
      const registerStore = useRegisterStore();
      // desestruturação dos campos do formulário
      const { name, phone, email, password, confirmPassword } = registerStore;

      // Obtém a largura da janela
      const { width } = useWindowSize();

      // campos do formulário
      const formFields: FormField[] = [
        {
          label: "Nome completo",
          model: ref(name),
          name: "name",
          placeholder: "Informe seu nome completo",
          required: true,
          type: "text",
        },
        {
          label: "Celular",
          model: ref(phone),
          name: "phone",
          placeholder: "(99) 9 9999-9999",
          required: true,
          type: "text",
        },
        {
          label: "E-mail",
          model: ref(email),
          name: "email",
          placeholder: "Informe seu e-mail",
          required: true,
          type: "text",
        },
        {
          label: "Senha",
          model: ref(password),
          name: "password",
          placeholder: "Informe sua senha",
          required: true,
          type: "password",
          tooltip: "A senha deve conter no mínimo 8 caracteres.",
        },
        {
          label: "Confirmar senha",
          model: ref(confirmPassword),
          name: "confirmPassword",
          placeholder: "Confirme sua senha",
          required: true,
          type: "password",
        },
      ];

      // Define uma propriedade computada para o tamanho responsivo do input
      const responsiveInput = computed(() => {
        // Retorna "small" se a largura da janela for menor que 640px e "medium" caso contrário
        return width.value < 640 ? "small" : "medium";
      });

      return { responsiveInput, formFields };
    },
  });
</script>
<template>
  <!-- formulário de registro -->

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
    v-model="field.model.value"
    :tooltip="field.tooltip"
  />
</template>
