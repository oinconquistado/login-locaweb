import * as Types from "../interface/ButtonInterface";
import validateButtonProps from "../utils/buttonValidateProps";
import treatButtonProps from "../utils/buttontSetDefaultProps";

// Função principal para inicializar o botão
const initButton = async (props: Types.ButtonProps) => {
  validateButtonProps(props);
  treatButtonProps(props);
};

export default initButton;
