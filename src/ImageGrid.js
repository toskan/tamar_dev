import React from 'react';
import ImageHover from './ImageHover';
import PropTypes from 'prop-types';

const ImageGrid = (props) => {
	const { images, setIsModalOpen, getSlideObject, isModalOpen } = props;
	let imagesGrid = images.map((item, i) => (
		<div className="grid-image-div" key={`${item}${i}`}>
			<ImageHover
				getSlideObject={getSlideObject}
				work={item.projectImgs[0].url}
				id={`${item.id}`}
				setIsModalOpen={setIsModalOpen}
				isModalOpen={isModalOpen}
			/>
		</div>
	));
	return [imagesGrid];
};

ImageGrid.propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired,
	images: PropTypes.array.isRequired,
};

export default ImageGrid;
