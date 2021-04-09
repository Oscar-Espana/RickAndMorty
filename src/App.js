import React, { useState } from "react";
import Characters from "./components/Characters";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "theme-light" : "theme-dark"}`}>
      <Header darkMode={darkMode} handleClick={handleClick} />
      <Characters />
    </div>
  );
}

export default App;
