import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-opacity-100 w-3/4 mx-auto p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Your Logo
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <button className=" text-white ">Sign In</button>
          <button className="bg-white text-[#6D2B9D] px-4 py-2 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
