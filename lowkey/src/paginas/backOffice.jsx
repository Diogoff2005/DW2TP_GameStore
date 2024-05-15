import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/card/Card";
import Buttonsubmit from "../components/Buttonsubmit/Buttonsubmit";
import "./backOffice.css";
import { supabase } from "../components/supabase";

const BackOffice = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getGames();
  }, []);

  async function getGames() {
    const { data } = await supabase.from("games").select();
    setGames(data);
  }

  const handleEditClick = (id) => {
    navigate(`/editgame/${id}`);
  };

  return (
    <div className="gamesBackOffice">
      <h2 className="title">Games</h2>
      <Buttonsubmit textobutton={"Add"} />
      <div className="containerGames">
        {games.map((game) => (
          <div key={game.id} className="divGame">
            <Card name={game.name} price={game.price} imagem={game.coverImg} />
            <div>
              <button
                type="button"
                className="button"
                onClick={() => handleEditClick(game.id)}
              >
                Edit
              </button>
              <Buttonsubmit textobutton={"Remove"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackOffice;
