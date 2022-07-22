import React from "react";

import { ThemeContext } from "../context/theme";


function DarkModeToggle({ theme, setTheme }) {

  const { theme, setTheme } = useContext(ThemeContext);

  function handleToggleTheme(e) {
    setTheme(e.target.checked ? "dark" : "light");
  }
  return (
    <label>
      Dark Mode
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleToggleTheme}
      />
    </label>
  );
}

export default DarkModeToggle;
