import React from "react";

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { Default, Secondary, DangerButton, Ghost } from "./button.stories";

it("renders the button in the default state", () => {
  render(<Default {...Default.args} />);
  expect(screen.getByRole("button")).toHaveTextContent("Default Button");
});

// it("renders the button in the secondary state", () => {
//   render(<Secondary {...Secondary.args} />);
//   expect(screen.getByRole("button")).toHaveTextContent("Secondary Button");
// });

// it("renders the button in the danger state", () => {
//   render(<DangerButton {...DangerButton.args} />);
//   expect(screen.getByRole("button")).toHaveTextContent("Danger Button");
// });

// it("renders the button in the ghost state", () => {
//   render(<Ghost {...Ghost.args} />);
//   expect(screen.getByRole("button")).toHaveTextContent("Ghost Button");
// });
