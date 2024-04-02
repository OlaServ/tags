"use client";
import { ThemeProvider } from "@/theme/theme-provider";
import { RootTemplate } from "@/components/root-template/root-template";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootTemplate>{children}</RootTemplate>;
}
