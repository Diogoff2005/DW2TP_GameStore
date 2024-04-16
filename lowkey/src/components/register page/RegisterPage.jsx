import Buttonsubmit from "../Buttonsubmit/Buttonsubmit";
import "./RegisterPage.css";

/* const NavBar = () => {
  return (
    <nav className="navBar">
      <ul className="navBarList">
        <li>
          <h1>Lowkey</h1>
        </li>
        <li className="search">
          <input className="searchBar" placeholder="Search for games"></input>
        </li>
        <li className="iconLi">
          <a src="#">
            <span className="material-icons icon">star</span>
          </a>
        </li>
        <li className="iconLi">
          <a src="#">
            <span className="material-icons icon">shopping_cart</span>
          </a>
        </li>
        <li className="iconLi">
          <a src="#">
            <span
              className="material-icons icon"
              style={{ marginRight: "0.5em" }}
            >
              account_circle
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}; */

const RegisterPage = () => {
  return (
    <div className="RegisterPage">
      <div className="RegisterForm">
        <h1>Register</h1>
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
          {/* <input
            type="submit"
            value="Login"
            className="loginButton"
          ></input> */}
          <Buttonsubmit />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
