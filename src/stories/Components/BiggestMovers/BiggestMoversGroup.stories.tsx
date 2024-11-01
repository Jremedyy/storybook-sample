import type { Meta, StoryObj } from "@storybook/react";

import { BiggestMoversGroup } from "@/components";

const meta = {
  title: "Components/BiggestMoversGroup",
  component: BiggestMoversGroup,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof BiggestMoversGroup>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    viewAllLink: "",
    mostActive: [
      {
        index: 0,
        avatarImage: "https://www.congress.gov/img/member/t000278_200.jpg",
        politicianId: "tommy-tuberville-t000278",
        politicianName: "Tommy Tuberville",
        politicianRole: "Senate",
        politicianParty: "Republican",
        politicianState: "AL",
        value: "24",
        valueLabel: "Trades",
        selectedToggle: "mostActive"
      },
      {
        index: 1,
        avatarImage: "https://www.congress.gov/img/member/115_rp_nj_5_gottheimer_josh_200.jpg",
        politicianId: "josh-gottheimer-g000583",
        politicianName: "Josh Gottheimer",
        politicianRole: "House",
        politicianParty: "Democratic",
        politicianState: "NJ",
        value: "20",
        valueLabel: "Trades",
        selectedToggle: "mostActive"
      },
      {
        index: 2,
        avatarImage: "https://www.congress.gov/img/member/g000596_200.jpg",
        politicianId: "marjorie-taylor-greene-g000596",
        politicianName: "Marjorie Taylor Greene",
        politicianRole: "House",
        politicianParty: "Republican",
        politicianState: "GA",
        value: "12",
        valueLabel: "Trades",
        selectedToggle: "mostActive"
      },
      {
        index: 3,
        avatarImage: "https://www.congress.gov/img/member/k000375_200.jpg",
        politicianId: "william-r-keating-k000375",
        politicianName: "William R. Keating",
        politicianRole: "House",
        politicianParty: "Democratic",
        politicianState: "MA",
        value: "9",
        valueLabel: "Trades",
        selectedToggle: "mostActive"
      },
      {
        index: 4,
        avatarImage: "https://www.congress.gov/img/member/h001082_200.jpg",
        politicianId: "kevin-hern-h001082",
        politicianName: "Kevin Hern",
        politicianRole: "House",
        politicianParty: "Republican",
        politicianState: "OK",
        value: "6",
        valueLabel: "Trades",
        selectedToggle: "mostActive"
      },
      {
        index: 5,
        avatarImage: "https://www.congress.gov/img/member/p000197_200.jpg",
        politicianId: "nancy-pelosi-p000197",
        politicianName: "Nancy Pelosi",
        politicianRole: "House",
        politicianParty: "Democratic",
        politicianState: "CA",
        value: "6",
        valueLabel: "Trades",
        selectedToggle: "mostActive"
      },
      {
        index: 6,
        avatarImage: "https://www.congress.gov/img/member/d000399_200.jpg",
        politicianId: "lloyd-doggett-d000399",
        politicianName: "Lloyd Doggett",
        politicianRole: "House",
        politicianParty: "Democratic",
        politicianState: "TX",
        value: "5",
        valueLabel: "Trades",
        selectedToggle: "mostActive"
      },
      {
        index: 7,
        avatarImage: "https://www.congress.gov/img/member/c001103_200.jpg",
        politicianId: "earl-l-buddy-carter-c001103",
        politicianName: "Earl L. 'Buddy' Carter",
        politicianRole: "House",
        politicianParty: "Republican",
        politicianState: "GA",
        value: "4",
        valueLabel: "Trades",
        selectedToggle: "mostActive"
      },
      {
        index: 8,
        avatarImage: "https://www.congress.gov/img/member/h000273_200.jpg",
        politicianId: "john-w-hickenlooper-h000273",
        politicianName: "John W. Hickenlooper",
        politicianRole: "Senate",
        politicianParty: "Democratic",
        politicianState: "CO",
        value: "4",
        valueLabel: "Trades",
        selectedToggle: "mostActive"
      },
      {
        index: 9,
        avatarImage: "https://www.congress.gov/img/member/l000560_200.jpg",
        politicianId: "rick-larsen-l000560",
        politicianName: "Rick Larsen",
        politicianRole: "House",
        politicianParty: "Democratic",
        politicianState: "WA",
        value: "4",
        valueLabel: "Trades",
        selectedToggle: "mostActive"
      }
    ],
    mostVolume: [
      {
        index: 0,
        avatarImage: "https://www.congress.gov/img/member/p000197_200.jpg",
        politicianId: "nancy-pelosi-p000197",
        politicianName: "Nancy Pelosi",
        politicianRole: "House",
        politicianParty: "Democratic",
        politicianState: "CA",
        value: "$13M",
        valueLabel: "Volume",
        selectedToggle: "mostVolume"
      },
      {
        index: 1,
        avatarImage: "https://www.congress.gov/img/member/115_rp_nj_5_gottheimer_josh_200.jpg",
        politicianId: "josh-gottheimer-g000583",
        politicianName: "Josh Gottheimer",
        politicianRole: "House",
        politicianParty: "Democratic",
        politicianState: "NJ",
        value: "$12M",
        valueLabel: "Volume",
        selectedToggle: "mostVolume"
      },
      {
        index: 2,
        avatarImage: "https://www.congress.gov/img/member/t000278_200.jpg",
        politicianId: "tommy-tuberville-t000278",
        politicianName: "Tommy Tuberville",
        politicianRole: "Senate",
        politicianParty: "Republican",
        politicianState: "AL",
        value: "$1.5M",
        valueLabel: "Volume",
        selectedToggle: "mostVolume"
      },
      {
        index: 3,
        avatarImage: "https://www.congress.gov/img/member/h000273_200.jpg",
        politicianId: "john-w-hickenlooper-h000273",
        politicianName: "John W. Hickenlooper",
        politicianRole: "Senate",
        politicianParty: "Democratic",
        politicianState: "CO",
        value: "$900K",
        valueLabel: "Volume",
        selectedToggle: "mostVolume"
      },
      {
        index: 4,
        avatarImage: "https://www.congress.gov/img/member/c001103_200.jpg",
        politicianId: "earl-l-buddy-carter-c001103",
        politicianName: "Earl L. 'Buddy' Carter",
        politicianRole: "House",
        politicianParty: "Republican",
        politicianState: "GA",
        value: "$700K",
        valueLabel: "Volume",
        selectedToggle: "mostVolume"
      },
      {
        index: 5,
        avatarImage: "https://www.congress.gov/img/member/s001207_200.jpg",
        politicianId: "mikie-sherrill-s001207",
        politicianName: "Mikie Sherrill",
        politicianRole: "House",
        politicianParty: "Democratic",
        politicianState: "NJ",
        value: "$450K",
        valueLabel: "Volume",
        selectedToggle: "mostVolume"
      },
      {
        index: 6,
        avatarImage: "https://www.congress.gov/img/member/g000590_200.jpg",
        politicianId: "mark-e-green-g000590",
        politicianName: "Mark E. Green",
        politicianRole: "House",
        politicianParty: "Republican",
        politicianState: "TN",
        value: "$282K",
        valueLabel: "Volume",
        selectedToggle: "mostVolume"
      },
      {
        index: 7,
        avatarImage: "https://www.congress.gov/img/member/r000614_200.jpg",
        politicianId: "chip-roy-r000614",
        politicianName: "Chip Roy",
        politicianRole: "House",
        politicianParty: "Republican",
        politicianState: "TX",
        value: "$17534234234K",
        valueLabel: "Volume",
        selectedToggle: "mostVolume"
      },
      {
        index: 8,
        avatarImage: "https://www.congress.gov/img/member/k000375_200.jpg",
        politicianId: "william-r-keating-k000375",
        politicianName: "William R. Keating",
        politicianRole: "House",
        politicianParty: "Democratic",
        politicianState: "MA",
        value: "$96.5K",
        valueLabel: "Volume",
        selectedToggle: "mostVolume"
      },
      {
        index: 9,
        avatarImage: "https://www.congress.gov/img/member/g000596_200.jpg",
        politicianId: "marjorie-taylor-greene-g000596",
        politicianName: "Marjorie Taylor Greene",
        politicianRole: "House",
        politicianParty: "Republican",
        politicianState: "GA",
        value: "$96K",
        valueLabel: "Volume",
        selectedToggle: "mostVolume"
      }
    ],
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fpGtmhcFcgnBgGnTxTftF9/ST---DRAFT?node-id=97%3A218&mode=dev",
    },
  },
};
