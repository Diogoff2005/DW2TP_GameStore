import ProfileDetails from "../components/profileDetails/ProfileDetails";
import ProfileStats from "../components/profileStats/ProfileStats";
import GameWithDetails from "../components/GameWithDetails/GameWithDetails";
import iCon from "../components/profileDetails/icon.png";
import { supabase } from "../components/supabase";
import { useState } from "react";
import "./profile.css";

const pFP = "https://i.redd.it/q8o37kcrenya1.jpg";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [creationDate, setCreateDate] = useState("");

  const getData = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUsername(user.user_metadata.username);
        setEmail(user.user_metadata.email);
        const dateTimeString = "2024-05-08T09:05:57.337606Z";
        const dateString = dateTimeString.substring(0, 10);
        const [year, month, day] = dateString.split("-");
        const formattedDate = `${day}-${month}-${year}`;
        setCreateDate(formattedDate);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getData();

  return (
    <>
      <main
        style={{
          marginleft: "auto",
          marginRight: "auto",
          padding: "0px",
        }}
      >
        <div className="profile">
          <ProfileDetails
            PFP={pFP}
            username={username}
            email={email}
            creationDate={creationDate}
            icon={iCon}
          />

          <h2 className="inText">Jogos comprados</h2>

          <GameWithDetails
            name="God of War"
            picture={pFP}
            price="yes"
            developer="yes"
            publisher="yes"
            genre="yes"
            releaseDate="disja"
            gameKey="2134567890"
          />
          <GameWithDetails
            name="God of War"
            picture={pFP}
            price="yes"
            developer="yes"
            publisher="yes"
            genre="yes"
            releaseDate="disja"
            gameKey="2134567890"
          />

          <ProfileStats saved={1} avgSave={12} highSave={12} />
        </div>
      </main>
    </>
  );
};

export default Profile;
