import { Story, Meta } from "@storybook/react";
import React, { useState } from "react";

import TextInput, { TextInputProps } from "./text-input";
import UserIcon from "../../icons/User";
import styled from "styled-components";

export default {
  title: "Components/TextInput",
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: "250px",
  name: "default",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Placeholder",
  width: "250px",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: "Login",
  icon: UserIcon,
  width: "250px",
};

export const WithError = Template.bind({});
WithError.args = {
  placeholder: "Wrong input",
  width: "250px",
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Disabled",
  width: "250px",
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  placeholder: "Not editable",
  width: "250px",
  readonly: true,
};

export const Clearable = () => {
  const [value, setValue] = useState("");

  return (
    <TextInput
      placeholder="Type and clear"
      width="250px"
      value={value}
      onChange={(e: any) => setValue(e.currentTarget.value)}
      clearable
    />
  );
};

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`;

export const Sizes = () => {
  return (
    <>
      <Row>
        <TextInput placeholder="large" size="large" />
        <TextInput placeholder="default" size="default" />
        <TextInput placeholder="small" size="small" />
      </Row>
    </>
  );
};
