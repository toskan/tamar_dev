import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import SliderContent from './SliderContent';
import Slide from './Slide';
import images from './images';
import Arrow from './Arrow';
import './slider.css';
import Thumbnail from './Thumbnails';
import ClickPrompt from './ClickPrompt';

/**
 * @function Slider
 */
const Slider = (props) => {
	const getWidth = () => window.innerWidth;

	const [nailSelect, setNailSelect] = useState(true);

	const [nailSelected, setNailSelected] = useState('');

	const [slideNumber, setSlideNumber] = useState(0);

	const [state, setState] = useState({
		activeIndex: 0,
		translate: 0,
		transition: 0.45,
	});

	const { translate, transition, activeIndex } = state;

	const nextSlide = () => {
		setState({
			...state,
			activeIndex: activeIndex + 1,
			translate: (activeIndex + 1) * getWidth(),
		});
	};

	const prevSlide = () => {
		setState({
			...state,
			activeIndex: activeIndex - 1,
			translate: (activeIndex - 1) * getWidth(),
		});
	};
	useEffect(() => {
		for (let i = 0; i < images.length; i++) {
			if (nailSelected.includes(images[i].projectImgs[0].url)) {
				setSlideNumber(i);
			}
		}
	}, [nailSelected]);

	return (
		<>
			<Thumbnail
				setNailSelect={setNailSelect}
				setNailSelected={setNailSelected}
			/>
			{nailSelect && <ClickPrompt />}
			{!nailSelect && (
				<div id="slider-div">
					<SliderContent
						translate={translate}
						transition={transition}
						width={
							getWidth() * images[slideNumber].projectImgs.length
						}
					>
						{images[slideNumber].projectImgs.map((item, i) => (
							<Slide key={`${item.url}`} content={item.url} />
						))}
					</SliderContent>
					{activeIndex !== 0 && (
						<Arrow direction="left" handleClick={prevSlide} />
					)}
					{activeIndex !==
						images[slideNumber].projectImgs.length - 1 && (
						<Arrow direction="right" handleClick={nextSlide} />
					)}
				</div>
			)}
		</>
	);
};

export default Slider;
