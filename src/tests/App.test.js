import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("When the theme is Dark", () => {
  it("should display the dark theme", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Dark theme/i)).toBeInTheDocument();
  });
});