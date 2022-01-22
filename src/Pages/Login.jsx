import "./Login.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const emailInputRef = useRef();
  const nameInputRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="loginbody">
      <h1 className="login">Login</h1>
      <div>
        <form className="form-c" onSubmit={handleOnSubmit}>
          <div className="form-con">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              required
              name="email"
              id="email"
              ref={emailInputRef}
              placeholder="Email"
            />
          </div>
          <div className="form-con">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              name="name"
              id="name"
              ref={nameInputRef}
              placeholder="Name"
            />
          </div>
          <Link to="/marketplace">
            <button className="submit-btn" type="submit">
              Login
            </button>
          </Link>
        </form>
      </div>
      <Link to="/">
        <button className="submit-btn" type="submit">
          Return
        </button>
      </Link>
    </div>
  );
};

export default Login;
