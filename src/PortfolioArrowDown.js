import React from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const PortfolioArrowDown = ({ center }) => {
	return (
		<div id="portfolio-arrow-div" style={{ left: center }}>
			{/* <h3 id="portfolio-arrow-div-h3">Portfolio</h3> */}
			<Link to="/work" id="portfolio-link">
				Portfolio
			</Link>
			<Link to="/work" id="portfolio-link">
				<IconContext.Provider
					value={{
						size: '1.5em',
						color: '#1d1d1d',
						className: 'global-class-name',
					}}
				>
					<BsChevronDoubleDown />
				</IconContext.Provider>
			</Link>
		</div>
	);
};

export default PortfolioArrowDown;
