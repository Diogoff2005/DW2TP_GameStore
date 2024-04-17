import "./card.css";

const Card = (name, price) => {
  return (
    <div className="card">
      <h2 className="GameName">Red Dead Redemption II </h2>
      <h2 className="Price">12.99€</h2>
    </div>
  );
};

export default Card;
