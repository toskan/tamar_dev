import React from 'react';
import Welcome from './Welcome';
import './home.css';

class Home extends React.Component {
	render() {
		return (
			<div className="content opacity-content">
				<Welcome />
			</div>
		);
	}
}

export default Home;
