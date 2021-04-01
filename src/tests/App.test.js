import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("When the theme is Dark", () => {
  it("should display the dark theme", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Dark theme/i)).toBeInTheDocument();
  });
});

describe("when toggling the theme", () => {
  it("should update theme", () => {
    const { getByText } = render(<App />);
    const button = getByText(/Toggle theme/i);
    button.click();
    expect(getByText("Light theme")).toBeInTheDocument();
  });
});