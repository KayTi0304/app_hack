import { useState } from "react";
import { useRef } from "react";
import {
  doSignup,
  writeFarmerEntry,
  writeManufacturerEntry,
  writeRestaurantEntry,
} from "../Backend.jsx";

const EditProfile = ({ user, onCurUser }) => {
  console.log(user);
  const [checkedF, setCheckedF] = useState(false);
  const [checkedM, setCheckedM] = useState(false);
  const [checkedR, setCheckedR] = useState(false);
  const emailInputRef = useRef();
  const descInputRef = useRef();
  const nameInputRef = useRef();
  const passInputRef = useRef();
  const productsInputRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit");

    const emailData = emailInputRef.current.value;
    const passwordData = passInputRef.current.value;
    const nameData = nameInputRef.current.value;
    const descData = descInputRef.current.value;
    const productsData = productsInputRef.current.value;

    const curUser = {
      email: emailData,
      password: passwordData,
      name: nameData,
      desc: descData,
      products: productsData,
      Ustatus: user.Ustatus,
    };

    onCurUser(curUser);

    console.log(checkedF);
    console.log(checkedM);
    console.log(checkedR);

    if (checkedF) {
      writeFarmerEntry(nameData, emailData, descData, productsData.split(","));
    }
    if (checkedM) {
      writeManufacturerEntry(nameData, emailData, descData, productsData.split(","), productsData.split(","));
    }
    if (checkedR) {
      writeRestaurantEntry(nameData, emailData, descData, productsData.split(","));
    }
  };

  return (
    <div className="editprofile">
      <h1 className="signup">Edit Profile</h1>
      <div>
        <form className="form-c" onSubmit={handleOnSubmit}>
          <div className="form-con">
            <label htmlFor="name">Company/Individual Name</label>
            <input
              className="input1"
              type="text"
              required
              name="name"
              id="name"
              ref={nameInputRef}
              defaultValue={user.name}
            />
          </div>
          <div className="form-con">
            <label htmlFor="email">Email</label>
            <input
              className="input1"
              type="text"
              required
              name="email"
              id="email"
              ref={emailInputRef}
              defaultValue={user.email}
            />
          </div>
          <div className="form-con">
            <label htmlFor="password">Password</label>
            <input
              className="input1"
              type="text"
              required
              name="password"
              id="password"
              ref={passInputRef}
              defaultValue={user.password}
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
              defaultValue={user.desc}
            ></textarea>
          </div>
          <div className="form-con">
            <label htmlFor="products">Products</label>
            <textarea
              id="products"
              required
              rows="5"
              name="products"
              ref={productsInputRef}
              defaultValue={user.products}
            ></textarea>
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

export default EditProfile;
