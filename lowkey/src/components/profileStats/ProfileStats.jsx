import "./ProfileStats.css";
import Buttonsubmit from "../Buttonsubmit/Buttonsubmit";
const ProfileStats = ({ saved, highSave, avgSave }) => {
  return (
    <>
      <section className="grid-container">
        <div className="row">
          <div className="col-3">
            <p>
              <strong>Amout saved: </strong>
            </p>
            <p className="values"> {saved}</p>
          </div>
          <div className="col-3">
            <p>
              <strong>Average Percentage save: </strong>
            </p>
            <p className="values"> {avgSave}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <p>
              <strong>Highest amount saved: </strong>
            </p>
            <p className="values"> {highSave}</p>
          </div>
        </div>
        <form className="row btnForm">
          <Buttonsubmit textobutton={"Log out"} />
        </form>
      </section>
    </>
  );
};

export default ProfileStats;
