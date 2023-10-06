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
        <div className="nav-div">
          <ul className="nav-ui">
            <li>
              <Link to="/participate" className="link">
                Participate
              </Link>
            </li>
            <li>
              <Link to="/nasaprojects" className="link">
                NASA Projects
              </Link>
            </li>
            <li>
              <Link to="/signin">
                <button className="link">Sign In</button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="signin-button">Sign Up</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
