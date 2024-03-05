import React from "react";
import "./Home.css";
import VanillaTilt from "vanilla-tilt";
import {useEffect} from "react";

const Home = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".box"), {
      max: 1,
      speed: 1,
      glare: true,
      "max-glare": 0.1,
    });
  });
  return (
    <div className="container">
      <div className="ball-1"></div>
      <div className="ball-2"></div>
      <div className="ball-3"></div>
      <div className="box">
        <nav className="nav">
          <div className="logo">
            !<span></span>LOGO
          </div>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        <div className="contains">
          <div className="section-1">
            <h1>Welcome</h1>
            <h3>
              To Our<span>'</span>Task Management<span>'</span>Application
            </h3>
            <p>Please Sign-Up to start managing your task</p>
            <div className="button">
              <a>Sign-Up</a>
              <span> </span>
              <a>Sign-In</a>
            </div>
          </div>
          <div className="section-1">
            <img src="1.png" alt="homeImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
