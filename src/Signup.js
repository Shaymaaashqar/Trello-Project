//import Sign from "./Sign";
//import { useNavigate } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate();

  const navigateToSign = () => {
    // 👇️ navigate to /SIGN
    navigate("/");
  };

  return (
    <div className="signup">
      <div className="signupfont">
        <h1>Sign up to see this board</h1>
        <p>
          You’re almost there! The board you are trying to access requires a
          Trello account.
        </p>
      </div>
      <div className="account">
        <button
          onClick={navigateToSign}
          className="buttonSignup"
          type="submit"
          id="free"
        >
          Sign Up For Free
        </button>
        <Routes>
          <Route path="/Sign" element={<Sign />} />
        </Routes>

        <a href="/Login">Already have an account? Log in</a>
      </div>
    </div>
  );
}

function Sign() {
  return <h1>hellllo guyyys</h1>;
}
