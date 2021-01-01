import React from 'react';
import Confetti from 'react-confetti';

const ConfettiSent = ({ subject }) => {
	return (
		<div className="success-div">
			<h2 className="success-message">Thank you for your message!</h2>
			<p className="success-paragraph">
				I will get back to you about {subject} soon.
			</p>
			<Confetti colors={['#1d1d1d', '#ffffff', ' #727983', '#297a4d']} />
		</div>
	);
};

export default ConfettiSent;
