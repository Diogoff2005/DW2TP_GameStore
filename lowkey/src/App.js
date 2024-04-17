import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import LoginPage from "./components/login-page/LoginPage";
import Buttonsubmit from "./components/Buttonsubmit/Buttonsubmit";
import RegisterPage from "./components/register-page/RegisterPage";
import Footer from "./components/footer/Footer";

function App() {
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
      <LoginPage/>
      <Footer/>
      
    </>
  );
}

export default App;
