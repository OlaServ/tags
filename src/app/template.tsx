"use client";
import { ThemeProvider } from "@/theme/theme-provider";
import { Box } from "@mui/material";

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <Box
        sx={{
          display: "flex",
          padding: "40px",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          backgroundColor: "#232325",
       
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}
