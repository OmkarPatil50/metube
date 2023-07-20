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
          <div className="nav-items-section">
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
          </div>

          <div className="nav-items-section">
            <NavLink
              to="/library"
              activeclassname="active"
              className="nav-item"
            >
              <i className="fa-solid fa-book"></i>
              <p>Library</p>
            </NavLink>
            <NavLink
              to="/history"
              activeclassname="active"
              className="nav-item"
            >
              <i className="fa-solid fa-clock-rotate-left"></i>
              <p>History</p>
            </NavLink>
          </div>

          <div className="nav-items-section sign-in-tag">
            <p className="nav-items-section-heading">
              Sign in to like videos, comment, and subscribe.
            </p>
            <button className="sign-in-btn-top-bar sign-in-btn-nav">
              <i className="fa-regular fa-circle-user"></i> Sign in
            </button>
          </div>

          <div className="nav-items-section">
            <p className="nav-items-section-heading">Explore</p>
            <NavLink
              to="/trending"
              activeclassname="active"
              className="nav-item"
            >
              <i className="fa-solid fa-fire"></i>
              <p>Trending</p>
            </NavLink>
            <NavLink
              to="/shopping"
              activeclassname="active"
              className="nav-item"
            >
              <i className="fa-solid fa-bag-shopping"></i>
              <p>Shopping</p>
            </NavLink>
            <NavLink to="/music" activeclassname="active" className="nav-item">
              <i className="fa-solid fa-music"></i>
              <p>Music</p>
            </NavLink>
            <NavLink to="/movies" activeclassname="active" className="nav-item">
              <i className="fa-solid fa-clapperboard"></i>
              <p>Movies</p>
            </NavLink>
            <NavLink to="/live" activeclassname="active" className="nav-item">
              <i className="fa-solid fa-wifi"></i>
              <p>Live</p>
            </NavLink>
            <NavLink to="/gaming" activeclassname="active" className="nav-item">
              <i className="fa-solid fa-gamepad"></i>
              <p>Gaming</p>
            </NavLink>
            <NavLink to="/news" activeclassname="active" className="nav-item">
              <i className="fa-regular fa-newspaper"></i>
              <p>News</p>
            </NavLink>
            <NavLink to="/sports" activeclassname="active" className="nav-item">
              <i className="fa-solid fa-trophy"></i>
              <p>Sports</p>
            </NavLink>
            <NavLink
              to="/learning"
              activeclassname="active"
              className="nav-item"
            >
              <i className="fa-regular fa-lightbulb"></i>
              <p>Learning</p>
            </NavLink>
            <NavLink
              to="/fashion"
              activeclassname="active"
              className="nav-item"
            >
              <i className="fa-solid fa-shirt"></i>
              <p>Fashion & Beauty</p>
            </NavLink>
          </div>
          <div className="nav-items-section">
            <NavLink
              to="/channels"
              activeclassname="active"
              className="nav-item"
            >
              <i className="fa-regular fa-plus"></i>
              <p>Browse Channels</p>
            </NavLink>
          </div>
          <div className="nav-items-section">
            <p className="nav-items-section-heading">More from YouTube</p>
            <NavLink
              to="/settings"
              activeclassname="active"
              className="nav-item"
            >
              <i className="fa-solid fa-gear"></i>
              <p>Settings</p>
            </NavLink>
            <NavLink to="/report" activeclassname="active" className="nav-item">
              <i className="fa-regular fa-flag"></i>
              <p>Report History</p>
            </NavLink>
            <NavLink to="/help" activeclassname="active" className="nav-item">
              <i className="fa-regular fa-circle-question"></i>
              <p>Help</p>
            </NavLink>
            <NavLink
              to="/feedback"
              activeclassname="active"
              className="nav-item"
            >
              <i className="fa-solid fa-exclamation"></i>
              <p>Send Feedback</p>
            </NavLink>
          </div>
          <div className="nav-items-section"></div>
          <div className="nav-items-section"></div>
          <div className="nav-items-section"></div>
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
