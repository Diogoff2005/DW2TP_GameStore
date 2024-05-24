import React, { useState, useEffect } from "react";
import GamePage from "../components/gamepage/GamePage";
import "../components/supabase";
import { supabase } from "../components/supabase";

const Game = () => {
  const [gameData, setGameData] = useState({});
  const [id, setId] = useState(null);

  useEffect(() => {
    const url = window.location.href;
    const match = url.match(/\/game\/([0-9a-fA-F-]+)/);
    if (match) {
      setId(match[1]);
    } else {
      console.error("No game ID found in the URL");
    }

    const fetchGameData = async () => {
      if (id) {
        console.log(typeof id);
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
      id={gameData.id}
      name={gameData.name}
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
