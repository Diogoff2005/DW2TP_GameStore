import Buttonsubmit from "../Buttonsubmit/Buttonsubmit";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passwordUser, setPassword] = useState("");
  const [password2User, setPasswordAgain] = useState("");
  const [isValid, setIsValid] = useState(true);

  const passwordReset = async () => {
    const p = document.getElementById("errorPassword");
    if (passwordUser === password2User) {
      p.innerHTML = "";
      if (passwordUser.length >= 6) {
        setIsValid(true);
        setLoading(true);
        const { data, error } = await supabase.auth.getSession();
        let session = data.session;
        supabase.auth.onAuthStateChange(async (event, session) => {
          console.log(event);
          if (event == "INITIAL_SESSION" || event == "PASSWORD_RECOVERY") {
            const { data, error } = await supabase.auth.updateUser({
              password: passwordUser,
            });

            if (data) {
              alert("Password updated successfully!");
              navigate("/");
            }
            if (error) alert("There was an error updating your password.");
            setLoading(false);
          } else {
            setLoading(false);
          }
        });
      } else {
        setIsValid(false);
      }
    } else {
      p.innerHTML = "The passwords dont match";
    }
  };

  return (
    <div className="LoginPage">
      <div className="LoginForm">
        <h2>Reset Password</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            passwordReset(); // Call handleLogin function when form is submitted
          }}
          className="Form"
        >
          <label>Password:</label>
          <input
            required
            type="password"
            placeholder="Please enter the passsword..."
            className="RegisterinInput"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {!isValid && <p>Password must be 6 characters long.</p>}
          <label>Repeat Password:</label>
          <input
            required
            type="password"
            id="password2"
            placeholder="Please enter the password again..."
            className="RegisterinInput"
            onChange={(e) => setPasswordAgain(e.target.value)}
          ></input>
          <p id="errorPassword"></p>
          <Buttonsubmit textobutton={"Reset Password"} loading={loading} />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
