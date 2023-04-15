import {
  ButtonSizeProps,
  ButtonProps,
  ButtonMetrics,
} from "../interface/ButtonInterface";

// Definindo tamanho padrão do botão
export let buttonSize: ButtonSizeProps;

// Definindo as medidas para cada tamanho de botão
const buttonMetrics: ButtonMetrics = {
  xs: {
    width: "245px",
    height: "56px",
  },
  sm: {
    width: "248px",
    height: "56px",
  },
  md: {
    width: "333px",
    height: "60px",
  },
  lg: {
    width: "551px",
    height: "60px",
  },
  xl: {
    width: "551px",
    height: "80px",
  },
};

// Definindo variante padrão do botão
export let buttonVariant: string;

// Função auxiliar para validar as propriedades do botão
const validateProps = (props: ButtonProps) => {
  if (!props.button_msg) {
    throw new Error("Button message is required");
  }

  if (props.size && !buttonMetrics[props.size]) {
    throw new Error("Invalid button size");
  }

  if (props.variant && !["cta", "ghost"].includes(props.variant)) {
    throw new Error("Invalid button variant");
  }
};

// Função principal para inicializar o botão
export const initButton = async (props: ButtonProps) => {
  validateProps(props);

  // Definindo tamanho do botão de acordo com a prop "size"
  buttonSize = buttonMetrics[props.size ?? "xs"];

  // Definindo variante do botão de acordo com a prop "variant"
  buttonVariant = props.variant ?? "ghost";
};
