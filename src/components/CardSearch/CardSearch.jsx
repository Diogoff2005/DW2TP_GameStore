// Inside CardSearch.js

import React, { useState, useEffect } from "react"; // Add these import statements
import { Link } from "react-router-dom";
import { supabase } from "../supabase";

const CardSearch = ({ id, name, price, imagem }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("Imgs")
          .getPublicUrl(imagem);
        if (error) {
          throw error;
        }
        setImageUrl(data.publicUrl);
      } catch (error) {
        console.error("Error fetching image URL:", error.message);
      }
    };

    fetchImageUrl();
  }, [imagem]);

  const handleGameClick = () => {
    window.location.reload();
  };

  return (
    <div onClick={handleGameClick}>
      <Link to={`/game/${id}`}>
        <div
          style={{
            background: imageUrl
              ? `url(${imageUrl}) center center / cover no-repeat`
              : "none",
          }}
          className="card"
        >
          <h2 className="GameName ">{name}</h2>
          <h2 className="price">{price}€</h2>
        </div>
      </Link>
    </div>
  );
};

export default CardSearch;
