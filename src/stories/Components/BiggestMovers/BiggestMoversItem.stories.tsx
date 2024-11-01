import type { Meta, StoryObj } from "@storybook/react";

import { BiggestMoversItem } from "@/components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/BiggestMoversItem",
  component: BiggestMoversItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout

    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof BiggestMoversItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    index: 0,
    politicianId: "",
    avatarImage: "https://www.congress.gov/img/member/p000197_200.jpg",
    politicianName: "Nancy Pelosi",
    politicianRole: "House",
    politicianParty: "Democrat",
    politicianState: "TX",
    value: "$12M",
    valueLabel: "Volume",
    selectedToggle: ""
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fpGtmhcFcgnBgGnTxTftF9/ST---DRAFT?node-id=126%3A959&mode=dev",
    },
  },
};