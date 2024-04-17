import Buttonsubmit from "../Buttonsubmit/Buttonsubmit";
import "./LoginPage.css";
import Banner from "../components/Banner/Banner";
import loginimage from "../components/Banner/Login.png";

const LoginPage = () => {
  return (
    
    <div className="LoginPage">
      <div className="LoginForm">
        <h2>Login</h2>
        <form className="Form">
        <Banner path={loginimage} />

          <label>Username:</label>
          <input
            type="text"
            placeholder="Please enter the username..."
            className="LoginInput"
          ></input>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Please enter the password..."
            className="LoginInput"
          ></input>
          <a href="" className="Forgotpassoword">
            Forgot the password...
          </a>
          <Buttonsubmit textobutton={"Login"} />
          <h3 className="NewToLowkey">New to Lowkey?</h3>
          <Buttonsubmit
            className="Createaccount"
            textobutton={"Create an account"}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
