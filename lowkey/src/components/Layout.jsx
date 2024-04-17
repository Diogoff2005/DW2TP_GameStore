import { Outlet, Link } from "react-router-dom";
import NavBar from "./navBar/NavBar";

const Layout = () => {
  return (
    <>
      <header
        style={{
          backgroundColor: "black",
          width: "100%",
          borderBottom: "5px solid red",
        }}
        className="App-header"
      >
        <NavBar />
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
