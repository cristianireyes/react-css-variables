const lightTheme = {
  "--color-surface": "#ffffff",
  "--color-primary": "#5773ff",
  "--color-text": "#0a0c10",
};
const darkTheme = {
  "--color-surface": "#0e141b",
  "--color-primary": "#c552ff",
  "--color-text": "#ffffff",
};

export const ThemeType = {
  LIGHT: 'light',
  DARK: 'dark',
}

export const getNextTheme = (currentTheme) => {
  return currentTheme === ThemeType.DARK
    ? ThemeType.LIGHT
    : ThemeType.DARK;
}

export const applyTheme = (nextTheme, cb) => {
  const theme = nextTheme === ThemeType.DARK ? darkTheme : lightTheme;
  Object.keys(theme).map(key => {
    const value = theme[key];
    document.documentElement.style.setProperty(key, value);
  });
  cb();
};