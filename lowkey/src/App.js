import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Card from "./components/card/card";

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
      <Card />
    </>
  );
}

export default App;
