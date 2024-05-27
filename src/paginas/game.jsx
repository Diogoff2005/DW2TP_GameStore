import React, { useState, useEffect } from "react";
import GamePage from "../components/gamepage/GamePage";
import "../components/supabase";
import { supabase } from "../components/supabase";
import Banner from "../components/Banner/Banner";
import AboutGame from "../components/aboutGame/AboutGame";
import "./game.css";

const Game = () => {
  const [gameData, setGameData] = useState({});
  const [id, setId] = useState(null);

  useEffect(() => {
    //Apanha o id do URL
    const url = window.location.href;
    const match = url.match(/\/game\/([0-9a-fA-F-]+)/);
    if (match) {
      setId(match[1]);
    } else {
      console.error("No game ID found in the URL");
    }

    //Faz um select à supabase com o id do jogo
    const fetchGameData = async () => {
      if (id) {
        console.log(typeof id);
        const { data, error } = await supabase
          .from("games")
          .select("*")
          .eq("id", id)
          .single();
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
    <main className="mainGame">
      <Banner path={gameData.backgroundImg}></Banner>{" "}
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
      <AboutGame
        aboutGame={gameData.aboutGame}
        minimum={gameData.minimum}
        recommended={gameData.recommended}
      />
    </main>
  ) : null;
};

export default Game;
