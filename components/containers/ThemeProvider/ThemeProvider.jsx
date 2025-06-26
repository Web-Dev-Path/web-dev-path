'use client';

const ThemeProvider = ({ theme, children }) => {
  return <div data-theme={theme}>{children}</div>;
};

export { ThemeProvider };
