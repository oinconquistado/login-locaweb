import { Ref } from "vue";

// declaração dos campos do formulário
interface FormField {
  label: string;
  model: Ref<string>;
  name: string;
  placeholder: string;
  required: boolean;
  type: string;
}

// export default formFields;
export default FormField;
