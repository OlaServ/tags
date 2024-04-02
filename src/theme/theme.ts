import { createTheme } from "@mui/material";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const theme = createTheme({
  typography: {
    fontFamily: [manrope.style.fontFamily].join(","),
  },
});
