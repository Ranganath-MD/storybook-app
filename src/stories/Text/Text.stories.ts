import { Meta, StoryObj } from "@storybook/react";

import { Text } from "../Text";

const meta = {
  title: "Example/Title",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ['autodocs'],
  argTypes: {
    size: { defaultValue: "medium" },
    color: { defaultValue: "black" }
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>

export const PrimaryText: Story = {
  args: {
    color: "black",
    children: "lorem ipsum primary"
  }
};
export const SecondaryText: Story = {
  args: {
    color: "#c2c2c2",
    size: "small",
    children: "lorem ipsum secondary"
  }
};