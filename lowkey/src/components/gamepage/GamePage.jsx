import React from "react";
import "./GamePage.css";
import Image from "../card/CART.svg";

const GamePage = ({
  name,
  developer,
  publisher,
  genre,
  releaseDate,
  price,
  gameImg,
}) => {
  return (
    <div className="game-card">
      <div className="game-image">
        <img src={gameImg} alt="God of War" />
      </div>
      <div className="game-details">
        <h1 className="h1gamecard">{name}</h1>
        <p>Developer: {developer}</p>
        <p>Publisher: {publisher}</p>
        <p>Genre: {genre}</p>
        <p>Release Date: {releaseDate}</p>

        <button className="add-to-cart">
          <img src={Image} alt="Cart" />
          <p className="cartText">Add to Cart - {price}€</p>
        </button>
      </div>
    </div>
  );
};

export default GamePage;
