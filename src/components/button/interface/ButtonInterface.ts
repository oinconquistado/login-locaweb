// Define os tipos possíveis de variantes de botões
export type TypesOfButtons = "cta" | "ghost";

// Define os tamanhos possíveis de botões
export type SizesOfButtons = "xs" | "sm" | "md" | "lg" | "xl";

// Define a interface para o tamanho do botão
export interface ButtonSizeProps {
  width: string;
  height: string;
}

// Define o tipo para as métricas de botões
export type ButtonMetrics = {
  [size in SizesOfButtons]: {
    width: string;
    height: string;
  };
};

// Define as propriedades que podem ser passadas para um botão
export type ButtonProps = {
  button_msg: string; // Mensagem que será exibida no botão
  variant?: TypesOfButtons | undefined; // Variante do botão, que pode ser cta ou ghost (opcional)
  size?: SizesOfButtons | undefined; // Tamanho do botão, que pode ser xs, sm, md, lg ou xl (opcional)
};
