import type { Meta, StoryObj } from "@storybook/react";

import ScheduleAccordion from "./ScheduleAccordion";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "ScheduleAccordion",
  component: ScheduleAccordion,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ScheduleAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
