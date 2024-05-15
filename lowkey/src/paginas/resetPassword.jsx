import Banner from "../components/Banner/Banner";
import loginimage from "../components/Banner/Login.png";
import ResetPassword from "../components/resetPassword/ResetPassword";
import "./login.css";

const ResetPasswordPage = () => {
  return (
    <div>
      <main className="main">
        <Banner path={loginimage} />
        <div className="divContentor">
          <ResetPassword />
        </div>
      </main>
    </div>
  );
};

export default ResetPasswordPage;
