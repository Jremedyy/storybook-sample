import type { Meta, StoryObj } from "@storybook/react";

import { FirstVisitPopup } from "@/components/FirstVisitPopup/FirstVisitPopup";
import { DesktopNewsLetterWidget } from "@/components";

const meta: Meta<typeof FirstVisitPopup> = {
  title: "Components/FirstVisitPopup",
  component: FirstVisitPopup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FirstVisitPopup>;

export const Default: Story = {
  name: "Default",
  args: {},
  parameters: { layout: "fullscreen" },
  render: (args) => {
    return (
      <FirstVisitPopup
        onEmailSubmit={async function (emailAddress: string): Promise<void> {
          
        }}
      ></FirstVisitPopup>
    );
  },
};
