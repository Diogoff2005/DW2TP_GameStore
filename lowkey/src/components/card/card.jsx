import imagem from "./GOW.jpg";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, price, imagem }) => {
  return (
    <Link to={`/game/${id}`}>
      <div
        className="card grid-container"
        style={{
          background: `url(${imagem})`,
          backgroundSize: `cover`,
          minWidth: `460px`,
          maxWidth: `460px`,
        }}
      >
        <h2 className="GameName col-4">{name}</h2>
        <h2 className="price col-2">{price}€</h2>
      </div>
    </Link>
  );
};

export default Card;
