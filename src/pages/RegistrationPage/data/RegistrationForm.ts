import { ref } from "vue";

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

export default formFields;
