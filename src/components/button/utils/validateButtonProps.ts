import * as Types from "../interface/ButtonInterface";

/**
 * Valida as propriedades de um componente de botão.
 *
 * @param props - As propriedades a serem validadas.
 * @param props.button_msg - A mensagem a ser exibida no botão.
 * @param props.size - O tamanho do botão.
 * @param props.variant - A variante do botão.
 */
const validateButtonProps = (props: {
  button_msg: string;
  size: Types.SizesOfButtons;
  variant: Types.TypesOfButtons;
}) => {
  // Verifica se button_msg é uma string
  if (typeof props.button_msg !== "string") {
    throw new Error(
      `Propriedade inválida: button_msg deve ser do tipo string. Recebido ${typeof props.button_msg}.`
    );
  }

  // Verifica se o tamanho é válido
  const validSizes: Types.SizesOfButtons[] = ["lg", "md", "sm", "xl", "xs"];
  if (!validSizes.includes(props.size)) {
    throw new Error(
      `Propriedade inválida: size deve ser um dos seguintes valores ${validSizes.join(
        ", "
      )}. Recebido ${props.size}.`
    );
  }

  // Verifica se a variante é válida
  const validVariants: Types.TypesOfButtons[] = ["cta", "ghost"];
  if (!validVariants.includes(props.variant)) {
    throw new Error(
      `Propriedade inválida: variant deve ser um dos seguintes valores ${validVariants.join(
        ", "
      )}. Recebido ${props.variant}.`
    );
  }
};

export default validateButtonProps;
