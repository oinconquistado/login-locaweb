// Define os tamanhos possíveis de inputs
export type sizesOfInputs = "login" | "form" | "mobile";

// Define os tipos possíveis de botões
export type inputTypes = "text" | "password";

// Define os estados possíveis para o autocomplete dos inputs
export type autocompleteStatus = "on" | "off";

// Define o tipo para as métricas de botões
export type InputMetrics = {
  [size in sizesOfInputs]: {
    width: string;
    height: string;
  };
};
// Define as propriedades que podem ser passadas para um Input
export interface InputProps {
  label: string;
  modelValue: string;
  placeholder?: string;
  inputType: inputTypes;
  size?: sizesOfInputs;
  autocomplete?: autocompleteStatus;
  maxLength?: string;
  minLength?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  description?: string;
  descriptionIsVisible?: boolean;
  tabIndex?: number;
}
