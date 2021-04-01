import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

import { ThemeToggleButton } from "components";

describe("ThemeToggleButton", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ThemeToggleButton isDark onChange={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe("when the `isDark` prop is true", () => {
    it("sets the label's title and aria-label attributes to `Activate light mode`", () => {
      const { getByTitle } = render(<ThemeToggleButton isDark onChange={() => {}} />);

      expect(getByTitle(/activate/i).title).toEqual("Activate light mode");
      expect(getByTitle(/activate/i).getAttribute("aria-label")).toEqual(
        "Activate light mode"
      );
    });
  });

  describe("when the `isDark` prop if false", () => {
    it("sets the label's title and aria-label attributes to `Active dark mode`", () => {
      const { getByTitle } = render(<ThemeToggleButton isDark={false} onChange={() => {}} />);

      expect(getByTitle(/activate/i).title).toEqual("Activate dark mode");
      expect(getByTitle(/activate/i).getAttribute("aria-label")).toEqual(
        "Activate dark mode"
      );
    });
  });

  describe("when the toggle button is pressed", () => {
    let onChangeSpy;

    beforeEach(() => {
      onChangeSpy = jest.fn();
    });

    afterEach(() => {
      onChangeSpy.mockReset();
    });

    it("fires the passed function", () => {
      const { getByTitle } = render(
        <ThemeToggleButton isDark onChange={onChangeSpy} />
      );

      fireEvent.click(getByTitle(/activate/i));

      expect(onChangeSpy).toHaveBeenCalled();
    });
  });
});