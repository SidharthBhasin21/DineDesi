import React from "react";
import logo from "../assets/Logo.png";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-links">Home</li>
          <li className="nav-links">About us</li>
          <li className="nav-links">Contact us</li>
          <li className="nav-links">Cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
