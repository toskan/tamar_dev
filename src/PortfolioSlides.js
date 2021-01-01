import React, { useState } from 'react';
import PortfolioContent from './PortfolioContent';
import Slide from './Slide';
import ArrowComponent from './ArrowComponent';
import CloseAndLink from './CloseAndLink';

const PortfolioSlides = ({
	images,
	slideNumber,
	nailSelect,
	setNailSelect,
	mobile,
}) => {
	const getWidth = () => window.innerWidth;

	const [activeIndex, setActiveIndex] = useState(0);

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

	return (
		<div>
			{!nailSelect && (
				<div id="portfolio-div">
					<PortfolioContent
						translate={translate}
						transition={transition}
						width={
							getWidth() * images[slideNumber].projectImgs.length
						}
					>
						{images[slideNumber].projectImgs.map((item, i) => (
							<Slide
								key={`${item.video}`}
								content={item.video}
								orientation={`${item.orientation}`}
								setNailSelect={setNailSelect}
								setActiveIndex={setActiveIndex}
								setTranslate={setTranslate}
								mobile={mobile}
							/>
						))}
					</PortfolioContent>
					<ArrowComponent
						images={images}
						slideNumber={slideNumber}
						nextSlide={nextSlide}
						prevSlide={prevSlide}
						activeIndex={activeIndex}
					/>
					<CloseAndLink
						setNailSelect={setNailSelect}
						setActiveIndex={setActiveIndex}
						setTranslate={setTranslate}
						images={images}
						slideNumber={slideNumber}
						nailSelect={nailSelect}
					/>
				</div>
			)}
		</div>
	);
};

export default PortfolioSlides;
