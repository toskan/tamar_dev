import React, { useState } from 'react';
import SliderContent from './SliderContent';
import Slide from './Slide';
import ArrowComponent from './ArrowComponent';

const PortfolioSlides = ({ images, slideNumber, nailSelect }) => {
	const getWidth = () => window.innerWidth;

	const [activeIndex, setActiveIndex] = useState(1);

	const [translate, setTranslate] = useState(0);

	const transition = 0.45;

	const nextSlide = () => {
		setActiveIndex(activeIndex + 1);
		setTranslate((activeIndex + 1) * getWidth());
	};

	const prevSlide = () => {
		setActiveIndex(activeIndex - 1);
		setTranslate((activeIndex - 1) * getWidth());
	};
	console.log(activeIndex);
	return (
		<div>
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
					<ArrowComponent
						images={images}
						slideNumber={slideNumber}
						nextSlide={nextSlide}
						prevSlide={prevSlide}
						activeIndex={activeIndex}
					/>
				</div>
			)}
		</div>
	);
};

export default PortfolioSlides;
