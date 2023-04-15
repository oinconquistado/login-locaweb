import * as Types from "../interface/InputInterface";

// Definindo as medidas para cada tamanho de input
const InputMetrics: Types.inputMetrics = {
  // Definindo as medidas para o input de tamanho "form"
  form: {
    height: "52.73px",
    width: "551px",
  },
  // Definindo as medidas para o input de tamanho "login"
  login: {
    height: "70.31px",
    width: "551px",
  },
  // Definindo as medidas para o input de tamanho "mobile"
  mobile: {
    height: "52.73px",
    width: "333px",
  },
};

// Definindo as propriedades tratadas do input
let treatedProps: Types.TreatedProps = {};

// Função que trata as propriedades padrões do input

// TODO: remover o async
const treatInputProps = async (props: Types.InputProps) => {
  // Definindo o autocomplete do input
  if (!props.autocomplete) {
    // Se não for passado um autocomplete, o input recebe o valor "on"
    treatedProps.inputAutocompleteProp = "on";
  } else {
    // Se for passado um autocomplete, o input recebe o valor passado
    treatedProps.inputAutocompleteProp = props.autocomplete;
  }

  // Definindo o tipo do input
  if (!props.inputType) {
    // Se não for passado um tipo, o input recebe o valor "text"
    treatedProps.inputTypeProp = "text";
  } else {
    // Se for passado um tipo, o input recebe o valor passado
    treatedProps.inputTypeProp = props.inputType;
  }

  // Definindo o tabIndex do input
  if (props.isDisabled) {
    // Se o input estiver desabilitado, o tabIndex recebe o valor -1
    treatedProps.inputTabIndexProp = -1;
  } else if (props.tabIndex) {
    // Se o input não estiver desabilitado e for passado um tabIndex, o input recebe o valor passado
    treatedProps.inputTabIndexProp = props.tabIndex;
  } else {
    // Se o input não estiver desabilitado e não for passado um tabIndex, o input recebe o valor 0
    treatedProps.inputTabIndexProp;
  }

  if (!props.size) {
    // Se não for passado um tamanho, o input recebe o valor "form"
    treatedProps.inputSizeProp = InputMetrics["form"];
  }
  if (props.size) {
    // Se for passado um tamanho, o input recebe o valor passado

    treatedProps.inputSizeProp = InputMetrics[props.size];
  }

  // Definindo o label do input
  if (props.label)
    // remove todos os caracteres especiais e espaços do label e converte para minúsculo
    treatedProps.inputLabelProp = props.label
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase();

  // -- acessibilidade

  // Definindo o aria-label do input
  if (props.description) {
    // Se for passado uma descrição, o input recebe o valor passado
    treatedProps.inputAriaDescribedByProp = `${props.label}-description`;
  } else {
    // Se não for passado uma descrição, o input recebe o valor passado
    treatedProps.inputAriaDescribedByProp = "";
  }

  // definindo a visibilidade da descrição
  if (!props.descriptionIsVisible === false) {
    // Se a descrição não for visível, o input recebe o valor passado
    treatedProps.inputDescriptionVisibilityProp = true;
  } else if (props.descriptionIsVisible) {
    // Se a descrição for visível, o input recebe o valor passado
    treatedProps.inputDescriptionVisibilityProp = false;
  }

  if (props.label) {
    // Se for passado um label, o input recebe o valor passado
    treatedProps.inputAriaLabelProp = `${props.label}-label`;
  } else {
    // Se não for passado um label, o input recebe o valor passado
    treatedProps.inputAriaLabelProp = "";
  }
  // definindo a id da label
  if (props.label) {
    // Se for passado um label, o input recebe o valor passado
    treatedProps.inputLabelIDProp = `${props.label}-label`;
  }
};

// Exportando a função e as propriedades tratadas
export default treatInputProps;
export { treatedProps };
