import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/paginas/home";
import Profile from "../src/paginas/profile";
import Favoritos from "../src/paginas/favoritos";
import Cart from "../src/paginas/cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route
              path="cart"
              element={<Cart />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
