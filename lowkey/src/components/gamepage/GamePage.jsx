import imagem from "../card/GOW.jpg";
import "./GamePage.css";
const GamePage = ({ Gamename, Developer,Publisher,Genre,ReleaseDate,price }) => {
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
      <h2 className="GameName col-1">{Gamename}</h2>
      <h2 className="price col-2">{Developer}</h2>
      <h2 className="price col-3">{Publisher}</h2>
      <h2 className="price col-4">{Genre}</h2>
      <h2 className="price col-5">{ReleaseDate}</h2>
      <h2 className="price col-6">{price}</h2>

    </div>
  );
};

export default GamePage;
