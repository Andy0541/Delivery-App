import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite foods</h2>
        <p>
          Choose from a wide variety of foods and enjoy your meal whit our
          delicious menu. our mission is to provide you with the best food and
          service in the market.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
