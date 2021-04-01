const lightTheme = {
  "--color-surface": "bisque",
  "--color-text": "#0e141b",
};
const darkTheme = {
  "--color-surface": "#0e141b",
  "--color-text": "bisque",
};

const isDark = (theme) => (
  theme === ThemeType.DARK
)

export const ThemeType = {
  LIGHT: 'light',
  DARK: 'dark',
}

export const getNewTheme = (currentTheme) => {
  return isDark(currentTheme)
    ? ThemeType.LIGHT
    : ThemeType.DARK;
}

export const applyTheme = (newTheme, next) => {
  const theme = isDark(newTheme)
    ? darkTheme
    : lightTheme;

  Object.keys(theme).forEach(key => {
    const value = theme[key];
    document.documentElement.style.setProperty(key, value);
  });
  next();
}