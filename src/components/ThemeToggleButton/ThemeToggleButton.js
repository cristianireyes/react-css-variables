import React from "react";
import useSound from 'use-sound';
import './ThemeToggleButton.css';

const SWITCH_ON = '/sounds/switch-on.mp3';
const SWITCH_OFF = '/sounds/switch-off.mp3';

const ThemeToggleButton = ({ isDark, withSound, onChange }) => {

  const [playOn] = useSound(
    SWITCH_ON,
    { volume: 0.25 }
  );
  const [playOff] = useSound(
    SWITCH_OFF,
    { volume: 0.25 }
  );

  const onChangeHandler = () => {
    if (withSound) {
      isDark ? playOff() : playOn();
    }
    onChange();
  };

  return (
    <label
      className="container"
      title={isDark ? "Activate light mode" : "Activate dark mode"}
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
    >
      <input
        type="checkbox"
        onChange={onChangeHandler}
      />
      <div />
    </label>
  )
};

export default ThemeToggleButton;