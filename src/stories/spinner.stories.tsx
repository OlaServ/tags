import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgressProps } from "@mui/material";
import { Spinner } from "../components/spinner/spinner";

const meta: Meta<CircularProgressProps> = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpinnerComponent: Story = {};
