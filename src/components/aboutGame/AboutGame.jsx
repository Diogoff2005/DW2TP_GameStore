import "./AboutGame.css";

const AboutGame = ({ aboutGame, minimum, recommended }) => {
  return (
    <div className="aboutGameDiv">
      <h2>About Game</h2>
      <p>{aboutGame}</p>
      <div className="gameRequirements">
        <div className="gameRequirement">
          <h3>Minimum</h3>
          <p>{minimum}</p>
        </div>
        <div className="gameRequirement">
          <h3>Recommended</h3>
          <p>{recommended}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutGame;
