import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to the Home Page</h1>
        <p className="home-subtitle">Your gateway to managing students efficiently.</p>
        <button className="home-button">Get Started</button>
      </div>
    </div>
  );
};

export default Home;