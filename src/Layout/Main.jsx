import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="bg-slate-950 h-screen ">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
