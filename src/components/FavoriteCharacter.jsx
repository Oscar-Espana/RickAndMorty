import React from "react";

const FavoriteCharacter = ({ character, handleClick }) => {
  const { image, name } = character;
  return (
    <div className="">
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
          onClick={() => handleClick(character)}
        >
          ✖
        </button>
      </div>

      <h4 className="nameCharacter">{name}</h4>
    </div>
  );
};

export default FavoriteCharacter;
