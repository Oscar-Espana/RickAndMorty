import React, { useState, useEffect } from "react";
import CardCharacter from "./CardCharacter";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="characters">
      {characters.map((character, key) => {
        return <CardCharacter key={key} {...character} />;
      })}
    </div>
  );
};

export default Characters;
