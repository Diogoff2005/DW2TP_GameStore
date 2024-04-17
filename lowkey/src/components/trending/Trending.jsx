import "./Trending.css";
import Card from "../card/card";
import imagem from "../card/RDR2.jpg";

const Trending = () => {
  return (
    <>
      <div className="Trending ">
        <h2 className="Title">Trending</h2>
        <Card
          name={"Red Dead Redemption II"}
          price={"29.99€"}
          imagem={imagem}
          className={"col-4"}
        />
        <Card
          name={"Red Dead Redemption II"}
          price={"29.99€"}
          imagem={imagem}
          className={"col-4"}
        />
        <Card
          name={"Red Dead Redemption II"}
          price={"29.99€"}
          imagem={imagem}
          className={"col-4"}
        />
        <Card
          name={"Red Dead Redemption II"}
          price={"29.99€"}
          imagem={imagem}
          className={"col-4"}
        />
      </div>
    </>
  );
};
export default Trending;
