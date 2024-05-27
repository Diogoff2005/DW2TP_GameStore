import React, { useState } from "react";
import "./GameWithDetails.css";

const GameWithDetails = ({
  name,
  picture,
  price,
  developer,
  publisher,
  genre,
  releaseDate,
  gameKey,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container grid-container">
      <div className="content row">
        <div className="game-info">
          <img className="picture col-1" src={picture} alt={name} />
          <div className="info-text col-4-5">
            <h2 className="name">{name}</h2>
            <span className="price">{price}€</span>
          </div>
          <button className="dropdown-button col-1-55" onClick={toggleDetails}>
            {showDetails ? "▲" : "▼"}
          </button>
        </div>
        {showDetails && (
          <div className="details">
            <div className="detail-item">
              <strong>Publisher:</strong> {publisher}
            </div>
            <div className="detail-item">
              <strong>Developer:</strong> {developer}
            </div>
            <div className="detail-item">
              <strong>Genre:</strong> {genre}
            </div>
            <div className="detail-item">
              <strong>Release Date:</strong> {releaseDate}
            </div>
            <div className="detail-item">
              <strong>Key:</strong> {gameKey}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameWithDetails;
