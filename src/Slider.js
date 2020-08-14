import React, { useState, useRef, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import SliderContent from './SliderContent';
import Slide from './Slide';
import images from './images';
import Arrow from './Arrow';
import './slider.css';

/**
 * @function Slider
 */
const Slider = (props) => {
	const getWidth = () => window.innerWidth;

	const [state, setState] = useState({
		activeIndex: 0,
		translate: 0,
		transition: 0.45,
	});

	const { translate, transition, activeIndex } = state;

	const nextSlide = () => {
		if (activeIndex === images.length - 1) {
			return setState({
				...state,
				translate: 0,
				activeIndex: 0,
			});
		}

		setState({
			...state,
			activeIndex: activeIndex + 1,
			translate: (activeIndex + 1) * getWidth(),
		});
	};

	const prevSlide = () => {
		if (activeIndex === 0) {
			return setState({
				...state,
				translate: (images.length - 1) * getWidth(),
				activeIndex: images.length - 1,
			});
		}

		setState({
			...state,
			activeIndex: activeIndex - 1,
			translate: (activeIndex - 1) * getWidth(),
		});
	};

	return (
		<div id="slider-div">
			<SliderContent
				translate={translate}
				transition={transition}
				width={getWidth() * images.length}
			>
				{images.map((item, i) => (
					<Slide
						key={`${item.id}`}
						content={item.projectImgs[0].url}
					/>
				))}
			</SliderContent>
			<Arrow direction="left" handleClick={prevSlide} />
			<Arrow direction="right" handleClick={nextSlide} />
		</div>
	);
};

export default Slider;
