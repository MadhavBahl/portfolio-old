import React from "react";

import { SideNav } from "./../SideNav/SideNav";
import { SectionContainer } from "./../SectionContainer/SectionContainer";

import "./portfolio.css";

export const Portfolio = ({
  handleSectionClick,
  selectedHeading,
  selectedQuote,
  selectedSection,
  about,
  skills,
  projects,
  experiences,
}) => {
  return (
    <div className="portfolio-container">
      <div className="sidenav-container">
        <SideNav handleSectionClick={handleSectionClick} />
      </div>
      <div className="main-section-container">
        <SectionContainer
          selectedSection={selectedSection}
          selectedHeading={selectedHeading}
          selectedQuote={selectedQuote}
          about={about}
          skills={skills}
          projects={projects}
          experiences={experiences}
        />
      </div>
    </div>
  );
};
