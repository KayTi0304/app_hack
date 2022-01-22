import "./Login.css";
import { useRef } from "react";
import { doLogin, getEntityByEmail } from "../Backend.jsx";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react/cjs/react.development";

const Login = ({ onStateChanger }) => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "farmer");
  const emailInputRef = useRef();
  const passInputRef = useRef();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const getUsers = async () => {
      await getDocs(usersCollectionRef).then((data) => {
        setUsers(data.docs.map((doc) => ({ ...doc.data() })));
        console.log(users);

        const arr = users.filter(
          (user) => user.email === emailInputRef.current.value
        );
        console.log(arr);
        if (arr === []) console.log("login wrong");
        else {
          console.log("login correct!");
          onStateChanger();
        }
      });
    };

    getUsers();
    /*
    console.log("submit");
    var user_arr = [];
    doLogin(emailInputRef.current.value, passInputRef.current.value).then(
      () => {}
    );
    console.log(user_arr);
    var end = user_arr.filter((e) => e.email === emailInputRef.current.value);

    if (end === []) console.log("login unsuccessful");
    else {
      onStateChanger();
      console.log(end);
    }*/
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
