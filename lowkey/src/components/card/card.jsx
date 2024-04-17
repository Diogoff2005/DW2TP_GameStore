import "./card.css";
const Card = ({ name, price, imagem }) => {
  return (
    <div
      className="card grid-container"
      style={{
        background: `url(${imagem})`,
        backgroundSize: `100%`,
        minWidth: `460px`,
        maxWidth: `460px`,
      }}
    >
      <h2 className="GameName col-4">{name}</h2>
      <h2 className="price col-2">{price}</h2>
    </div>
  );
};

export default Card;
