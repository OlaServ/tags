import { ReactNode } from "react";
import { ThemeProvider as MUIProvider } from "@mui/material";
import theme  from "./theme";


export const ThemeProvider = ({ children }: { children: ReactNode
 }) => {
  return <MUIProvider theme={theme}>{children}</MUIProvider>;
};
