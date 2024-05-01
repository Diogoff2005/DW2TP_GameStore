import { useEffect, useState } from "react";
import Card from "../components/card/Card";
import Buttonsubmit from "../components/Buttonsubmit/Buttonsubmit";

const BackOffice = ({ supabase }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames();
  }, []);

  async function getGames() {
    const { data } = await supabase.from("games").select();
    setGames(data);
  }

  return (
    <div className="gamesBackOffice">
      <h2 className="Title">Jogos</h2>
      <Buttonsubmit textobutton={"Add"} />
      {games.map((game) => (
        <div className="divGame">
          <Card name={game.name} price={game.price} imagem={game.coverImg} />
          <Buttonsubmit textobutton={"Edit"} />
        </div>
      ))}
    </div>
  );
};

export default BackOffice;
