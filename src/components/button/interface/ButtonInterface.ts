export type typesOfButtons = "cta" | "ghost";
export type sizesOfButtons = "xs" | "sm" | "md" | "lg" | "xl";

export interface buttonSizeProps {
  width: string;
  height: string;
}

export const buttonMetrics = {
  xs: {
    width: "245px",
    height: "56px",
  },
  sm: {
    width: "248px",
    height: "56px",
  },
  md: {
    width: "333px",
    height: "60px",
  },
  lg: {
    width: "551px",
    height: "60px",
  },
  xl: {
    width: "551px",
    height: "80px",
  },
};
