import { InputProps } from "../interface/InputInterface";

export let treatedLabel: string = "";

// função que trata o label do input
const labelTreatment = (props: InputProps) => {
  if (props.label)
    treatedLabel = props.label.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
};

export default labelTreatment;
