import { buttonMetrics } from "../controller/ButtonController";
import * as Types from "../interface/ButtonInterface";

// Função auxiliar para validar as propriedades do botão
const validateButtonProps = (props: Types.ButtonProps) => {
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

export default validateButtonProps;
