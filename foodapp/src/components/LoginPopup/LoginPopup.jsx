import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currSate, setCurrSate] = useState("Login");

  return (
    <div className="login-popup">
      <from className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currSate}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currSate === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />
        </div>
        <button>
          {currSate === "Sign Up" ? "Create an account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By signing up, you agree to our terms of use and privacy policy</p>
        </div>
        {currSate === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrSate("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrSate("Login")}>Login here</span>
          </p>
        )}
      </from>
    </div>
  );
};

export default LoginPopup;
