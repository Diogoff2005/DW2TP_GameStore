import "./css/NavBar.css";

const NavBar = () => {
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
          <span className="material-icons icon">star</span>
        </li>
        <li className="iconLi">
          <span className="material-icons icon">shopping_cart</span>
        </li>
        <li className="iconLi">
          <span className="material-icons icon">account_circle</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
