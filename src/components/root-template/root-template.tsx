"use client";
import { ThemeProvider } from "@/theme/theme-provider";

import { RootTemplateElements as el } from "./root-template.elements";

export const RootTemplate = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider>
      <el.Container>{children}</el.Container>
    </ThemeProvider>
  );
};
