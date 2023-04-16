import { InputProps } from "../interface/InputInterface";
import treatInputProps from "../utils/inputSetDefaultProps";
import validateInputProps from "../utils/InputValidateProps";

// Função principal para inicializar o input
export const initInput = (props: InputProps) => {
  // Validando as propriedades do input
  validateInputProps(props);
  // Tratando as propriedades do input
  treatInputProps(props);
};
