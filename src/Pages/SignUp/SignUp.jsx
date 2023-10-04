import React, { useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    fieldofInterest: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-md mx-auto mt-3 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email:
              </label>
              <input
                type="email"
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
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="fieldofInterest" className="block text-gray-700">
                Field Of Interest:
              </label>
              <input
                type="text"
                id="fieldofInterest"
                name="fieldofInterest"
                value={formData.fieldofInterest}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
              ></input>
            </div>
            <button type="submit" className="signin-button w-full">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
