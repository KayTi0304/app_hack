import "./Login.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { doLogin } from "../Backend.jsx";

const Login = ({ onStateChanger }) => {
  const emailInputRef = useRef();
  const passInputRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    doLogin(emailInputRef.current.value, passInputRef.current.value);
    onStateChanger();
  };

  return (
    <div className="loginbody">
      <h1 className="login">Login</h1>
      <div>
        <form className="form-c" onSubmit={handleOnSubmit}>
          <div className="form-con">
            <label htmlFor="email">Email</label>
            <input
              className="inputLog"
              type="text"
              required
              name="email"
              id="email"
              ref={emailInputRef}
              placeholder="Email"
            />
          </div>
          <div className="form-con">
            <label htmlFor="password">Password</label>
            <input
              className="inputLog"
              type="text"
              required
              name="password"
              id="password"
              ref={passInputRef}
              placeholder="Password"
            />
          </div>
          <div>
            <button className="submit-btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
