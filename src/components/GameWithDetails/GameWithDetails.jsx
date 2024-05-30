import "./GameWithDetails.css";
import { supabase } from "../supabase";
import React, { useState, useEffect } from "react";

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
  const [imageUrl, setImageUrl] = useState(null);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("Imgs")
          .getPublicUrl(picture);
        if (error) {
          throw error;
        }
        setImageUrl(data.publicUrl);
      } catch (error) {
        console.error("Error fetching image URL:", error.message);
      }
    };

    fetchImageUrl();
  }, [picture]);

  return (
    <div className="container grid-container">
      <div className="content row">
        <div className="game-info">
          <img className="picture col-1" src={imageUrl} alt={name} />
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
