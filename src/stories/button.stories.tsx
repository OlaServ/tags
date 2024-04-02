import type { Meta, StoryObj } from "@storybook/react";
import { ButtonProps } from "@mui/material";

import { Button } from "../components/button/button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonComponent: Story = {
  args: {
    children: "Button",
  },
};
