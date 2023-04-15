import { InputProps } from "../interface/InputInterface";
import { treatProps } from "../utils/inputSetDefaultProps";
import validateProps from "../utils/InputValidateProps";

// Função principal para inicializar o input
export const initInput = async (props: InputProps) => {
  validateProps(props);
  treatProps(props);
};
