import React, { useState } from 'react';
import images from './images';
import ModalComponent from './ModalComponent';
import UseModal from './UseModal';
import './work.css';
import ImageGrid from './ImageGrid';
import ModalContent from './ModalContent';

const Work = () => {
	const [Modal, isModalOpen, setIsModalOpen] = UseModal();
	const [activeSlideShow, setActiveSlideShow] = useState(null);
	const toggleModalOpen = () => setIsModalOpen((prev) => !prev);
	const getSlideObject = (uuid) => {
		const activeSlide = images.find(({ id }) => id === uuid);
		setActiveSlideShow(activeSlide);
	};
	return (
		<div className="work-div">
			<ImageGrid
				images={images}
				setIsModalOpen={setIsModalOpen}
				getSlideObject={getSlideObject}
				isModalOpen={isModalOpen}
			/>
			<ModalComponent
				setIsModalOpen={setIsModalOpen}
				isModalOpen={isModalOpen}
				Modal={Modal}
				toggleModalOpen={toggleModalOpen}
			>
				<ModalContent
					activeSlideShow={activeSlideShow}
					toggleModalOpen={toggleModalOpen}
					images={images}
				/>
			</ModalComponent>
		</div>
	);
};

export default Work;
