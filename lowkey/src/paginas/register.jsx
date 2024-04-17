import NavBar from "../components/navBar/NavBar";
import Banner from "../components/Banner/Banner";
import loginimage from "../components/Banner/Login.png";

const Register = () => {
  return (
    <div>
      <nav>
        <NavBar/>
      </nav>
      <main>
        <Banner path={loginimage} />
      </main>
    </div>
  );
};

export default Register;
