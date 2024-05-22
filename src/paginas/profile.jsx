import ProfileDetails from "../components/profileDetails/ProfileDetails";
import ProfileStats from "../components/profileStats/ProfileStats";
import iCon from "../components/profileDetails/icon.png";
import { supabase } from "../components/supabase";
import { useState } from "react";

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
        setCreateDate(user.created_at);
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
        <ProfileDetails
          PFP={pFP}
          username={username}
          email={email}
          creationDate={creationDate}
          icon={iCon}
        />

        <ProfileStats saved={1} avgSave={12} highSave={12} />
      </main>
    </>
  );
};

export default Profile;
