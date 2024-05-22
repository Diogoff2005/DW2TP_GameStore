import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";

const NavBar = () => {
  const location = useLocation();
  const [session, setSession] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const getSession = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (user) {
          console.log(user);
          setSession(true);
          const isAdminUser = user.user_metadata && user.user_metadata.admin;
          setIsAdmin(isAdminUser);
        } else {
          setSession(false);
          setIsAdmin(false);
        }
      } catch (error) {
        console.log(error);
        setIsAdmin(false);
      }
    };

    getSession();
  }, [location]);

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
        {isAdmin && (
          <li className="iconLi">
            <Link className="link" to="/backOffice">
              <span className="material-icons icon">computer</span>
            </Link>
          </li>
        )}
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
          <Link className="link" to={session ? "/profile" : "/login"}>
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
