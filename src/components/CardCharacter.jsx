import React from "react";

const CardCharacter = ({ image, name, species, gender }) => {
  return (
    <div className="cardCharacter">
      <img src={image} height="250" width="100%" alt={name} />
      <h2 className="nameCharacter">{name}</h2>
      <h3 className="genderCharacter">{gender}</h3>
      <p className="speciesCharacter">{species}</p>
    </div>
  );
};

export default CardCharacter;
