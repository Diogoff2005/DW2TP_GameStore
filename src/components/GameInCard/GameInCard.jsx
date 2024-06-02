import React from "react";
import "./GameInCard.css";
import { supabase } from "../supabase";
import { useState, useEffect } from "react";

const GameInCard = ({ picture, name, price, quantity, onQuantityChange }) => {
  const handleSelectChange = (e) => {
    const selectedQuantity = e.target.value;
    onQuantityChange(selectedQuantity);
  };
  const [imageUrl, setImageUrl] = useState(null);

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
    <div className="cardGrid-container">
      <div className="game">
        <img className="picture" src={imageUrl} alt="game" />
        <h2 className="nome">{name}</h2>
      </div>
      <div>
        <div className="divPrecoQuantidade">
          <span className="price">${price.toFixed(2)}</span>
          <div>
            <select
              className="number"
              name="dropdown"
              id="dropdown"
              value={quantity}
              onChange={handleSelectChange}
            >
              {[...Array(10).keys()].map((i) => (
                <option className="option" key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInCard;
