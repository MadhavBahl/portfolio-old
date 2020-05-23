import React from 'react';

import './about.css';

export const About = ({ bio }) => {
    return (
        <div className="about-container">
            <p>{bio}</p>
        </div>
    )
}