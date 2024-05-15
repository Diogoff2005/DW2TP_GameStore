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
    <div className="container">
      <div className="content">
        <div className="game-info">
          <img className="picture" src={picture} alt={name} />
          <div className="info-text">
            <h2 className="name">{name}</h2>
            <span className="price">{price}€</span>
          </div>
          <button className="dropdown-button" onClick={toggleDetails}>
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
