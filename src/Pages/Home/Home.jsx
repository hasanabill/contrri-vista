import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="space-background">
        <h1>Welcome to Open Science & Open Source Showcase</h1>
        <p>Discover and contribute to amazing projects!</p>
        <div className="home-buttons">
          <button className="home-button1">Create History</button>
          <button className="home-button2">Contribute</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
