// Define os estados possíveis para o autocomplete dos inputs
type autocompleteStatus = "off" | "on";

// Define o tipo para as propriedades de medida
type measureProps = {
  height: string;
  width: string;
};

// Define o tipo para as métricas de inputs
type inputMetrics = {
  [size in sizesOfInputs]: measureProps;
};

// Define os tipos possíveis de inputs
type inputTypes = "password" | "text";

// Define os tamanhos possíveis de inputs
type sizesOfInputs = "small" | "medium" | "large";

// Define as propriedades que podem ser passadas para um Input
interface InputProps {
  autocomplete?: autocompleteStatus;
  description?: string;
  descriptionIsVisible?: boolean;
  inputType: inputTypes;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  label: string;
  maxLength?: string;
  minLength?: string;
  modelValue: string;
  placeholder?: string;
  size?: sizesOfInputs;
  tabIndex?: number;
}

// Exporta os tipos
export type {
  autocompleteStatus,
  inputMetrics,
  InputProps,
  inputTypes,
  measureProps,
  sizesOfInputs,
};
