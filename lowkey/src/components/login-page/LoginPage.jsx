import Buttonsubmit from "../Buttonsubmit/Buttonsubmit";
import "./LoginPage.css";



const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="loginForm">
        <h2>Login</h2>
        <form className="Form">
          <input
            type="text"
            placeholder="Username"
            className="loginInput"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="loginInput"
          ></input>
          <Buttonsubmit textobutton={"Login"}/>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
