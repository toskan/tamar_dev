import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
	return (
		<div className="welcome-div">
			<div className="h2-div">
				<h2 className="welcome-h2">hello.</h2>
			</div>
			<div className="p-intro">
				<p>
					I'm Tamar, a NYC based front end developer.
					<br />
					<br />
					Check out my{' '}
					<Link to="/portfolio" className="portfolio-text-link">
						portfolio
					</Link>
					.
				</p>
			</div>
			<div className="skills-div">
				<ul className="skills-list">
					<li>CSS</li>
					<li>RWD</li>
					<li>JS</li>
					<li>jQuery</li>
					<li>React</li>
				</ul>
			</div>
		</div>
	);
}

export default Welcome;
