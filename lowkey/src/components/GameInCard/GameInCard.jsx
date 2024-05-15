import React from "react";
import "./GameInCard.css";


const GameInCard = ({ picture, name, price, arrow}) => {
  return (
    <div className="cardGrid-container">
        <div className="game">
      <img className="picture" src={picture} alt="picture" />
      <h2 className="nome">{name}</h2>
      </div>
      <div>
        <div>
          
          <span className="price">{price}</span>
          <select className="number" name="dropdown" id="dropdown">
            <option className="option" value="1">1</option>
            <option className="option" value="2">2</option>
            <option className="option" value="3">3</option>
            <option className="option" value="4">4</option>
            <option className="option" value="5">5</option>
            <option className="option" value="6">6</option>
            <option className="option" value="7">7</option>
            <option className="option" value="8">8</option>
            <option className="option" value="9">9</option>
            <option className="option" value="10">10</option>
          </select>
          <span className="arrow">{arrow}</span>
        </div>
      </div>
    </div>
  );
};
export default GameInCard;
