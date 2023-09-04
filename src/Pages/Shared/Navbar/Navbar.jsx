import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-opacity-100 w-3/4 mx-auto p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} style={{ maxWidth: "6rem" }} />
        </Link>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/participate" className="link">
                Participate
              </Link>
            </li>
            <li>
              <Link to="/stories" className="link">
                Stories
              </Link>
            </li>
          </ul>
          <Link to="/signin">
            <button className="link">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="signin-button">Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
