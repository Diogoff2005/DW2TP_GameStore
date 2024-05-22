import Banner from "../components/Banner/Banner";
import loginimage from "../components/Banner/Login.png";
import ResetEmail from "../components/resetPasswordEmail/ResetEmailPassword";
import "./login.css";

const ResetEmailPage = ({ supabase }) => {
  return (
    <div>
      <main className="main">
        <Banner path={loginimage} />
        <div className="divContentor">
          <ResetEmail supabase={supabase} />
        </div>
      </main>
    </div>
  );
};

export default ResetEmailPage;
