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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
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
