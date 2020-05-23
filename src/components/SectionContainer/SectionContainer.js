import React from 'react';

import { About } from './../About/About'

import './section-container.css';

export const SectionContainer = (props) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">About Me</h1>
                <p className="main-quote">"If you love life, don't waste time, <br />for time is what life is made up of"</p>
            </div>
            <div className="section-component">
                <About />
            </div>
        </div>
    )
}