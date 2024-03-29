import React from "react";
import "./Home.css";
import VanillaTilt from "vanilla-tilt";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import home from "../../Assets/home.png";

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
            <span></span>TASKFLOW
          </div>
          <ul>
            <li>
              <Link className="link" to="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/About">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/Services">
                Services
              </Link>
            </li>
            <li>
              <Link className="link" to="/Contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="link" to="/Todo">
                Todo
              </Link>
            </li>
            <li>
              <Link className="link" to="/Demo">
                Demo
              </Link>
            </li>
          </ul>
        </nav>
        <div className="contains">
          <div className="section-1">
            <h1>Welcome</h1>
            <h3>
              To Our <span>' </span>Task Management<span> '</span>
              <br></br>
              <span>Application</span>
            </h3>
            <p>Please Sign-Up to start managing your task.</p>
            <div className="button">
              <Link className="link" to="/SignUp">
                Sign-Up
              </Link>
              <span> </span>
              <Link className="link" to="/SignIn">
                {" "}
                Sign-In
              </Link>
            </div>
          </div>
          <div className="section-1">
            <img src={home} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
