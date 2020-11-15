import React, { useState, useEffect } from 'react';
// import PortfolioArrowDown from './PortfolioArrowDown';
import { Link } from 'react-router-dom';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { IconContext } from 'react-icons';

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
					I'm Tamar, a NYC based front end developer.
					<br />
					<br />
					Please, check out my{' '}
					<Link to="/work" className="portfolio-text-link">
						portfolio
						<IconContext.Provider
							value={{
								size: '1em',
								color: '#1d1d1d',
								className: 'global-class-name',
							}}
						>
							<AiOutlineDoubleRight />
						</IconContext.Provider>
					</Link>
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
