// Define os tipos possíveis de variantes de botões
type TypesOfButtons = "cta" | "ghost";

// Define os tamanhos possíveis de botões
type SizesOfButtons = "xs" | "sm" | "md" | "lg" | "xl";

// Define a interface para o tamanho do botão
interface ButtonSizeProps {
  height: string;
  width: string;
}

// Define o tipo para as métricas de botões
type ButtonMetrics = {
  [size in SizesOfButtons]: {
    height: string;
    width: string;
  };
};

// Define as propriedades que podem ser passadas para um botão
type ButtonProps = {
  button_msg: string; // Mensagem que será exibida no botão
  size?: SizesOfButtons | undefined; // Tamanho do botão, que pode ser xs, sm, md, lg ou xl (opcional)
  variant?: TypesOfButtons | undefined; // Variante do botão, que pode ser cta ou ghost (opcional)
};

export type {
  TypesOfButtons,
  SizesOfButtons,
  ButtonSizeProps,
  ButtonMetrics,
  ButtonProps,
};
