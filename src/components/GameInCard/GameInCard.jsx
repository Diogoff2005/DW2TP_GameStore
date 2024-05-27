import React from "react";
import "./GameInCard.css";

const GameInCard = ({ picture, name, price, quantity, onQuantityChange }) => {
  const handleSelectChange = (e) => {
    const selectedQuantity = e.target.value;
    onQuantityChange(selectedQuantity);
  };

  return (
    <div className="cardGrid-container">
      <div className="game">
        <img className="picture" src={picture} alt="game" />
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
