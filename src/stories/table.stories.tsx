import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "../components/table/table";

const meta = {
  title: "Components/Table",
  component: Table<"name" | "count" | "test">,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TableComponent: Story = {
  args: {

    rows: [{name: "any", count: 7, test: "x"},],
   
  }
};
