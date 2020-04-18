import React, { useEffect } from 'react';

const ModalContent = (props) => {
	const {
		slidesState,
		setArrIdx,
		arrIdx,
		workIndex,
		setSlide,
		images,
		linkState,
		repoState,
	} = props;
	const forwardSlide = () => {
		let idxPlus = arrIdx + 1;
		setArrIdx(idxPlus);
		setSlide(images[workIndex][idxPlus]);
		if (idxPlus === images[workIndex].length - 2) {
			setTimeout(function () {
				document.getElementById('display-right').style.visibility =
					'hidden';
			}, 1);
		}
	};
	const backSlide = () => {
		let idxMinus = arrIdx - 1;
		setArrIdx(idxMinus);
		setSlide(images[workIndex][idxMinus]);
		if (idxMinus === 0) {
			setTimeout(function () {
				document.getElementById('display-left').style.visibility =
					'hidden';
			}, 1);
		}
	};
	useEffect(() => {
		const img = document.getElementById('modal-images');
		img.style.opacity = '0';
		console.log('useEffect function hit');
		setTimeout(function () {
			let height = img.clientHeight;
			let width = img.clientWidth;
			if (width > height) {
				console.log(
					'landscape hit ' + width + ' width ' + height + ' length'
				);
				img.classList.remove('portrait');
				img.style.opacity = '1';
				img.classList.add('landscape');
			}
			if (width < height) {
				console.log(
					'portrait hit ' + width + ' width ' + height + ' length'
				);
				img.classList.remove('landscape');
				img.style.opacity = '1';
				img.classList.add('portrait');
			}
		}, 500);
	}, [slidesState]);
	return (
		<div className="modal-container">
			<div className="slides-content">
				<div className="slides-div">
					<img src={slidesState} alt="" id="modal-images" />
					<ul className="modal-image-ul">
						<li>
							<a href={linkState}>link</a>
						</li>
						<li>
							<a href={repoState}>repo</a>
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
