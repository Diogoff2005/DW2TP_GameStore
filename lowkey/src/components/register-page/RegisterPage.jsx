import Buttonsubmit from "../Buttonsubmit/Buttonsubmit";
import "./RegisterPage.css";



const RegisterPage = () => {
  return (
    <div className="RegisterPage">
      <div className="RegisterForm">
        <h2>Register</h2>
        <form className="RegisterForm">
          <input
            type="text"
            placeholder="Username"
            className="RegisterinInput"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="RegisterinInput"
          ></input>
          <input
            type="password"
            placeholder="Repeat Password"
            className="RegisterinInput"
          ></input>
          <input
            type="text"
            placeholder="E-mail"
            className="RegisterinInput"
          ></input>
          <Buttonsubmit textobutton={"Register"}/>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
