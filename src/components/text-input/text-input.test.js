import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Default, Placeholder, Disabled } from "./text-input.stories";

it("renders the text-input in the default state", () => {
  render(<Default {...Default.args} />);
  expect(screen.getByRole("input")).toBeInTheDocument();
});

it("renders the text-input with placeholder", () => {
  render(<Placeholder {...Placeholder.args} />);
  expect(screen.getByPlaceholderText("Placeholder")).toBeInTheDocument();
});

it("renders the disabled text-input", () => {
  render(<Disabled {...Disabled.args} />);
  expect(screen.getByPlaceholderText("Disabled")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Disabled")).toHaveAttribute("disabled");
});
