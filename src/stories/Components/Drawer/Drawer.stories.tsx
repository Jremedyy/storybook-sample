import type { Meta, StoryObj } from "@storybook/react";

import { FilterDrawer, FilterOption, FilterProps, NavDrawer } from "../../../components";
import { useArgs } from "@storybook/preview-api";
import SortDrawer from "@/components/SortDrawer/SortDrawer";

const meta = {
  title: "Components/Drawer",
  component: FilterDrawer,
  decorators: [
    (Story, ctx) => {
      const [, setArgs] = useArgs();

      const close = () => {
        setArgs({ isVisible: false });
      };

      return <Story args={{ ...ctx.args, close }} />;
    },
  ],
  argTypes: {
    isVisible: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof FilterDrawer>;

export default meta;
type Story = StoryObj<typeof FilterDrawer>;

export const Filter: Story = {
  name: "FilterDrawer",
  args: { isVisible: false },
  loaders: [
    async () => ({
      searchOptionsResponse: await (
        await fetch("https://api.dev.swamptrades.com/v1/search-options/politicians")
      ).json(),
    }),
  ],
  render: (args, { loaded: { searchOptionsResponse } }) => {
    const filters = searchOptionsResponse.filters.map((filter: FilterProps) => {
      return {
        ...filter,
      };
    });

    return <FilterDrawer {...args} filters={filters} selectedOptions={{}} onExited={() => {}}/>;
  },
  parameters: { layout: "fullscreen" },
};

export const Nav: Story = {
  name: "NavDrawer",
  args: { isVisible: false },
  render: (args) => {
    const items = [
      {
        title: "Politicians",
        url: "https://dev.swamptrades.com/politicians",
        isCurrentPage: false
      },
      {
        title: "Trades",
        url: "https://dev.swamptrades.com/trades",
        isCurrentPage: false
      },
      {
        title: "News",
        url: "https://dev.swamptrades.com/news",
        isCurrentPage: true
      },
    ];

    return <NavDrawer items={items} {...args} />;
  },
  parameters: { layout: "fullscreen" },
};

export const Sort: Story = {
  name: "SortDrawer",
  args: { isVisible: false },
  loaders: [
    async () => ({
      searchOptionsResponse: await (
        await fetch("https://api.dev.swamptrades.com/v1/search-options/politicians")
      ).json(),
    }),
  ],
  render: (args, { loaded: { searchOptionsResponse } }) => {
    return <SortDrawer sortOptions={searchOptionsResponse.sortOptions} selectedOption={searchOptionsResponse.sortOptions[2]} {...args} onExited={() => {}} />;
  },
  parameters: { layout: "fullscreen" },
};