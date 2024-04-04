import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";

function App() {
  return (
    <header
      style={{ backgroundColor: "black", width: "100%", height: "3em" }}
      className="App-header"
    >
      <NavBar />
    </header>
  );
}

export default App;
