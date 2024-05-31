import "./card.css";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";
import React, { useState, useEffect } from "react";

const Card = ({ id, name, price, imagem }) => {
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

  return (
    <Link to={`/game/${id}`}>
      <div
        style={{
          background: imageUrl
            ? `url(${imageUrl}) center center / cover no-repeat`
            : "none",
        }}
        className="grid-containerCard card"
      >
        <h2 className="GameName col-4">{name}</h2>
        <h2 className="price col-2">{price}€</h2>
      </div>
    </Link>
  );
};

export default Card;
