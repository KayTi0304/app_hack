import "./Signup.css";
import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [checkedF, setCheckedF] = useState(false);
  const [checkedM, setCheckedM] = useState(false);
  const [checkedR, setCheckedR] = useState(false);
  const emailInputRef = useRef();
  const descInputRef = useRef();
  const nameInputRef = useRef();

  const handleChangeF = () => {
    setCheckedF(!checkedF);
  };

  const handleChangeM = () => {
    setCheckedM(!checkedM);
  };

  const handleChangeR = () => {
    setCheckedR(!checkedR);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="signupbody">
      <h1 className="signup">Sign Up</h1>
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
            <label htmlFor="name">Company/Individual Name</label>
            <input
              type="text"
              required
              name="name"
              id="name"
              ref={nameInputRef}
              placeholder="Company/Individual Name"
            />
          </div>
          <div className="form-con">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              required
              rows="5"
              name="description"
              ref={descInputRef}
              placeholder="Description"
            ></textarea>
          </div>
          <label>
            <input
              type="checkbox"
              checked={checkedF}
              onChange={handleChangeF}
            />
            Farmer
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkedM}
              onChange={handleChangeM}
            />
            Manufacturer
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkedR}
              onChange={handleChangeR}
            />
            Restaurant
          </label>
          <div>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
          <Link to="/">
            <button className="submit-btn" type="submit">
              Return
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;