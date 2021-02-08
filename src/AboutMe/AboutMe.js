import React from "react";
import "./AboutMe.scss";
import { NavLink } from "react-router-dom";
import reduxSVG from "./logos/reduxSVG.svg";
import reactSVG from "./logos/reactSVG.svg";
import cssSVG from "./logos/cssSVG.svg";
import javascriptSVG from "./logos/javascriptSVG.svg";
import sassSVG from "./logos/sassSVG.svg";
import gitSVG from "./logos/gitSVG.svg";
import githubSVG from "./logos/githubSVG.svg";
import emailSVG from "./logos/emailSVG.svg";

const AboutMe = (props) => {
  return (
    <div className="aboutMe">
      <div>
        <h2>Frontend developer with main interest in React</h2>
        <h3>Thank you for visiting my website!</h3>
      </div>

      <div className="aboutMe__github">
        <img
          src={githubSVG}
          alt={"githubSVG"}
          className="aboutMe__logos-item-git"
        />
        <div className="aboutMe__buttons-item aboutMe__buttons-item-git">
          {" "}
          <a href="https://github.com/renatasa">My GitHub</a>
        </div>
      </div>

      <div>
        <h2>Check out my demo projects</h2>
        <div>
          <NavLink to="/coffeeShop/">
            {" "}
            <div className="aboutMe__buttons-item">Coffee Shop</div>
          </NavLink>
          <NavLink to="/stats">
            <div className="aboutMe__buttons-item">Statistics</div>
          </NavLink>
        </div>
      </div>

      <div className="aboutMe__contact">
        <img
          src={emailSVG}
          alt={"emailSVG"}
          className="aboutMe__contact-logo"
        />
        <p> r.salkevic@gmail.com </p>
      </div>

      <div className="aboutMe__logos">
        <img
          src={cssSVG}
          alt={"cssSVG"}
          className="aboutMe__logos-item   aboutMe__logos-css"
        />
        <img
          src={javascriptSVG}
          alt={"javascriptSVG"}
          className="aboutMe__logos-item"
        />
        <img src={sassSVG} alt={"sassSVG"} className="aboutMe__logos-item" />
        <img src={reactSVG} alt={"reactSVG"} className="aboutMe__logos-item" />
        <img src={reduxSVG} alt={"reduxSVG"} className="aboutMe__logos-item" />
        <img src={gitSVG} alt={"gitSVG"} className="aboutMe__logos-item" />
      </div>
    </div>
  );
};

export default AboutMe;
