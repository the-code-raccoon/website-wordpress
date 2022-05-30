import { useState } from "react";

import Theme from "./Theme";
import useDarkMode from "./useDarkMode";

export default function App() {
  const [themeMode, toggleThemeMode] = useDarkMode();

  return (
    <div className="App">
      <Theme themeMode={themeMode}>fdsfdsf</Theme>
    </div>
  );
}
