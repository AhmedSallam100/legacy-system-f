import React from "react";
import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="container side-container"
      style={{ width: "fit-content", margin: "0" }}
    >
      <div className="sidebar">
        <ul className="side-links">
          <NavLink to={"/add-employee"} className="side-link">
            <Link to={"/add-employee"}>
              <i className="uil uil-user"></i>
              <span>Employees</span>
            </Link>
          </NavLink>
          <NavLink to={"/add-project"} className="side-link ">
            <Link to={"/add-project"}>
              <i className="uil uil-file"></i>
              <span>Projects</span>
            </Link>
          </NavLink>
          <NavLink to={"/add-task"} className="side-link ">
            <Link to={"/add-task"}>
              <i className="uil uil-list-ol-alt"></i>
              <span>Tasks</span>
            </Link>
          </NavLink>
          <NavLink to={"/analytics"} className="side-link ">
            <Link to={"/analytics"}>
              <i className="uil uil-comparison"></i>
              <span>Analytics</span>
            </Link>
          </NavLink>
          <NavLink to={"/financial"} className="side-link ">
            <Link to={"/financial"}>
              <i className="uil uil-wallet"></i>
              <span>Financial</span>
            </Link>
          </NavLink>
        </ul>
        <div className="side-profile">
          <div>
            <img src="https://i.postimg.cc/7YFGxnfH/avatar.png" alt="avatar" />
            <div className="profile-detail">
              <span>Ahmed Sallam</span>
              <span>CEO & Founder</span>
            </div>
          </div>
          <i className="uil uil-sign-out-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
