"use client"
import { ThemeProvider } from "@/theme/theme-provider";

export default function RootTemplate({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <ThemeProvider>
        {children}
      </ThemeProvider>
    );
  }
  