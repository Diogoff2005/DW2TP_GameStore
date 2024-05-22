import ProfileDetails from "../components/profileDetails/ProfileDetails";
import ProfileStats from "../components/profileStats/ProfileStats";
import GameWithDetails from "../components/GameWithDetails/GameWithDetails";
import iCon from "../components/profileDetails/icon.png";
import "./profile.css";

const pFP = "https://i.redd.it/q8o37kcrenya1.jpg";
const uSername = "Dinis Ferreira";
const eMail = "dinisferira@gmail.com";
const cReationDate = "69/12/2015";

const Profile = () => {
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
            username={uSername}
            email={eMail}
            creationDate={cReationDate}
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
