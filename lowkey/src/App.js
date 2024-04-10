import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import LoginPage from "./components/login-page/LoginPage";


function App() {
  return (
    <header
      style={{
        backgroundColor: "black",
        width: "100%",
        borderBottom: "5px solid red",
      }}
      className="App-header"
    >
      <NavBar />
      <LoginPage />
    </header>
  );
}

export default App;
