import React from "react";

import { About } from "./../About/About";
import { Skills } from "./../Skills/Skills";
import { Projects } from "./../Projects/Projects";
import { Experience } from "../Experience/Experience";

import "./section-container.css";

export const SectionContainer = ({
  selectedHeading,
  selectedQuote,
  selectedSection,
  about,
  skills,
  projects,
  experiences,
}) => {
  const Selection = {
    about: <About bio={about.bio} />,
    skills: <Skills skills={skills} />,
    projects: <Projects projects={projects} />,
    experiences: <Experience experiences={experiences} />,
  };
  return (
    <div className="section-container">
      <div className="section-heading-container">
        <h1 className="main-heading">{selectedHeading}</h1>
        <p className="main-quote">{selectedQuote}</p>
      </div>
      <div className="section-component">{Selection[selectedSection]}</div>
    </div>
  );
};
