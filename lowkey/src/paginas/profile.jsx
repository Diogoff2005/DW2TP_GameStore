import React, { useState, useEffect } from "react";
import ProfileDetails from "../components/profileDetails/ProfileDetails";
import ProfileStats from "../components/profileStats/ProfileStats";
import GameWithDetails from "../components/GameWithDetails/GameWithDetails";
import iCon from "../components/profileDetails/icon.png";
import pfc from "../components/profileDetails/icon.jpg";
import { supabase } from "../components/supabase";
import "./profile.css";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [creationDate, setCreateDate] = useState("");
  const [games, setGames] = useState([]);

  const fetchGameData = async (userId) => {
    if (userId) {
      const { data, error } = await supabase
        .from("userGames")
        .select(
          `
          id,
          idGame,
          games (
            name,
            coverImg,
            price,
            developer,
            publisher,
            genre,
            releaseDate
          )
        `
        )
        .eq("idUser", userId);
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        console.log(data);
        const gamesData = data.map((item) => ({
          userGameId: item.id,
          ...item.games,
        }));
        console.log(gamesData);
        setGames(gamesData);
      }
    }
  };

  const getData = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUsername(user.user_metadata.username);
        setEmail(user.user_metadata.email);
        const dateTimeString = user.created_at;
        const dateString = dateTimeString.substring(0, 10);
        const [year, month, day] = dateString.split("-");
        const formattedDate = `${day}-${month}-${year}`;
        setCreateDate(formattedDate);
        fetchGameData(user.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0px",
      }}
    >
      <div className="profile">
        <ProfileDetails
          PFP={pfc}
          username={username}
          email={email}
          creationDate={creationDate}
          icon={iCon}
        />
        <h2 className="inText">Owned Games</h2>
        {games.map((game) => (
          <GameWithDetails
            name={game.name}
            picture={game.coverImg}
            price={game.price}
            developer={game.developer}
            publisher={game.publisher}
            genre={game.genre}
            releaseDate={game.releaseDate}
            gameKey={game.userGameId}
          />
        ))}
        <ProfileStats saved={1} avgSave={12} highSave={12} />
      </div>
    </main>
  );
};

export default Profile;
