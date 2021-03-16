import React from "react";

import "./ExperienceCard.css";

export const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card">
      <p>
        <b>CompanyName:</b> {experience.companyName}
      </p>
      <p>
        <b>Role:</b> {experience.role}
      </p>
      <p>
        <b></b> {experience.about}
      </p>
    </div>
  );
};
