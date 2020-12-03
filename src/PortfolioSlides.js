import React, { useState } from 'react';
import PortfolioContent from './PortfolioContent';
import Slide from './Slide';
import ArrowComponent from './ArrowComponent';

const PortfolioSlides = ({
	images,
	slideNumber,
	nailSelect,
	setNailSelect,
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
								key={`${item.url}`}
								content={item.url}
								height={`${item.orientation}`}
								gitHubUrl={images[slideNumber].repoUrl}
								setNailSelect={setNailSelect}
								setActiveIndex={setActiveIndex}
								setTranslate={setTranslate}
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
				</div>
			)}
		</div>
	);
};

export default PortfolioSlides;
