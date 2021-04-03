import React, { useState } from 'react';
import './styles/App.css';

import { Sparkles, ThemeToggleButton } from 'components';
import { applyTheme, getNewTheme, ThemeType } from './utils/ThemeProvider';

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
        <ThemeToggleButton isDark={isDark} withSound onChange={onToggle} />
        <Sparkles color={ isDark ? '#ffe100' : '#0e141b' }>
          <h1>
            {isDark ? "Dark Theme" : "Light Theme" }
          </h1>
        </Sparkles>
      </div>
    </>
  );
};

export default App;
