import { buttonMetrics } from "../controller/ButtonController";
import * as Types from "../interface/ButtonInterface"; // Definindo variante padrão do botão

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
