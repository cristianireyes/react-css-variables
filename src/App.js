import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
    <HelmetProvider>
      <Helmet>
        <title>
          React | Css Variables
        </title>
      </Helmet>
      <div className="app">
        <ThemeToggleButton isDark={isDark} onChange={onToggle} />
        <h1>
          {isDark ? "Dark Theme" : "Light Theme" }
        </h1>
      </div>
    </HelmetProvider>
  );
};

export default App;
