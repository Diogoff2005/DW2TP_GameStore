import "./Trending.css";
import Card from "../card/Card";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://teuhpzscqxznjacgdtih.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRldWhwenNjcXh6bmphY2dkdGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5NDgxOTEsImV4cCI6MjAyOTUyNDE5MX0.pX7REZ-wmliJwRpAHaBHvf63QcnEPusUBJlyWwisX9E"
);

const Trending = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames();
  }, []);

  async function getGames() {
    const { data } = await supabase.from("games").select();
    setGames(data);
  }

  return (
    <>
      <div className="Trending ">
        <h2 className="Title">Trending</h2>
        {games.map((game) => (
          <Card id={game.id} name={game.name} price={game.price} imagem={game.coverImg} />
        ))}
      </div>
    </>
  );
};
export default Trending;
