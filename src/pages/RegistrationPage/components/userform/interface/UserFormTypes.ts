import { Ref } from "vue";

// declaração dos campos do formulário
interface FormField {
  label: string;
  model: Ref<string>;
  name: string;
  placeholder: string;
  required: boolean;
  type: string;
  tooltip?: string;
}

// export default formFields;
export default FormField;
