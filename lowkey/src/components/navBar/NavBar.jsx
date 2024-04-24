import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul className="navBarList">
        <li>
          <Link className="link" to="/">
            <h1>Lowkey</h1>
          </Link>
        </li>
        <li className="search">
          <input className="searchBar" placeholder="Search for games"></input>
        </li>
        <li className="iconLi">
          <Link className="link" to="/favoritos">
            <span className="material-icons icon">star</span>
          </Link>
        </li>
        <li className="iconLi">
          <Link className="link" to="/cart">
            <span className="material-icons icon">shopping_cart</span>
          </Link>
        </li>
        <li className="iconLi">
          <Link className="link" to="/profile">
            <span
              className="material-icons icon"
              style={{ marginRight: "0.5em" }}
            >
              account_circle
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
