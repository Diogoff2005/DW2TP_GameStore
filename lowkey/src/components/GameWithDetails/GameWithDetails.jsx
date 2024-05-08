import React from "react";
import "./GameWithDetails.css";

const GameWithDetails = ({
  name,
  picture,
  price,
  developer,
  publisher,
  genre,
  releaseDate,
  key,
}) => {
  return (
    <div className="all">
      <div className="content">
        <div className="game">
          <img className="picture" src={picture} alt="picture" />
          <h2 className="nome">{name}</h2>
          <span className="price">{price}€</span>
          <button className="number" name="dropdown" id="dropdown"></button>
        </div>
        <div className="details">
          <h3 className="variables">
            <strong>Publisher: </strong>
            {publisher}
          </h3>
          <h3 className="variables">
            <strong>Developer:</strong> {developer}
          </h3>
          <h3 className="variables">
            <strong>Genre: </strong>
            {genre}
          </h3>
          <h3 className="variables">
            <strong>Release Date:</strong> {releaseDate}
          </h3>
          <h3 className="variables">
            <strong> Key:</strong> {key}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default GameWithDetails;
