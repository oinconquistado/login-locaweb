import {
  typesOfButtons,
  sizesOfButtons,
  buttonSizeProps,
  buttonMetrics,
} from "../interface/ButtonInterface";

export let buttonSize: buttonSizeProps = {
  width: "",
  height: "",
};

export let buttonVariant: string = "";

export const initButton = (props: any) => {
  if (!props!.button_msg) throw new Error("Button message is required");

  buttonSize = props!.size ? buttonMetrics[props.size] : buttonMetrics.xs;
  buttonVariant = props!.variant ? props.variant : "ghost";
};
