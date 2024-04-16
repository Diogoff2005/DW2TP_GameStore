import Buttonsubmit from "../Buttonsubmit/Buttonsubmit";
import "./LoginPage.css";

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

export default LoginPage;
