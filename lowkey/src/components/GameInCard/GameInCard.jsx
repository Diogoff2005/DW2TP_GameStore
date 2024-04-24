import React from "react";
import "./GameInCard.css";

const GameInCard = ({ picture, name, price, number, arrow }) => {
  return (
    <div className="card grid-container">
      <img className="picture" src={picture} alt="picture" />
      <div>
        <div>
          <h2>{name}</h2>
          <span className="price">{price}</span>
          <span className="number">{number}</span>
          <span className="arrow">{arrow}</span>
        </div>
      </div>
    </div>
  );
};
export default GameInCard;