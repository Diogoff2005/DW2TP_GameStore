import React, { useState, useEffect } from "react";
import GamePage from "../components/gamepage/GamePage";
import "../components/supabase";
import { supabase } from "../components/supabase";

const Game = () => {
  const [gameData, setGameData] = useState({});

  const url = window.location.href;
  const match = url.match(/\/game\/(\d+)/);
  const id = match ? match[1] : null;

  useEffect(() => {
    const fetchGameData = async () => {
      if (id) {
        const { data, error } = await supabase
          .from("games")
          .select("*")
          .eq("id", id)
          .single(); // Ensure that we get a single object, not an array
        if (error) {
          console.error("Error fetching data:", error);
        } else {
          setGameData(data);
          console.log(data);
        }
      }
    };
    fetchGameData();
  }, [id]);

  return id ? (
    <GamePage
      gameName={gameData.name}
      developer={gameData.developer}
      publisher={gameData.publisher}
      genre={gameData.genre}
      releaseDate={gameData.releaseDate}
      price={gameData.price}
      gameImg={gameData.coverImg}
    />
  ) : null;
};

export default Game;
