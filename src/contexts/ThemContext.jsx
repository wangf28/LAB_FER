import { createContext, useState } from "react";

//1. Create a context
export const ThemeContext = createContext();

//2.
export const ThemProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
