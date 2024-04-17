import NavBar from "../components/navBar/NavBar";
import Banner from "../components/Banner/Banner";
import loginimage from "../components/Banner/Login.png";
import LoginPage from "../components/login-page/LoginPage";
import "./login.css";

const Login = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main className="boas">
        <Banner path={loginimage} className="o" />
        <div className="adeus">
          <LoginPage />
        </div>
      </main>
    </div>
  );
};

export default Login;
