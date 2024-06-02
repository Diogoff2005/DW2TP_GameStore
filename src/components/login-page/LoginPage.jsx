import Buttonsubmit from "../Buttonsubmit/Buttonsubmit";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(email, password);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        setLoading(false);
        alert("error.message");
        console.error("Error signing in:", error.message);
      } else {
        setLoading(false);
        console.log("User signed in successfully:", data);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="LoginPage">
      <div className="LoginForm">
        <h2>Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            handleLogin(); // Call handleLogin function when form is submitted
          }}
          className="Form"
        >
          <label>Email:</label>
          <input
            type="email"
            placeholder="Please enter the email..."
            className="LoginInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Please enter the password..."
            className="LoginInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <Link className="link Forgotpassword" to="/resetEmail">
            <a className="Forgotpassword"> Forgot the password...</a>
          </Link>
          <Buttonsubmit
            textobutton={"Login"}
            loading={loading}
            onClick={handleLogin}
          />
          <h3 className="NewToLowkey">New to Lowkey?</h3>
          <Link className="link" to="/register">
            <Buttonsubmit
              className="Createaccount"
              textobutton={"Create an account"}
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
