import React from "react";

const Header = ({ darkMode, handleClick }) => {
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
