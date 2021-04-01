const lightTheme = {
  "--color-surface": "bisque",
  "--color-text": "#0e141b",
};
const darkTheme = {
  "--color-surface": "#0e141b",
  "--color-text": "bisque",
};

const isDark = (theme) => {
  return theme === ThemeType.DARK;
}

export const ThemeType = {
  LIGHT: 'light',
  DARK: 'dark',
}

export const getNextTheme = (currentTheme) => {
  return isDark(currentTheme)
    ? ThemeType.LIGHT
    : ThemeType.DARK;
}

export const applyTheme = (nextTheme, cb) => {
  const theme = isDark(nextTheme)
    ? darkTheme
    : lightTheme;
  Object.keys(theme).map(key => {
    const value = theme[key];
    document.documentElement.style.setProperty(key, value);
  });
  cb();
}