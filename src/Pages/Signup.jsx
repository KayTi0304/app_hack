import "./Signup.css";
import { useState, useContext } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  doSignup,
  writeFarmerEntry,
  writeManufacturerEntry,
  writeRestaurantEntry,
} from "../Backend.jsx";

const Signup = (props) => {
  const [checkedF, setCheckedF] = useState(false);
  const [checkedM, setCheckedM] = useState(false);
  const [checkedR, setCheckedR] = useState(false);
  const emailInputRef = useRef();
  const descInputRef = useRef();
  const nameInputRef = useRef();
  const passInputRef = useRef();

  const handleChangeF = () => {
    setCheckedF(!checkedF);
  };

  const handleChangeM = () => {
    setCheckedM(!checkedM);
    console.log(checkedM)
  };

  const handleChangeR = () => {
    setCheckedR(!checkedR);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit");

    doSignup(emailInputRef.current.value, passInputRef.current.value);

    const emailData = emailInputRef.current.value;
    const passwordData = passInputRef.current.value;
    const nameData = nameInputRef.current.value;
    const descData = descInputRef.current.value;

    const curUser = {
      email: emailData,
      password: passwordData,
      name: nameData,
      desc: descData,
      products: "",
    };

    props.onCurUser(curUser);

    console.log(checkedF);
    console.log(checkedM);
    console.log(checkedR);

    if (checkedF) {
      writeFarmerEntry(nameData, emailData, descData, []);
    }
    if (checkedM) {
      writeManufacturerEntry(nameData, emailData, descData, [], []);
    }
    if (checkedR) {
      writeRestaurantEntry(nameData, emailData, descData, []);
    }

    console.log(curUser);
    props.onchangetab();
  };

  return (
    <div className="signupbody">
      <h1 className="signup">Sign Up</h1>
      <div>
        <form className="form-c" onSubmit={handleOnSubmit}>
          <div className="input-container">
            <label htmlFor="name">Company/Individual Name</label>
            <input
              className="input1"
              type="text"
              required
              name="name"
              id="name"
              ref={nameInputRef}
              placeholder="Company/Individual Name"
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              className="input1"
              type="text"
              required
              name="email"
              id="email"
              ref={emailInputRef}
              placeholder="Email"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              className="input1"
              type="text"
              required
              name="password"
              id="password"
              ref={passInputRef}
              placeholder="Password"
            />
          </div>
          <div className="input-container">
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
          <div>
            <input className="input2" type="radio" value="Farmer" name="user" />{" "}
            Farmer
            <input
              className="input2"
              type="radio"
              value="Manufacturer"
              name="user"
            />{" "}
            Manufacturer
            <input
              className="input2"
              type="radio"
              value="Restaurant"
              name="user"
            />{" "}
            Restaurant
          </div>
          <div>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
