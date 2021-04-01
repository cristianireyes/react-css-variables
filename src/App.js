import React, { useState } from 'react';
import './styles/App.css';

import { applyTheme, getNewTheme, ThemeType } from './utils/ThemeProvider'
import { ThemeToggleButton } from 'components';

const App = () => {
  const [currentTheme, setTheme] = useState(ThemeType.DARK);
  const [isDark, setIsDark] = useState(true);

  const onToggle = () => {
    const newTheme = getNewTheme(currentTheme);
    applyTheme(newTheme, () => {
      setTheme(newTheme);
      setIsDark(prevIsDark => !prevIsDark);
    });
  };

  return (
    <>
      <div className="app">
        <ThemeToggleButton isDark={isDark} onChange={onToggle} />
        <h1>
          {isDark ? "Dark Theme" : "Light Theme" }
        </h1>
      </div>
    </>
  );
};

export default App;
