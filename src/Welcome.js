import React, { useState, useEffect } from 'react';
// import PortfolioArrowDown from './PortfolioArrowDown';

function Welcome() {
	// const [center, setCenter] = useState(0);

	// useEffect(() => {
	// 	const arrowDivWidth = document.getElementById('portfolio-link')
	// 		.offsetWidth;
	// 	console.log(arrowDivWidth);
	// 	setCenter(`${window.innerWidth / 2 - arrowDivWidth / 2}px`);
	// 	console.log(center);
	// }, [center]);
	return (
		<div className="welcome-div">
			<div className="h2-div">
				<h2 className="welcome-h2">hello.</h2>
			</div>
			<div className="p-intro">
				<p>
					I'm a NYC based front end developer. Please, check out my
					portfolio.
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
			{/* <PortfolioArrowDown center={center} /> */}
		</div>
	);
}

export default Welcome;
