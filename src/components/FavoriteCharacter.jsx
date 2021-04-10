import React from "react";

const FavoriteCharacter = ({ character, handleDeleteClick }) => {
  const { image, name, id } = character;
  return (
    <div className="cardFavoriteCharacter">
      <div className="imageFavoriteCharacter">
        <img
          src={image}
          height="90"
          width="90"
          className="favoriteCharacter"
          alt={name}
        />
        <button
          type="button"
          className="deleteCharacter"
          onClick={() => handleDeleteClick(id)}
        >
          ✖
        </button>
      </div>

      <h4 className="nameCharacter">{name}</h4>
    </div>
  );
};

export default FavoriteCharacter;
