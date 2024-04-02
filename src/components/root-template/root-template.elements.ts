import { Box, styled } from "@mui/material";

const Container = styled(Box)({
  display: "flex",
  padding: "40px",
  width: "100%",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#232325",
  flexDirection: "column"
});

export const RootTemplateElements = {
  Container,
};
