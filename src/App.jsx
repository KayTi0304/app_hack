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
      products: curUser.products,
      Ustatus: curUser.Ustatus,
    };

    setCurUser(user);
  };

  const editUserHandler = (curUser) => {
    const user = {
      email: curUser.email,
      password: curUser.password,
      name: curUser.name,
      desc: curUser.desc,
      products: curUser.products,
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
      <header>
        <h1 className="title">Fooder App</h1>
        <ul>
          <li>
            <button className="navbtn" onClick={signupHandler}>
              SignUp
            </button>
            <button className="navbtn" onClick={loginHandler}>
              Login
            </button>
            <button className="navbtn" onClick={marketplaceHandler}>
              Marketplace
            </button>
            <button className="navbtn" onClick={editprofileHandler}>
              EditProfile
            </button>
          </li>
        </ul>
      </header>
      <div className="navbar"></div>
      <div>
        {signUp ? <Signup onCurUser={curUserHandler} onchangetab={marketplaceHandler}/> : <div></div>}
        {login ? <Login onStateChanger={marketplaceHandler} /> : <div></div>}
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
