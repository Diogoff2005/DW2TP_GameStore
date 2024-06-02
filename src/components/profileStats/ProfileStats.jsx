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
