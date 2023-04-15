// Define os estados possíveis para o autocomplete dos inputs
type autocompleteStatus = "off" | "on";

// define o tipo para as unidades de medida
type measureProps = {
  height: string;
  width: string;
};

// Define o tipo para as métricas de botões
type inputMetrics = {
  [size in sizesOfInputs]: measureProps;
};

// Define os tipos possíveis de botões
type inputTypes = "password" | "text";

// Define os tamanhos possíveis de inputs
type sizesOfInputs = "form" | "login" | "mobile";

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

// Definindo os tipos das propriedades tratadas do input
interface TreatedProps {
  inputAriaDescribedByProp?: string;
  inputAriaLabelProp?: string;
  inputAutocompleteProp?: autocompleteStatus;
  inputDescriptionVisibilityProp?: boolean;
  inputLabelIDProp?: string;
  inputLabelProp?: string;
  inputTabIndexProp?: number;
  inputSizeProp?: measureProps | undefined;
  inputTypeProp?: inputTypes;
}

// Exportando os tipos
export type {
  autocompleteStatus,
  inputMetrics,
  InputProps,
  inputTypes,
  measureProps,
  sizesOfInputs,
  TreatedProps,
};
