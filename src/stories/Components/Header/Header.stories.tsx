import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "@/components";

const meta = {
  title: "Components/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "NavDrawer",
  render: (args) => {
    return <Header {...args} />;
  },
  args: {
    logoUrl: "https://dev.swamptrades.com/",
    navItems: [
      {
        title: "Politicians",
        url: "https://dev.swamptrades.com/politicians",
        isCurrentPage: true,
      },
      {
        title: "Trades",
        url: "https://dev.swamptrades.com/trades",
        isCurrentPage: false,
      },
      {
        title: "News",
        url: "https://dev.swamptrades.com/news",
        isCurrentPage: false,
      },
    ],
  },
  parameters: { layout: "fullscreen" },
};
