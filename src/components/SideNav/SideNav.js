import React from "react";

import "./sidenav.css";
import logo from "./../../logo/logo.png";
import twitter from "./../../logo/twitter.png";
export const SideNav = ({ handleSectionClick }) => {
  return (
    <div className="sidenav">
      <img
        src="https://avatars2.githubusercontent.com/u/26179770?s=400&u=c192e93f9e95569393dc3ba8875e3214940ff01e&v=4"
        className="avatar"
        alt="avatar"
      />
      <h2 className="main-name">Madhav Bahl</h2>
      <p className="subtitle">"A Cadet Who Codes"</p>
      <div className="sections-list">
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("about")}
        >
          About Me
        </p>
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("skills")}
        >
          Skills
        </p>
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("projects")}
        >
          Projects
        </p>
        <p
          className="section-list-element"
          onClick={() => handleSectionClick("experiences")}
        >
          Experience
        </p>
      </div>
      <div className="logos">
        <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin">
          <img
            alt="LinkedIn"
            className="image"
            width="22px"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
          />
        </a>
        <a href="https://github.com/">
          <img alt="github" width="24px" className="image" src={logo} />
        </a>
        <a href="https://twitter.com/login">
          <img alt="github" width="24px" className="image" src={twitter} />
        </a>
      </div>
    </div>
  );
};
