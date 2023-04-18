import { Ref } from "vue";

// declaração dos campos do formulário
interface FormField {
  label: string;
  value: string;
  name: string;
  placeholder: string;
  required: boolean;
  type: string;
  tooltip?: string;
  setter: (value: string) => void;
}

// export default formFields;
export default FormField;
