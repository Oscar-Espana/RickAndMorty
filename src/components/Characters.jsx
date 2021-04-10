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
    case "DELETE_FAVORITE":
      const { id } = action.payload;
      const favoritesAux = state.favorites.filter(
        (favorite) => favorite.id !== id
      );
      return { ...state, favorites: favoritesAux };

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

  const handleDeleteClick = (id) => {
    dispatch({ type: "DELETE_FAVORITE", payload: { id } });
  };

  return (
    <>
      {favorites?.favorites.length > 0 && (
        <section className="container">
          <h2>Favoritos</h2>
          <div className="characters">
            {favorites.favorites.map((favorite, key) => (
              <FavoriteCharacter
                key={key}
                character={favorite}
                handleDeleteClick={handleDeleteClick}
              />
            ))}
          </div>
        </section>
      )}

      <section className="container">
        <h2>Personajes</h2>
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
      </section>
    </>
  );
};

export default Characters;
