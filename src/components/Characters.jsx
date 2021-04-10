import React, { useState, useEffect, useReducer } from "react";
import CardCharacter from "./CardCharacter";
import FavoriteCharacter from "./FavoriteCharacter";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  return (
    <div>
      <div className="characters">
        {favorites.favorites.map((favorite, key) => (
          <FavoriteCharacter key={key} character={favorite} />
        ))}
      </div>
      <div className="characters">
        {characters.map((character, key) => {
          return (
            <CardCharacter
              key={key}
              character={character}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
