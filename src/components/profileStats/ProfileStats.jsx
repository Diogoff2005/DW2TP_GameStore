import "./ProfileStats.css";
import Buttonsubmit from "../Buttonsubmit/Buttonsubmit";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

const ProfileStats = ({ saved, highSave, avgSave }) => {
  const navigate = useNavigate();
  const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    navigate("/login");
  };

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
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            logOut(); // Call handleLogin function when form is submitted
          }}
          className="row btnForm"
        >
          <Buttonsubmit textobutton={"Log out"} />
        </form>
      </section>
    </>
  );
};

export default ProfileStats;
