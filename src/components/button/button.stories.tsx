import { Story, Meta } from "@storybook/react";
import React from "react";

import Button, { ButtonProps } from "./button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

// export const Primary = () => <Button type="primary" />;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  children: "Danger Button",
  type: "danger",
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: "Ghost Button",
  type: "ghost",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  type: "secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: "Button",
  loading: true,
};
