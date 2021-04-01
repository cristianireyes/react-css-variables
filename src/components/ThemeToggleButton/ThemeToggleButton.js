import React from "react";
import './ThemeToggleButton.css';

const ThemeToggleButton = ({ isDark, onChange }) => (
  <label
    className="container"
    title={isDark ? "Activate light mode" : "Activate dark mode"}
    aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
  >
    <input type="checkbox" onChange={onChange} />
    <div />
  </label>
);

export default ThemeToggleButton;