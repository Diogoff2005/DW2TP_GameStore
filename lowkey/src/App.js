import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Trending from "./components/trending/Trending";

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
      <Trending />
    </>
  );
}

export default App;
