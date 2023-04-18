import { inputTypes } from "../../../../../components/input/interface/InputInterface";

// declaração dos campos do formulário
interface FormField {
  label: string;
  value: string;
  name: string;
  placeholder: string;
  required: boolean;
  type: inputTypes;
  tooltip?: string;
  setter: (value: string) => void;
}

// export default formFields;
export default FormField;
