import Buttonsubmit from "../Buttonsubmit/Buttonsubmit";
import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="RegisterPage">
      <div className="RegisterForm">
        <h2>Register</h2>
        <form className="Form">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Please enter the username..."
            className="RegisterinInput"
          ></input>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Please enter the passsword..."
            className="RegisterinInput"
          ></input>
          <label>Repeat Password:</label>
          <input
            type="password"
            placeholder="Please enter the password again..."
            className="RegisterinInput"
          ></input>
          <label>E-mail:</label>
          <input
            type="text"
            placeholder="Please enter the e-mail..."
            className="RegisterinInput"
          ></input>
          <Buttonsubmit textobutton={"Register"} />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
