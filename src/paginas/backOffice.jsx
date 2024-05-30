import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/card/Card";
import Buttonsubmit from "../components/Buttonsubmit/Buttonsubmit";
import "./backOffice.css";
import { supabase } from "../components/supabase";

const BackOffice = () => {
  const [games, setGames] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const [allowedUser, setAllowedUser] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data?.user;
      if (user && user.user_metadata.admin) {
        setAllowedUser(true);
      } else {
        navigate("/");
      }
    };
    getUser();
  }, [navigate]);

  useEffect(() => {
    if (allowedUser) {
      getGames();
    }
  }, [allowedUser]);

  async function getGames() {
    const { data } = await supabase.from("games").select();
    setGames(data);
  }

  const handleAddClick = () => {
    navigate(`/addGame`);
  };

  const handleEditClick = (id) => {
    navigate(`/editgame/${id}`);
  };

  const handleRemoveClick = async (id) => {
    const { error } = await supabase.from("games").delete().eq("id", id);
    setUpdateTrigger((prev) => prev + 1);
  };

  return (
    <div className="gamesBackOffice">
      <h2 className="title">Games</h2>
      <button type="button" className="button" onClick={() => handleAddClick()}>
        Add Game
      </button>
      <div className="containerGames">
        {games.map((game) => (
          <div className="divGame">
            <Card
              id={game.id}
              name={game.name}
              price={game.price}
              imagem={game.coverImg}
            />
            <div>
              <button
                type="button"
                className="button"
                onClick={() => handleEditClick(game.id)}
              >
                Edit
              </button>
              <button
                type="button"
                className="button"
                onClick={() => handleRemoveClick(game.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackOffice;
