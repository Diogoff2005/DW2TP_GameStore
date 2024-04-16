import Buttonsubmit from "../Buttonsubmit/Buttonsubmit";
import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="RegisterPage">
      <div className="RegisterForm">
        <h2>Register</h2>
        <form className="RegisterForm">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Username"
            className="RegisterinInput"
          ></input>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            className="RegisterinInput"
          ></input>
          <label>Repeat Password:</label>
          <input
            type="password"
            placeholder="Repeat Password"
            className="RegisterinInput"
          ></input>
          <label>E-mail:</label>
          <input
            type="text"
            placeholder="E-mail"
            className="RegisterinInput"
          ></input>
          <Buttonsubmit textobutton={"Register"} />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
