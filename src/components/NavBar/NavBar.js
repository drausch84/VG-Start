import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

    
const NavBar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<Link className="navbar-brand" to="/">
      VGStart
    </Link>
    <div>
      <ul className="navbar-nav">
      <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/news"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/news" className="nav-link">
            News
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/video_game_library"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/video_game_library" className="nav-link">
            Video Game Library
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/reviews"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/reviews" className="nav-link">
            Reviews
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/message_board"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/message_board" className="nav-link">
            Message Board
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/auction"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/auction" className="nav-link">
            Auction Sandbox
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/sign_in"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/sign_in" className="nav-link">
            Sign In
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
