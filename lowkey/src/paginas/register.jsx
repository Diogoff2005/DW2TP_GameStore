import NavBar from "../components/navBar/NavBar";
import Banner from "../components/Banner/Banner";
import loginimage from "../components/Banner/Login.png";
import Register from "../components/register-page/RegisterPage";
import "./login.css";

const Registerpage = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main className="boas">
        <Banner path={loginimage} className="o" />
        <div className="adeus">
          <Register />
        </div>
      </main>
    </div>
  );
};

export default Registerpage;
