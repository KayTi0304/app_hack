import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Sample = () => {
  return (
    <div className="sample">
      Welcome!
      <div className="parasam">
        <p>Buy Food. Make Food. Connect through food.</p>
      </div>
      <div>
        <Link to="/sign-up">
          <button className="btn-sample">Sign Up</button>
        </Link>
        <span></span>
        <Link to="/Login">
          <button className="btn-sample">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Sample;
