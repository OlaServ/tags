import type { Meta, StoryObj } from "@storybook/react";
import { Typography, TypographyProps } from "@mui/material";

import { Button } from "../components/button/button";

const meta: Meta<TypographyProps> = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: "h1",
    color: "#c0ff5b",
    children: "Heading level 1"
  },
};

export const H2: Story = {
    args: {
      variant: "h2",
      color: "#c0ff5b",
      children: "Heading level 2"
    },
  };
  