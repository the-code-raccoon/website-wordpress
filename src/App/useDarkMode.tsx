import { useState } from "react";

export default function useDarkMode() {
  const [themeMode, setThemeMode] = useState("dark");

  const toggleThemeMode = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  };

  return [themeMode, toggleThemeMode];
}
