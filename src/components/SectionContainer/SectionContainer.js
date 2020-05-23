import React from 'react';

import { About } from './../About/About';
import { Skills } from './../Skills/Skills';
import { Projects } from './../Projects/Projects';

import './section-container.css';

export const SectionContainer = ({ 
    selectedHeading, 
    selectedQuote,
    selectedSection,
    about,
    skills,
    projects }) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">{selectedHeading}</h1>
                <p className="main-quote">{selectedQuote}</p>
            </div>
            <div className="section-component">
                {
                    {
                        about: <About bio={about.bio} />,
                        skills: <Skills skills={skills} />,
                        projects: <Projects projects={projects} />
                    }[selectedSection]
                }
            </div>
        </div>
    )
}