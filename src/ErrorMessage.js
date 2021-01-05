import React from 'react';

const ErrorMessage = ({ errorRef }) => {
	return (
		<div className="contact-me">
			<h3>
				get in t<span className="touch-span">&#x25EF;</span>
				uch
			</h3>
			<p id="error-message" ref={errorRef}>
				Fill in all fields, please.
			</p>
		</div>
	);
};

export default ErrorMessage;
