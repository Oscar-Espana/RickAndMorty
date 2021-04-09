import React from "react";

const CardCharacter = ({ image, name, status, gender }) => {
  return (
    <div className="card">
      <img src={image} height="250" width="100%" alt={name} />
      <h2>{name}</h2>
      <p>{status}</p>
      <p>{gender}</p>
    </div>
  );
};

export default CardCharacter;
