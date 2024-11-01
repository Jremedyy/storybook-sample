import type { Meta, StoryObj } from "@storybook/react";

import { PoliticianCardGroup, PoliticianCardGroupProps } from "@/components";

const mockData: PoliticianCardGroupProps = {
  politicians: [
    {
      href: "",
      politicianImage: "https://www.congress.gov/img/member/g000590_200.jpg",
      politicianName: "Nancy Peloci",
      tradeVolume: "1.5M",
      numOfTrades: "46",
      lastTradeDate: "12/22/2023",
      chamber: "House",
      state: "CA",
      politicalParty: "Democratic",
      politicianId: "",
    },
    {
      href: "",
      politicianImage: "https://www.congress.gov/img/member/g000590_200.jpg",
      politicianName: "Nancy Peloci",
      tradeVolume: "1.5M",
      numOfTrades: "46",
      lastTradeDate: "12/22/2023",
      chamber: "House",
      state: "CA",
      politicalParty: "Democratic",
      politicianId: "",
    },
    {
      href: "",
      politicianImage: "https://www.congress.gov/img/member/g000590_200.jpg",
      politicianName: "Nancy Peloci",
      tradeVolume: "1.5M",
      numOfTrades: "46",
      lastTradeDate: "12/22/2023",
      chamber: "House",
      state: "CA",
      politicalParty: "Democratic",
      politicianId: "",
    },
    {
      href: "",
      politicianImage: "https://www.congress.gov/img/member/g000590_200.jpg",
      politicianName: "Nancy Peloci",
      tradeVolume: "1.5M",
      numOfTrades: "46",
      lastTradeDate: "12/22/2023",
      chamber: "House",
      state: "CA",
      politicalParty: "Democratic",
      politicianId: "",
    },
    {
      href: "",
      politicianImage: "https://www.congress.gov/img/member/g000590_200.jpg",
      politicianName: "Nancy Peloci",
      tradeVolume: "1.5M",
      numOfTrades: "46",
      lastTradeDate: "12/22/2023",
      chamber: "House",
      state: "CA",
      politicalParty: "Democratic",
      politicianId: "",
    },
  ],
  isLoading: false
};
const meta = {
  title: "Components/PoliticianCardGroup",
  component: PoliticianCardGroup,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PoliticianCardGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { ...mockData },
};
