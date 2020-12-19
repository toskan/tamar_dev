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
					I'm Tamar, a Front End Web Developer, based in NY. I built
					this site in React. My other projects are written in
					Javascript, using jQuery.
					<br />
					<br />
					I love to solve problems. The satisfaction of making
					something work and creating something new in the process is
					the best reward.
					<br />
					<br />
					Check out my{' '}
					<Link to="/portfolio" className="portfolio-text-link">
						portfolio
					</Link>{' '}
					and get in touch if you like what you see.
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
