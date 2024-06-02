import Buttonsubmit from "../Buttonsubmit/Buttonsubmit";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import "./ResetEmailPassword.css";

const ResetEmail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const passwordReset = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://lowkey-six.vercel.app/resetPassword",
    });
    if (error) {
      console.log(error);
      alert(error);
    } else {
      alert("Please check your email to reset the password!");
      console.log(data);
      navigate("/login");
    }
    setLoading(false);
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
          <label>Email:</label>
          <input
            type="email"
            placeholder="Please enter the email..."
            className="LoginInput emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <Buttonsubmit textobutton={"Send Email"} loading={loading} />
        </form>
      </div>
    </div>
  );
};

export default ResetEmail;
