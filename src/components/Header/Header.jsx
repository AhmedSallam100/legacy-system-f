import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to={"/"}>
          <div className="logo">
            <img
              src="https://i.postimg.cc/ZqchM4Gk/logo.jpg"
              alt="Legacy Code"
            />
            <h1>Legacy Code</h1>
          </div>
        </Link>
        <div className="profile">
          <i className="fa-regular fa-user"></i>
          <img src="https://i.postimg.cc/7YFGxnfH/avatar.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
