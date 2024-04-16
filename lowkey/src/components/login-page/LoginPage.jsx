import Buttonsubmit from "../Buttonsubmit/Buttonsubmit";
import "./LoginPage.css";



const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="loginForm">
        <h1>Login</h1>
        <form className="loginForm">
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
          <Buttonsubmit buttomtext={"Login"}/>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
