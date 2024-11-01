import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "../../../components";
import {
  InfoCardCell,
  InfoCardCellProps,
} from "@/components/Table/cells/InfoCardCell";
import { css } from "@emotion/react";
import { PillCell } from "@/components/Table/cells/PillCell";
import { TextCell } from "@/components/Table/cells/TextCell";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  decorators: [
    (Story) => (
      <div style={{ padding: "10px 0 0 0" }}>
        <Story />
      </div>
    ),
  ],
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Trades: Story = {
  name: "TradesTable",
  args: {
    columns: [
      {
        title: "Politician",
        css: css`
          width: 150px;
          min-width: 150px;
          max-width: 150px;
        `,
      },
      {
        title: "Issuer",
        css: css`
          width: 300px;
          min-width: 300px;
          max-width: 300px;

          @media only screen and (min-width: 1024px) {
            width: 100%;
          }
        `,
      },
      {
        title: "Type",
        css: css`
          width: 150px;
          min-width: 150px;
          max-width: 150px;
        `,
      },
      {
        title: "Size",
        css: css`
          width: 150px;
          min-width: 150px;
          max-width: 150px;
        `,
      },
      {
        title: "Owner",
        css: css`
          width: 150px;
          min-width: 150px;
          max-width: 150px;
        `,
      },
      {
        title: "Executed On",
        css: css`
          width: 100px;
          min-width: 100px;
          max-width: 100px;
        `,
      },
    ],
    rows: [
      [
        <InfoCardCell
          imageUrl={"https://www.congress.gov/img/member/g000596_200.jpg"}
          imageBorderColor="#E81B23"
          title={"Marjorie Greene"}
          subtitle={"House | GA"}
        />,
        <InfoCardCell title={"Nike, Inc. Common Stock"} subtitle={"NKE"} />,
        <PillCell backgroundColor="var(--positive)" text={"Partial Sale"} />,
        <TextCell text={"$1,000 - $15,001"} />,
        <TextCell text={"Spouse"} />,
        <TextCell text={"8/3/2024"} />,
      ],
      [
        <InfoCardCell
          imageUrl={"https://www.congress.gov/img/member/g000596_200.jpg"}
          imageBorderColor="#E81B23"
          title={"Marjorie Greene"}
          subtitle={"House | GA"}
        />,
        <InfoCardCell title={"Nike, Inc. Common Stock"} subtitle={"NKE"} />,
        <PillCell backgroundColor="var(--positive)" text={"Buy"} />,
        <TextCell text={"$1,000 - $15,001"} />,
        <TextCell text={"Spouse"} />,
        <TextCell text={"8/3/2024"} />,
      ],
      [
        <InfoCardCell
          imageUrl={"https://www.congress.gov/img/member/g000596_200.jpg"}
          imageBorderColor="#E81B23"
          title={"Marjorie Greene"}
          subtitle={"House | GA"}
        />,
        <InfoCardCell title={"Nike, Inc. Common Stock"} subtitle={"NKE"} />,
        <PillCell backgroundColor="var(--positive)" text={"Buy"} />,
        <TextCell text={"$1,000 - $15,001"} />,
        <TextCell text={"Spouse"} />,
        <TextCell text={"8/3/2024"} />,
      ],
      [
        <InfoCardCell
          imageUrl={"https://www.congress.gov/img/member/g000596_200.jpg"}
          imageBorderColor="#E81B23"
          title={"Marjorie Greene"}
          subtitle={"House | GA"}
        />,
        <InfoCardCell title={"Nike, Inc. Common Stock"} subtitle={"NKE"} />,
        <PillCell backgroundColor="var(--positive)" text={"Buy"} />,
        <TextCell text={"$1,000 - $15,001"} />,
        <TextCell text={"Spouse"} />,
        <TextCell text={"8/3/2024"} />,
      ],
      [
        <InfoCardCell
          imageUrl={"https://www.congress.gov/img/member/g000596_200.jpg"}
          imageBorderColor="#E81B23"
          title={"Marjorie Greene"}
          subtitle={"House | GA"}
        />,
        <InfoCardCell title={"Nike, Inc. Common Stock"} subtitle={"NKE"} />,
        <PillCell backgroundColor="var(--positive)" text={"Buy"} />,
        <TextCell text={"$1,000 - $15,001"} />,
        <TextCell text={"Spouse"} />,
        <TextCell text={"8/3/2024"} />,
      ],
      [
        <InfoCardCell
          imageUrl={"https://www.congress.gov/img/member/g000596_200.jpg"}
          imageBorderColor="#E81B23"
          title={"Marjorie Greene"}
          subtitle={"House | GA"}
        />,
        <InfoCardCell title={"Nike, Inc. Common Stock"} subtitle={"NKE"} />,
        <PillCell backgroundColor="var(--positive)" text={"Buy"} />,
        <TextCell text={"$1,000 - $15,001"} />,
        <TextCell text={"Spouse"} />,
        <TextCell text={"8/3/2024"} />,
      ],
      [
        <InfoCardCell
          imageUrl={"https://www.congress.gov/img/member/g000596_200.jpg"}
          imageBorderColor="#E81B23"
          title={"Marjorie Greene"}
          subtitle={"House | GA"}
        />,
        <InfoCardCell title={"Nike, Inc. Common Stock"} subtitle={"NKE"} />,
        <PillCell backgroundColor="var(--positive)" text={"Buy"} />,
        <TextCell text={"$1,000 - $15,001"} />,
        <TextCell text={"Spouse"} />,
        <TextCell text={"8/3/2024"} />,
      ],
      [
        <InfoCardCell
          imageUrl={"https://www.congress.gov/img/member/g000596_200.jpg"}
          imageBorderColor="#E81B23"
          title={"Marjorie Greene"}
          subtitle={"House | GA"}
        />,
        <InfoCardCell title={"Nike, Inc. Common Stock"} subtitle={"NKE"} />,
        <PillCell backgroundColor="var(--positive)" text={"Buy"} />,
        <TextCell text={"$1,000 - $15,001"} />,
        <TextCell text={"Spouse"} />,
        <TextCell text={"8/3/2024"} />,
      ],
      [
        <InfoCardCell
          imageUrl={"https://www.congress.gov/img/member/g000596_200.jpg"}
          imageBorderColor="#E81B23"
          title={"Marjorie Greene"}
          subtitle={"House | GA"}
        />,
        <InfoCardCell title={"Nike, Inc. Common Stock"} subtitle={"NKE"} />,
        <PillCell backgroundColor="var(--positive)" text={"Buy"} />,
        <TextCell text={"$1,000 - $15,001"} />,
        <TextCell text={"Spouse"} />,
        <TextCell text={"8/3/2024"} />,
      ],
      [
        <InfoCardCell
          imageUrl={"https://www.congress.gov/img/member/g000596_200.jpg"}
          imageBorderColor="#E81B23"
          title={"Marjorie Greene"}
          subtitle={"House | GA"}
        />,
        <InfoCardCell title={"Nike, Inc. Common Stock"} subtitle={"NKE"} />,
        <PillCell backgroundColor="var(--positive)" text={"Buy"} />,
        <TextCell text={"$1,000 - $15,001"} />,
        <TextCell text={"Spouse"} />,
        <TextCell text={"8/3/2024"} />,
      ],
      [
        <InfoCardCell
          imageUrl={"https://www.congress.gov/img/member/g000596_200.jpg"}
          imageBorderColor="#E81B23"
          title={"Marjorie Greene"}
          subtitle={"House | GA"}
        />,
        <InfoCardCell title={"Nike, Inc. Common Stock"} subtitle={"NKE"} />,
        <PillCell backgroundColor="var(--positive)" text={"Buy"} />,
        <TextCell text={"$1,000 - $15,001"} />,
        <TextCell text={"Spouse"} />,
        <TextCell text={"8/3/2024"} />,
      ],
    ],
  },
  parameters: { layout: "fullscreen" },
};
