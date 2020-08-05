import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import PropTypes from 'prop-types';

const ImageHover = (props) => {
	const { setIsModalOpen, work, getSlideObject, isModalOpen, id } = props;
	const [magnifyShow, setMagnifyShow] = useState(false);
	//when modal open background goes opaque with a transition
	if (isModalOpen) {
		document.getElementById('root').classList.toggle('opaque');
		document.getElementById('root').style.opacity = 0.1;
	}
	if (!isModalOpen) {
		document.getElementById('root').style.opacity = 1;
	}
	//getSlideObject(id) (see work.js) will get the object with all the necessary items for the current slide-show based on UUID value (line 14 work.js)
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
