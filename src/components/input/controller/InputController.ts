import { InputProps } from "../interface/InputInterface";
import treatInputProps from "../utils/inputSetDefaultProps";
import validateInputProps from "../utils/InputValidateProps";

// Função principal para inicializar o input
export const initInput = async (props: InputProps) => {
  validateInputProps(props);
  treatInputProps(props);
};
