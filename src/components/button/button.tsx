import { ButtonProps } from "@mui/material";

import { ButtonElements as el } from "./button.elements";
export const Button = ({ children, ...rest }: ButtonProps) => {
  return <el.Container {...rest}>{children}</el.Container>;
};
