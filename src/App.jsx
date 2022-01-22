import "./App.css";
import Signup from "./Pages/Signup";
import Marketplace from "./Pages/Marketplace";
import Login from "./Pages/Login";
import EditProfile from "./Pages/EditProfile";
import { useState } from "react";

function App() {
  const [curUser, setCurUser] = useState({});
  const [signUp, setSignUp] = useState(true);
  const [login, setLogin] = useState(false);
  const [marketplace, setMarketplace] = useState(false);
  const [editprofile, setEditprofile] = useState(false);

  const curUserHandler = (curUser) => {
    const user = {
      email: curUser.email,
      password: curUser.password,
      name: curUser.name,
      desc: curUser.desc,
    };

    setCurUser(user);
  };

  const editUserHandler = (curUser) => {
    const user = {
      email: curUser.email,
      password: curUser.password,
      name: curUser.name,
      desc: curUser.desc,
    };

    setCurUser(user);
  };

  const signupHandler = () => {
    setSignUp(true);
    setLogin(false);
    setMarketplace(false);
    setEditprofile(false);
  };

  const loginHandler = () => {
    setSignUp(false);
    setLogin(true);
    setMarketplace(false);
    setEditprofile(false);
  };

  const marketplaceHandler = () => {
    setSignUp(false);
    setLogin(false);
    setMarketplace(true);
    setEditprofile(false);
  };

  const editprofileHandler = () => {
    setSignUp(false);
    setLogin(false);
    setMarketplace(false);
    setEditprofile(true);
  };

  return (
    <div>
      <section>
        <ul>
          <li>
            <button onClick={signupHandler}>SignUp</button>
            <button onClick={loginHandler}>Login</button>
            <button onClick={marketplaceHandler}>Marketplace</button>
            <button onClick={editprofileHandler}>EditProfile</button>
          </li>
        </ul>
      </section>
      <div>
        {signUp ? <Signup onCurUser={curUserHandler} /> : <div></div>}
        {login ? <Login /> : <div></div>}
        {marketplace ? <Marketplace /> : <div></div>}
        {editprofile ? (
          <EditProfile user={curUser} onCurUser={editUserHandler} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
