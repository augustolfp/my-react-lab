import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeToggle() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider(props) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeUpdateContext.Provider value={toggleTheme}>
      <ThemeContext.Provider value={darkTheme}>
        {props.children}
      </ThemeContext.Provider>
    </ThemeUpdateContext.Provider>
  );
}
