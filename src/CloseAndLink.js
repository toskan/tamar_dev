import React, { useState, useEffect } from 'react';
import { RiCloseLine } from 'react-icons/ri';

const CloseAndLink = ({ setNailSelect, setActiveIndex, setTranslate }) => {
	const closeSlides = () => {
		setNailSelect(true);
		setActiveIndex(0);
		setTranslate(0);
	};

	return (
		<>
			<RiCloseLine className="close-button" onClick={closeSlides} />
		</>
	);
};

export default CloseAndLink;
