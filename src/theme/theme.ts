import { createTheme } from "@mui/material";
import { responsiveFontSizes } from "@mui/material/styles";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

const theme = createTheme({
  typography: {
    fontFamily: [manrope.style.fontFamily].join(","),
    h1: {
      textAlign: "center",
    },
    h2: {
      textAlign: "center",
    },
  },
});

export default responsiveFontSizes(theme);
