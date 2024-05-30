import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/paginas/home";
import Login from "../src/paginas/login";
import Register from "../src/paginas/register";
import Cart from "../src/paginas/cart";
import Profile from "../src/paginas/profile";
import Favoritos from "../src/paginas/favoritos";
import BackOffice from "../src/paginas/backOffice";
import GamePage from "../src/paginas/game";
import ResetEmailPage from "../src/paginas/resetPasswordEmail";
import ResetPasswordPage from "./paginas/resetPassword";
import EditGame from "../src/paginas/editGame";
import AddGame from "../src/paginas/addGame";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="backOffice" element={<BackOffice />} />
            <Route path="profile" element={<Profile />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="resetEmail" element={<ResetEmailPage />} />
            <Route path="resetPassword" element={<ResetPasswordPage />} />
            <Route path="game/:id" element={<GamePage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="editGame/:id" element={<EditGame />} />
            <Route path="addGame" element={<AddGame />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
