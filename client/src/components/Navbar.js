import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="Navbar">
      <div className="container">
        <h1>
          <span>Aklat</span>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">
              <span className="header__optionLineTwo"> Home </span>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <span className="header__optionLineTwo">About Us </span>
            </Link>
          </li>
          <li>
            <Link to="/Details">
              <span className="header__optionLineTwo"> Cart </span>
            </Link>
          </li>
          <li>
            <Link to="/ContactUs">
              <span className="header__optionLineTwo"> Contact Us </span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <span className="header__optionLineTwo"> Profile </span>
            </Link>
          </li>
          <li>
            <Link to="/Login">
              <span className="header__optionLineTwo"> Login </span>
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <HiOutlineMenuAlt4 className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
