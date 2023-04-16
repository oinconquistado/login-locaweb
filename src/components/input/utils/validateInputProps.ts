import { InputProps } from "../interface/InputInterface";

const validateInputProps = (props: InputProps) => {
  // Verifica se a propriedade autocomplete é válida
  if (props.autocomplete && !["off", "on"].includes(props.autocomplete)) {
    throw new Error(
      `Propriedade autocomplete inválida: ${props.autocomplete}. Deve ser uma das opções ["off", "on"].`
    );
  }

  // Verifica se a propriedade description é válida
  if (props.description && typeof props.description !== "string") {
    throw new Error(
      `Propriedade description inválida: ${props.description}. Deve ser do tipo string.`
    );
  }

  // Verifica se a propriedade descriptionIsVisible é válida
  if (
    props.descriptionIsVisible &&
    typeof props.descriptionIsVisible !== "boolean"
  ) {
    throw new Error(
      `Propriedade descriptionIsVisible inválida: ${props.descriptionIsVisible}. Deve ser do tipo boolean.`
    );
  }

  // Verifica se a propriedade inputType é válida
  if (!["password", "text"].includes(props.inputType)) {
    throw new Error(
      `Propriedade inputType inválida: ${props.inputType}. Deve ser uma das opções ["password", "text"].`
    );
  }

  // Verifica se a propriedade isDisabled é válida
  if (props.isDisabled && typeof props.isDisabled !== "boolean") {
    throw new Error(
      `Propriedade isDisabled inválida: ${props.isDisabled}. Deve ser do tipo boolean.`
    );
  }

  // Verifica se a propriedade isReadOnly é válida
  if (props.isReadOnly && typeof props.isReadOnly !== "boolean") {
    throw new Error(
      `Propriedade isReadOnly inválida: ${props.isReadOnly}. Deve ser do tipo boolean.`
    );
  }

  // Verifica se a propriedade isRequired é válida
  if (props.isRequired && typeof props.isRequired !== "boolean") {
    throw new Error(
      `Propriedade isRequired inválida: ${props.isRequired}. Deve ser do tipo boolean.`
    );
  }

  // Verifica se a propriedade label é válida
  if (!props.label || typeof props.label !== "string") {
    throw new Error(
      `Propriedade label inválida: ${props.label}. Deve ser do tipo string e não pode ser vazia.`
    );
  }

  // Verifica se a propriedade maxLength é válida
  if (props.maxLength && typeof props.maxLength !== "string") {
    throw new Error(
      `Propriedade maxLength inválida: ${props.maxLength}. Deve ser do tipo string.`
    );
  }

  // Verifica se a propriedade minLength é válida
  if (props.minLength && typeof props.minLength !== "string") {
    throw new Error(
      `Propriedade minLength inválida: ${props.minLength}. Deve ser do tipo string.`
    );
  }
};

export default validateInputProps;
