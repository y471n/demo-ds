import { Story, Meta } from "@storybook/react";
import React, { useState } from "react";

import WeatherCard, { WeatherCardProps } from "./weather-card";
import styled from "styled-components";

export default {
  title: "Components/WeatherCard",
  component: WeatherCard,
} as Meta;

const Template: Story<WeatherCardProps> = (args) => <WeatherCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: "250px",
  main: "Main",
  footer: "footer",
};
