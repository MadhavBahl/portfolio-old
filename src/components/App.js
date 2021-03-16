import React, { Component } from "react";

import { Portfolio } from "./Portfolio/Portfolio";

import { about } from "./../constants/About";
import { skills } from "./../constants/Skills";
import { projects } from "./../constants/Projects";
import { experiences } from "./../constants/Experiences";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedSection: "",
      selectedHeading: "",
      selectedQuote: "",
      about: null,
      skills: null,
      projects: null,
      experiences: null,
    };
  }

  componentWillMount() {
    this.setState({
      about,
      skills,
      projects,
      experiences,
      selectedHeading: about.heading,
      selectedQuote: about.quote,
      selectedSection: "about",
    });
  }

  handleSectionClick = (section) => {
    this.setState({
      selectedSection: section,
      selectedHeading: this.state[section].heading,
      selectedQuote: this.state[section].quote,
    });
  };

  render() {
    return (
      <div className="App">
        <Portfolio
          handleSectionClick={this.handleSectionClick}
          selectedSection={this.state.selectedSection}
          selectedHeading={this.state.selectedHeading}
          selectedQuote={this.state.selectedQuote}
          about={this.state.about}
          skills={this.state.skills}
          projects={this.state.projects}
          experiences={this.state.experiences}
        />
      </div>
    );
  }
}

export default App;
