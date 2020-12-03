import React from 'react';
import { BsArrow90DegDown } from 'react-icons/bs';

const ClickPrompt = () => {
	return (
		<div className="click-prompt-div">
			<h3 className="click-prompt-h3">
				<BsArrow90DegDown />
				&nbsp;&nbsp;click thumbnail for more
			</h3>
		</div>
	);
};

export default ClickPrompt;
