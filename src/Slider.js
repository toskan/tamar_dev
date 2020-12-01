import React, { useState, useEffect } from 'react';
// import { css, jsx } from '@emotion/core';
import images from './images';
import './slider.css';
import Thumbnail from './Thumbnails';
import ClickPrompt from './ClickPrompt';
import PortfolioSlides from './PortfolioSlides';

/**
 * @function Slider
 */
const Slider = (props) => {
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
		const portfolioDiv = document.getElementsByClassName(
			'portfolio-div'
		)[0];
		if (!nailSelect) {
			portfolioDiv.style.display = 'none';
		} else {
			portfolioDiv.style.display = 'block';
		}
	}, [nailSelect]);

	return (
		<>
			<div className="portfolio-div">
				<Thumbnail
					setNailSelect={setNailSelect}
					setNailSelected={setNailSelected}
				/>
				{nailSelect && <ClickPrompt />}
			</div>
			<PortfolioSlides
				images={images}
				slideNumber={slideNumber}
				nailSelect={nailSelect}
			/>
		</>
	);
};

export default Slider;
