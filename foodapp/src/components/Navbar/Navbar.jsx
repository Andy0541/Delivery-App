import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/admin_assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" />
    </div>
  );
};

export default Navbar;
