import Buttonsubmit from "../Buttonsubmit/Buttonsubmit";
import { useState } from "react";
import "./RegisterPage.css";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [emailUser, setEmail] = useState("");
  const [passwordUser, setPassword] = useState("");
  const [password2User, setPasswordAgain] = useState("");
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleRegister = async (e) => {
    const p = document.getElementById("errorPassword");
    console.log(emailUser, passwordUser);
    e.preventDefault();
    if (passwordUser === password2User) {
      p.innerHTML = "";
      if (passwordUser.length >= 6) {
        setIsValid(true);
        try {
          setLoading(true);
          const { error } = await supabase.auth.signUp({
            email: emailUser,
            password: passwordUser,
            options: {
              data: {
                username: username,
                photo: null,
                admin: false,
              },
            },
          });
          if (error) {
            setLoading(false);
            alert(error);
          } else {
            setLoading(false);
            alert(
              "Please verify your account using the email provided: " +
                emailUser +
                ". Thank you!"
            );
            navigate("/login");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setIsValid(false);
      }
    } else {
      p.innerHTML = "The passwords dont match";
    }
  };

  return (
    <div className="RegisterPage">
      <div className="RegisterForm">
        <h2>Register</h2>
        <form
          onSubmit={(e) => {
            handleRegister(e); // Call handleLogin function when form is submitted
          }}
          className="Form"
        >
          <label>Username:</label>
          <input
            required
            type="text"
            placeholder="Please enter the username..."
            className="RegisterinInput"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
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
          <label>E-mail:</label>
          <input
            required
            type="text"
            placeholder="Please enter the e-mail..."
            className="RegisterinInput"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <Buttonsubmit textobutton="Register" loading={loading} />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
