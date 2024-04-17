import "./Trending.css";
import Card from "../card/card";
import imagem from "../card/RDR2.jpg";
import imagem1 from "../card/GOW.jpg";
import imagem2 from "../card/HD2.jpg";
import imagem3 from "../card/CW.jpg";

const Trending = () => {
  return (
    <>
      <div className="Trending ">
        <h2 className="Title">Trending</h2>
        <Card name={"Red Dead Redemption II"} price={"7.99€"} imagem={imagem} />
        <Card name={"God of War"} price={"29.99€"} imagem={imagem1} />
        <Card name={"Hell Divers 2"} price={"9.99€"} imagem={imagem2} />
        <Card name={"Content Warning"} price={"19.99€"} imagem={imagem3} />
      </div>
    </>
  );
};
export default Trending;
