import React, { useState, useEffect } from "react";
import "./GamePage.css";
import Image from "../card/CART.svg";
import { supabase } from "../supabase";

const GamePage = ({
  id,
  name,
  developer,
  publisher,
  genre,
  releaseDate,
  price,
  gameImg,
}) => {
  const [cart, setCart] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const storedCart = sessionStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("Imgs")
          .getPublicUrl(gameImg);
        if (error) {
          throw error;
        }
        setImageUrl(data.publicUrl);
      } catch (error) {
        console.error("Error fetching image URL:", error.message);
      }
    };

    fetchImageUrl();
  }, [gameImg]);

  const addToCart = (id) => {
    if (!cart.includes(id)) {
      const newCart = [...cart, id];
      setCart(newCart);
      sessionStorage.setItem("cart", JSON.stringify(newCart));
      alert(name + " was added to your cart!");
    } else {
      alert("Item is already in the cart");
    }
  };

  return (
    <div className="gameContent">
      <div className="game-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="game-details">
        <h1 className="h1gamecard">{name}</h1>
        <p>Developer: {developer}</p>
        <p>Publisher: {publisher}</p>
        <p>Genre: {genre}</p>
        <p>Release Date: {releaseDate}</p>

        <button
          className="add-to-cart"
          onClick={() => {
            addToCart(id);
          }}
        >
          <img src={Image} alt="Cart" />
          <p className="cartText">Add to Cart - {price}€</p>
        </button>
      </div>
    </div>
  );
};

export default GamePage;
