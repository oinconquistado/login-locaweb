import * as Types from "../interface/ButtonInterface";
import validateButtonProps from "../utils/buttonValidateProps";
import treatButtonProps from "../utils/buttontSetDefaultProps";

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

// Função principal para inicializar o botão
const initButton = async (props: Types.ButtonProps) => {
  validateButtonProps(props);
  treatButtonProps(props);
};

export default initButton;
export { buttonMetrics };
