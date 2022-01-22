import { useState } from "react";
import { useRef } from "react";

const EditProfile = ({ user, onCurUser }) => {
  console.log(user);

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
  };

  const handleChangeR = () => {
    setCheckedR(!checkedR);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit");

    const emailData = emailInputRef.current.value;
    const passwordData = passInputRef.current.value;
    const nameData = nameInputRef.current.value;
    const descData = descInputRef.current.value;

    const curUser = {
      email: emailData,
      password: passwordData,
      name: nameData,
      desc: descData,
    };

    onCurUser(curUser);
  };

  return (
    <div className="editprofile">
      <h1 className="signup">Edit Profile</h1>
      <div>
        <form className="form-c" onSubmit={handleOnSubmit}>
          <div className="form-con">
            <label htmlFor="name">Company/Individual Name</label>
            <input
              type="text"
              required
              name="name"
              id="name"
              ref={nameInputRef}
              value={user.name}
            />
          </div>
          <div className="form-con">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              required
              name="email"
              id="email"
              ref={emailInputRef}
              value={user.email}
            />
          </div>
          <div className="form-con">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              required
              name="password"
              id="password"
              ref={passInputRef}
              value={user.password}
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
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
