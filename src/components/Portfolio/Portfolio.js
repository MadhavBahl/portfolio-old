import React from 'react';

import { SideNav } from './../SideNav/SideNav';
import { SectionContainer } from './../SectionContainer/SectionContainer';

import './portfolio.css';

export const Portfolio = ({ handleSectionClick }) => {
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">
                <SideNav
                    handleSectionClick={handleSectionClick}
                />
            </div>
            <div className="main-section-container">
                <SectionContainer />
            </div>
        </div>
    );
};