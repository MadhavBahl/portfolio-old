import React from 'react';

import './skill-card.css';

export const SkillCard = ({ skill }) => {
    return (
        <div className="skill-card">
            {skill}
        </div>
    )
}