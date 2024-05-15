import GameWithDetails from "../components/GameWithDetails/GameWithDetails";
const Profile = () => {
  return (
    <div>
      <GameWithDetails
        picture={
          "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"        }
        name={"God of War"}
        price={"52.26"}
  
        developer={"Santa Monica Studio "}
        publisher={"PlayStation PC LLC"}
        genre={"Action, Adventure, Single-player"}
        releaseDate={" 14 Jan, 2022"}
        gameKey={"LCON7-H8HP7-C8DFB"}
      ></GameWithDetails>
      ;
    </div>
  );
};

export default Profile;
