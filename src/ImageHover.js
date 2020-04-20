import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import PropTypes from 'prop-types';

const ImageHover = (props) => {
	const { setIsModalOpen, work, getSlideObject, isModalOpen, id } = props;
	const [magnifyShow, setMagnifyShow] = useState(false);
	if (isModalOpen) {
		document.getElementById('root').classList.toggle('opaque');
		document.getElementById('root').style.opacity = 0.1;
	}
	if (!isModalOpen) {
		document.getElementById('root').style.opacity = 1;
	}
	return (
		<>
			<img
				src={work}
				data={id}
				alt="project-screenshot"
				className="grid-img"
				onMouseOver={() => setMagnifyShow(true)}
				onMouseLeave={() => setMagnifyShow(false)}
				onClick={() => {
					getSlideObject(id);
					setIsModalOpen((prev) => !prev);
				}}
			/>
			{magnifyShow && <IoMdSearch />}
		</>
	);
};

ImageHover.propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired,
	work: PropTypes.string.isRequired,
};

export default ImageHover;
