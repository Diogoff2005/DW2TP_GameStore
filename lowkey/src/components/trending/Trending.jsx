import "./Trending.css";
import Card from "../card/card";
const Trending = () => {
  return (
    <>
      <div className="Trending ">
        <h2 className="Title">Trending</h2>
        <Card
          name={"Red Dead Redemption II"}
          price={"29.99€"}
          className={"col-4"}
        />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};
export default Trending;
