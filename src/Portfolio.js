import React, { useState, useEffect } from 'react';
// import { css, jsx } from '@emotion/core';
import images from './images';
import './portfolio.css';
import Thumbnail from './Thumbnails';
import ClickPrompt from './ClickPrompt';
import PortfolioSlides from './PortfolioSlides';

/**
 * @function Portfolio
 */
const Portfolio = (props) => {
	const [nailSelect, setNailSelect] = useState(true);

	const [nailSelected, setNailSelected] = useState('');

	const [slideNumber, setSlideNumber] = useState(0);

	useEffect(() => {
		for (let i = 0; i < images.length; i++) {
			if (nailSelected.includes(images[i].projectImgs[0].url)) {
				setSlideNumber(i);
			}
		}
	}, [nailSelected]);

	useEffect(() => {
		const portfolioDiv = document.getElementsByClassName('portfolio')[0];
		const navDiv = document.getElementsByClassName('side-nav-div')[0];
		if (!nailSelect) {
			portfolioDiv.style.display = 'none';
			navDiv.style.display = 'none';
		} else {
			portfolioDiv.style.display = 'block';
			navDiv.style.display = 'flex';
		}
	}, [nailSelect]);

	return (
		<>
			<div className="portfolio">
				<ClickPrompt />
				<Thumbnail
					setNailSelect={setNailSelect}
					setNailSelected={setNailSelected}
				/>
			</div>
			<PortfolioSlides
				images={images}
				slideNumber={slideNumber}
				setNailSelect={setNailSelect}
				nailSelect={nailSelect}
			/>
		</>
	);
};

export default Portfolio;
