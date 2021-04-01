import React from 'react';
import './styles/App.css';

import { applyTheme, getNextTheme, ThemeType } from './utils/ThemeProvider'

const App = () => {
  const [currentTheme, setTheme] = React.useState(ThemeType.DARK);

  const onToggle = () => {
    const nextTheme = getNextTheme(currentTheme);
    applyTheme(nextTheme, () => setTheme(nextTheme));
  };

  return (
    <div>
      <h1>
        {currentTheme === ThemeType.DARK ? "Dark theme" : "Light theme" }
      </h1>
      <button onClick={onToggle}>Toggle theme</button>
    </div>
  );
};

export default App;
