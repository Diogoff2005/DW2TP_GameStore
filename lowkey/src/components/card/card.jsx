import "./card.css";

const Card = ({ name, price }) => {
  return (
    <div className="card">
      <h2 className="GameName">{name}</h2>
      <h2 className="price">{price}</h2>
    </div>
  );
};

export default Card;