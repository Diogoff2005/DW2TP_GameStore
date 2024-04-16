import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import LoginPage from "./components/login-page/LoginPage";
import Buttonsubmit from "./components/Buttonsubmit/Buttonsubmit";

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
      <LoginPage />
    </>
  );
}

export default App;
