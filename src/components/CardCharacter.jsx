import React from "react";

const CardCharacter = ({ character, handleClick }) => {
  const { image, name, species, gender } = character;
  return (
    <div className="cardCharacter">
      <img src={image} height="250" width="100%" alt={name} />
      <h2 className="nameCharacter">{name}</h2>
      <h3 className="genderCharacter">{gender}</h3>
      <p className="speciesCharacter">{species}</p>
      {handleClick && (
        <button
          type="button"
          className="addFavoriteCharacter"
          onClick={() => handleClick(character)}
        >
          Agregar a Favoritos
        </button>
      )}
    </div>
  );
};

export default CardCharacter;
