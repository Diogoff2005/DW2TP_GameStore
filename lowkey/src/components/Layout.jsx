import { Outlet, Link } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import Footer from "../components/footer/Footer";

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

      <Footer />
    </>
  );
};

export default Layout;
