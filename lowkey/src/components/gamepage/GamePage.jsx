import React from "react";
import "./GamePage.css";
import gameImage from "../card/GOW.jpg";
import Image from "../card/CART.svg";

const GamePage = () => {
  return (
    <div className="game-card">
      <div className="game-image">
        <img src={gameImage} alt="God of War" />
      </div>
      <div className="game-details">
        <h1 className="h1gamecard">God of War</h1>
        <p>Developer: Santa Monica Studio</p>
        <p>Publisher: PlayStation PC LLC</p>
        <p>Genre: Action, Adventure, Single-player</p>
        <p>Release Date: 14 Jan, 2022</p>

        <button className="add-to-cart">
          <img src={Image} alt="Cart" />
          <p className="cartText">Add to Cart - 29.99€</p>
        </button>
      </div>
    </div>
  );
};

export default GamePage;
