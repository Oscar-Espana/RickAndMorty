import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="header">
      <h1>Rick and Morty</h1>
      <button type="button" className="buttonMode" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Header;
