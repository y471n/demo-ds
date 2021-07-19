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

// export const WithIcon = Template.bind({});
// WithIcon.args = {
//   icon: DownloadIcon,
//   children: 'Download',
// };

// export const Default = Template.bind({});
// Default.args = {
//   children: "Default Button",
// };

/* // export default { */
//   title: 'Example/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as ComponentMeta<typeof Button>;

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
