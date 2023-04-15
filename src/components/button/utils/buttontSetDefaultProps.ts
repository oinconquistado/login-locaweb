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

// Definindo a variante do botão
let buttonVariant: string;

// Definindo tamanho padrão do botão
let buttonSize: Types.ButtonSizeProps;

const treatButtonProps = async (props: Types.ButtonProps) => {
  // Definindo tamanho do botão de acordo com a prop "size"
  buttonSize = buttonMetrics[props.size ?? "xs"];

  // Definindo variante do botão de acordo com a prop "variant"
  buttonVariant = props.variant ?? "ghost";
};

export default treatButtonProps;
export { buttonVariant, buttonSize };
