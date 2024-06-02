import { supabase } from "../components/supabase";
import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import { useNavigate } from "react-router-dom";
import "./backOffice.css";

const BackOffice = () => {
  const [games, setGames] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const [allowedUser, setAllowedUser] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);

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
  }, [allowedUser, updateTrigger]);

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

  const handleRemoveClick = async () => {
    const { error } = await supabase
      .from("games")
      .delete()
      .eq("id", selectedGameId);
    if (!error) {
      setUpdateTrigger((prev) => prev + 1);
      setShowPopup(false);
    }
  };

  const handleShowPopup = (id) => {
    setSelectedGameId(id);
    setShowPopup(true);
  };

  const handleCancelDeletion = () => {
    setShowPopup(false);
    setSelectedGameId(null);
  };

  return (
    <main className="gamesBackOffice">
      <h2 className="title">Games</h2>
      <button type="button" className="button" onClick={handleAddClick}>
        Add Game
      </button>
      <div className="containerGames">
        {games.map((game) => (
          <div key={game.id} className="divGame">
            <Card
              id={game.id}
              name={game.name}
              price={game.price}
              imagem={game.coverImg}
            />
            <div className="divGameButton">
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
                onClick={() => handleShowPopup(game.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this game?</p>
            <button className="button" onClick={handleRemoveClick}>
              Yes
            </button>
            <button className="button" onClick={handleCancelDeletion}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default BackOffice;
