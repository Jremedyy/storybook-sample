import type { Meta, StoryObj } from "@storybook/react";

import { TradingViewTickerTape } from "../../../components";

const meta: Meta<typeof TradingViewTickerTape> = {
  title: "Components/TradingViewTickerTape",
  decorators: [
    (Story) => (
      <div style={{ padding: "10px 0 0 0" }}>
        <Story />
      </div>
    ),
  ],
  component: TradingViewTickerTape,
};

export default meta;
type Story = StoryObj<typeof TradingViewTickerTape>;

export const Default: Story = {
  name: "TradingViewTickerTape",
  args: {},
  parameters: { layout: "fullscreen" },
};
