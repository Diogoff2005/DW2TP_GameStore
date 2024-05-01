import { useState } from "react";
import Banner from "../components/Banner/Banner";
import loginimage from "../components/Banner/Login.png";
import LoginPage from "../components/login-page/LoginPage";
import "./login.css";

const Login = ({ supabase }) => {
  return (
    <div>
      <main className="main">
        <Banner path={loginimage} />
        <div className="divContentor">
          <LoginPage supabase={supabase} />
        </div>
      </main>
    </div>
  );
};

export default Login;
