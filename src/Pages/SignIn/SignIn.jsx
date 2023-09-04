import React, { useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Navbar />
      <div style={{ height: "100vh" }}>
        <div className="max-w-md mx-auto mt-8 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email or Username:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
                required
              />
            </div>
            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
