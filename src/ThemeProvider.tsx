import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = {
  dark: boolean;
  toggle: () => void;
};

const defaultTheme: Theme = {
  dark: false,
  toggle: () => {},
};

const ThemeContext = createContext<Theme>(defaultTheme);

const useTheme = () => useContext(ThemeContext);

const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true;

const ThemeProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const toggle = () => setTheme((theme) => ({ ...theme, dark: true }));

  useEffect(() => {
    const isDark =
      localStorage.getItem("dark") === "true" || supportsDarkMode();
    setTheme({ dark: isDark, toggle });
  }, []);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };
