import React, { Component } from 'react';

import { Portfolio } from './Portfolio/Portfolio';

import './App.css';

class App extends Component {
	constructor () {
		super();

		this.state = {
			selectedSection: "about"
		};
	}

	handleSectionClick =  (section) => {
		alert (section);
	}

	render () {
		return (
			<div className="App">
				<Portfolio
					handleSectionClick={this.handleSectionClick}
				/>
			</div>
		);
	}
}

export default App;
