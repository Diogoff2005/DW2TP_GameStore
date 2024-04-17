import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Banner from "./components/Banner/Banner";

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

      <main
        style={{
          margin: "0px",
          padding: "0px",
        }}
      >
        <Banner />
      </main>
    </>
  );
}

export default App;
