import ProfileDetails from "../components/profileDetails/ProfileDetails";
import ProfileStats from "../components/profileStats/ProfileStats";
import iCon from "../components/profileDetails/icon.png";

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
        <ProfileDetails
          PFP={pFP}
          username={uSername}
          email={eMail}
          creationDate={cReationDate}
          icon={iCon}
        />

        <ProfileStats saved={1} avgSave={12} highSave={12} />
      </main>
    </>
  );
};

export default Profile;
