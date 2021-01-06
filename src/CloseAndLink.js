import React, { useEffect } from 'react';
import { RiCloseLine } from 'react-icons/ri';

const CloseAndLink = ({
	setNailSelect,
	setActiveIndex,
	setTranslate,
	images,
	slideNumber,
	nailSelect,
}) => {
	const closeSlides = () => {
		setNailSelect(true);
		setActiveIndex(0);
		setTranslate(0);
	};
	useEffect(() => {
		const orientChange = () => {
			window.addEventListener('orientationchange', function () {
				setNailSelect(true);
				setActiveIndex(0);
				setTranslate(0);
			});
		};

		if (!nailSelect) {
			orientChange();
		}
		return () =>
			window.removeEventListener('orientationchange', orientChange);
	}, [nailSelect, setActiveIndex, setNailSelect, setTranslate]);
	return (
		<>
			<div className="project-link-div">
				<a
					href={images[slideNumber].repoUrl}
					rel="noopener noreferrer"
					target="_blank"
				>
					<img
						className="project-link-img"
						alt="Project Link"
						src="https://img-tamar-dev.s3.us-east-2.amazonaws.com/GitHub-Mark-64px.png"
					/>
				</a>
			</div>
			<RiCloseLine
				className="close-button"
				id="close-slide"
				onClick={closeSlides}
			/>
		</>
	);
};

export default CloseAndLink;
