import { Button, styled } from "@mui/material";

const Container = styled(Button)({
  background: "#232325",
  color: "#c0ff5b",
  textTransform: "uppercase",
  padding: "8px 16px",
  letterSpacing: "3px",
  borderRadius: "12px",
  "&:hover": {
    color: "#FFFFFF",
    background: "#232325",
  },
});

export const ButtonElements = { Container };
