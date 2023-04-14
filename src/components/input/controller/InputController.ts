import { InputMetrics, InputProps } from "../interface/InputInterface";
import labelTreatment from "../utils/InputLabelTreatment";
// import setDefaultProps from "../utils/InputSetDefaults";
import validateProps from "../utils/InputValidateProps";

// Definindo as medidas para cada tamanho de input
const InputMetrics: InputMetrics = {
  mobile: {
    width: "333px",
    height: "60px",
  },
  form: {
    width: "551px",
    height: "60px",
  },
  login: {
    width: "551px",
    height: "80px",
  },
};

// Função principal para inicializar o input
export const initInput = async (props: InputProps) => {
  labelTreatment(props);
  validateProps(props);
  //todo: implementar setDefaultProps
  // setDefaultProps(props);
};
