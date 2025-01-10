import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} aria-label="Alterar tema">
      {theme === "dark" ? "??" : "??"}
    </button>
  );
};

export default ThemeSwitcher;
