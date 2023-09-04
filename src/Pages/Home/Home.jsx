import React from "react";
import "./Home.css";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="space-background">
          <h1>Welcome to Open Science & Open Source Showcase</h1>
          <p>Discover and contribute to amazing projects!</p>
          <div className="home-buttons">
            <Link to="/participate">
              <button className="home-button1">Create History</button>
            </Link>
            <Link to="/participate">
              <button className="home-button2">Contribute</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
