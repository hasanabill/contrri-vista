import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

import "../Navbar/Navbar.css";

const Navbar2 = () => {
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
              <Link to="/nasaprojects" className="link">
                NASA Projects
              </Link>
            </li>
            <li>
              <Link to="/profile" className="link">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
