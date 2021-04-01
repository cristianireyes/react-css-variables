import React, { useState } from 'react';
import './styles/App.css';

import ThemeToggleButton from 'components/ThemeToggleButton';

import { applyTheme, getNextTheme, ThemeType } from './utils/ThemeProvider'

const App = () => {
  const [currentTheme, setTheme] = useState(ThemeType.DARK);
  const [isDark, setIsDark] = useState(true);

  const onToggle = () => {
    const nextTheme = getNextTheme(currentTheme);
    applyTheme(nextTheme, () => {
      setTheme(nextTheme);
      setIsDark(prevIsDark => !prevIsDark);
    });
  };

  return (
    <div className="container">
      <ThemeToggleButton isDark={isDark} onChange={onToggle} />
      <h1>
        {isDark ? "Dark theme" : "Light theme" }
      </h1>
    </div>
  );
};

export default App;
