import { Story, Meta } from "@storybook/react";
import React from "react";

import Modal, { BaseModalProps } from ".";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const Template: Story<BaseModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isShowing: true,
  opacity: 0.7,
};
