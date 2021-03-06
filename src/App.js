import React, { useState } from "react";
import Characters from "./components/Characters";
import Header from "./components/Header";
import ThemeContext from "./context/ThemeContext";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`app ${darkMode ? "theme-light" : "theme-dark"}`}>
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
