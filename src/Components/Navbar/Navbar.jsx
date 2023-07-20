import React, { useContext, useState } from "react";
import { NavLink, activeclassname } from "react-router-dom";
import "./Navbar.css";
import { AppContext } from "../..";

function Navbar() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <nav className="navbar">
      {state.fullNavbar ? (
        <div className="nav-section">
          <NavLink to="/" activeclassname="active" className="nav-item">
            <i className="fa-solid fa-house"></i> <p>Home</p>
          </NavLink>
          <NavLink to="/shorts" activeclassname="active" className="nav-item">
            <i className="fa-solid fa-bolt"></i> <p>Shorts</p>
          </NavLink>
          <NavLink
            to="/subscriptions"
            activeclassname="active"
            className="nav-item"
          >
            <i className="fa-solid fa-inbox"></i>
            <p>Subscriptions</p>
          </NavLink>
          <NavLink to="/library" activeclassname="active" className="nav-item">
            <i className="fa-solid fa-book"></i>
            <p>Library</p>
          </NavLink>
          <NavLink to="/history" activeclassname="active" className="nav-item">
            <i className="fa-solid fa-clock-rotate-left"></i>
            <p>History</p>
          </NavLink>
        </div>
      ) : (
        <div className="nav-section">
          <NavLink to="/" activeclassname="active" className="nav-item">
            <i className="fa-solid fa-house"></i>
          </NavLink>
          <NavLink to="/shorts" activeclassname="active" className="nav-item">
            <i className="fa-solid fa-bolt"></i>
          </NavLink>
          <NavLink
            to="/subscriptions"
            activeclassname="active"
            className="nav-item"
          >
            <i className="fa-solid fa-inbox"></i>
          </NavLink>
          <NavLink to="/library" activeclassname="active" className="nav-item">
            <i className="fa-solid fa-book"></i>
          </NavLink>
          <NavLink to="/history" activeclassname="active" className="nav-item">
            <i className="fa-solid fa-clock-rotate-left"></i>
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
