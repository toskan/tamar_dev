import React from 'react';
import Arrow from './Arrow';

const ArrowComponent = ({
	images,
	prevSlide,
	activeIndex,
	slideNumber,
	nextSlide,
}) => {
	return (
		<>
			{activeIndex !== 0 && (
				<Arrow direction="left" handleClick={prevSlide} />
			)}
			{activeIndex !== images[slideNumber].projectImgs.length - 1 && (
				<Arrow direction="right" handleClick={nextSlide} />
			)}
		</>
	);
};

export default ArrowComponent;
