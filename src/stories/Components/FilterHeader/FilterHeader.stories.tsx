import type { Meta, StoryObj } from "@storybook/react";

import { FilterHeader } from "@/components";

const meta = {
  title: "Components/FilterHeader",
  component: FilterHeader,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof FilterHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    headerTitle: "Politicians",
    filterSummary: {
      time: "250",
      politicians: "400k",
      volume: "3000",
      filings: "6700",
      trades: "5000",
    },
    filters: [],
    isLoading: false,
  },
};