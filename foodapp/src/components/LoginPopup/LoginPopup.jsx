import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currSate, setCurrSate] = useState("Sign Up");

  return (
    <div className="login-popup">
      <from className="login-popup-container">
        <dic className="login-popup-title">
          <h2>{currSate}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </dic>
      </from>
    </div>
  );
};

export default LoginPopup;
