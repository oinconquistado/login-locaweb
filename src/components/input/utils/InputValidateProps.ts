import { InputProps } from "../interface/InputInterface";

// Esta função continua a validação das propriedades passadas como parâmetro, verificando outros campos relevantes.
// Em caso de falha, a função lança um erro com uma mensagem de texto específica.

const validateInputProps = (props: InputProps) => {
  // Verifica se a propriedade 'autocomplete' tem um valor válido
  if (
    props.autocomplete &&
    props.autocomplete !== "off" &&
    props.autocomplete !== "on"
  )
    throw new Error("Autocomplete must be on or off");

  // Verifica se a propriedade 'descriptionIsVisible' tem um valor booleano válido
  if (
    props.descriptionIsVisible &&
    typeof props.descriptionIsVisible !== "boolean"
  )
    throw new Error("Description is visible must be a boolean");

  // Verifica se a propriedade 'inputType' está definida e tem um valor válido
  if (!props.inputType) throw new Error("Input type is required");
  if (props.inputType !== "text" && props.inputType !== "password")
    throw new Error("Input type must be text or password");

  // Verifica se a propriedade 'isDisabled' tem um valor booleano válido
  if (props.isDisabled && typeof props.isDisabled !== "boolean")
    throw new Error("Is disabled must be a boolean");

  // Verifica se a propriedade 'isReadOnly' tem um valor booleano válido
  if (props.isReadOnly && typeof props.isReadOnly !== "boolean")
    throw new Error("Is read only must be a boolean");

  // Verifica se a propriedade 'isRequired' tem um valor booleano válido
  if (props.isRequired && typeof props.isRequired !== "boolean")
    throw new Error("Is required must be a boolean");

  // Verifica se a propriedade 'label' está definida
  if (!props.label) throw new Error("Label is required");

  // Verifica se a propriedade 'label' é do tipo string
  if (typeof props.label !== "string")
    throw new Error("Label must be a string");

  // Verifica se a propriedade 'maxLength' tem um valor válido
  if (props.maxLength && typeof props.maxLength !== "string")
    throw new Error("Max length must be a string");

  // Verifica se a propriedade 'minLength' tem um valor válido
  if (props.minLength && typeof props.minLength !== "string")
    throw new Error("Min length must be a string");

  // Verifica se a propriedade 'size' tem um valor válido, e define o tamanho do input de acordo com o valor recebido
  if (
    props.size &&
    props.size !== "form" &&
    props.size !== "login" &&
    props.size !== "mobile"
  )
    throw new Error("Size must be login, form or mobile");

  // Verifica se a propriedade 'tabIndex' tem um valor numérico válido
  if (props.tabIndex && typeof props.tabIndex !== "number")
    throw new Error("Tab index must be a number");
};

export default validateInputProps;
