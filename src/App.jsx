import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sample from "./Pages/Sample";
import Signup from "./Pages/Signup";
import Marketplace from "./Pages/Marketplace";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Sample />} />
        <Route exact path="/sign-up" element={<Signup />} />
        <Route exact path="/marketplace" element={<Marketplace />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
