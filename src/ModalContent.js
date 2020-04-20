import React, { useEffect, useState, useRef } from 'react';

let counter = 0;
let link;
let repo;

const ModalContent = (props) => {
	const [slidesState, setSlide] = useState(null);
	const { activeSlideShow } = props;
	const imageRef = useRef(null);
	console.log(imageRef.current);
	const forwardSlide = () => {
		counter++;
		setSlide(activeSlideShow.projectImgs[counter].url);
	};
	const backSlide = () => {
		counter--;
		setSlide(activeSlideShow.projectImgs[counter].url);
	};
	useEffect(() => {
		counter = 0;
		link = activeSlideShow.linkUrl;
		repo = activeSlideShow.repoUrl;
		setSlide(activeSlideShow.projectImgs[counter].url);
	}, [activeSlideShow]);
	useEffect(() => {
		imageRef.current.classList.remove('portrait', 'landscape');
		if (counter === 0) {
			document.getElementById('display-left').style.visibility = 'hidden';
		} else {
			document.getElementById('display-left').style.visibility =
				'visible';
		}
		if (counter === activeSlideShow.projectImgs.length - 1) {
			document.getElementById('display-right').style.visibility =
				'hidden';
		} else {
			document.getElementById('display-right').style.visibility =
				'visible';
		}
		if (
			imageRef.current &&
			activeSlideShow.projectImgs[counter].orientation === 'landscape'
		) {
			imageRef.current.classList.add('landscape');
		}
		if (
			imageRef.current &&
			activeSlideShow.projectImgs[counter].orientation === 'portrait'
		) {
			imageRef.current.classList.add('portrait');
		}
	}, [
		activeSlideShow.projectImgs,
		activeSlideShow.projectImgs.length,
		slidesState,
	]);
	return (
		<div className="modal-container">
			<div className="slides-content">
				<div className="slides-div">
					<img
						ref={imageRef}
						src={slidesState}
						alt=""
						id="modal-images"
					/>
					<ul className="modal-image-ul">
						<li>
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
							>
								link
							</a>
						</li>
						<li>
							<a
								href={repo}
								target="_blank"
								rel="noopener noreferrer"
							>
								repo
							</a>
						</li>
					</ul>
				</div>
				<button id="display-left" onClick={backSlide}>
					&#10094;
				</button>
				<button id="display-right" onClick={forwardSlide}>
					&#10095;
				</button>
			</div>
		</div>
	);
};

export default ModalContent;
