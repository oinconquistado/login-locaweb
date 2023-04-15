import * as Types from "../interface/ButtonInterface";

// Definindo as medidas para cada tamanho de botão
const buttonMetrics: Types.ButtonMetrics = {
  // Tamanho: "xs"
  xs: {
    height: "56px",
    width: "245px",
  },
  // Tamanho: "sm"
  sm: {
    height: "56px",
    width: "248px",
  },
  // Tamanho: "md"
  md: {
    height: "60px",
    width: "333px",
  },
  // Tamanho: "lg"
  lg: {
    height: "60px",
    width: "551px",
  },
  // Tamanho: "xl"
  xl: {
    height: "80px",
    width: "551px",
  },
};

// Definindo variante padrão do botão
export let buttonVariant: string;

// Definindo tamanho padrão do botão
export let buttonSize: Types.ButtonSizeProps;

// Função auxiliar para validar as propriedades do botão
const validateProps = (props: Types.ButtonProps) => {
  // Verificando se a prop "button_msg" foi passada
  if (!props.button_msg) {
    throw new Error("Button message is required");
  }

  // Verificando se a prop "size" é válida
  if (props.size && !buttonMetrics[props.size]) {
    throw new Error("Invalid button size");
  }

  // Verificando se a prop "variant" é válida
  if (props.variant && !["cta", "ghost"].includes(props.variant)) {
    throw new Error("Invalid button variant");
  }
};

// Função principal para inicializar o botão
export const initButton = async (props: Types.ButtonProps) => {
  validateProps(props);

  // Definindo tamanho do botão de acordo com a prop "size"
  buttonSize = buttonMetrics[props.size ?? "xs"];

  // Definindo variante do botão de acordo com a prop "variant"
  buttonVariant = props.variant ?? "ghost";
};
