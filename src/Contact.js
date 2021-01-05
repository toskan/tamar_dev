import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import ConfettiSent from './ConfettiSent';
import Submit from './Submit';
import ErrorMessage from './ErrorMessage';

const Contact = () => {
	const [inputValues, setInputValues] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [inputShow, setInputShow] = useState(true);

	const errorRef = useRef();

	useEffect(() => {
		if (!inputShow) {
			setTimeout(() => {
				setInputShow(true);
				setInputValues({
					name: '',
					email: '',
					subject: '',
					message: '',
				});
			}, 5000);
		}
	}, [inputShow]);

	return (
		<>
			{inputShow && (
				<div className="content-contact opacity-content">
					<ErrorMessage errorRef={errorRef} />
					<Submit
						setInputShow={setInputShow}
						inputValues={inputValues}
						setInputValues={setInputValues}
						errorRef={errorRef}
					/>
				</div>
			)}
			{!inputShow && <ConfettiSent subject={inputValues.subject} />}
		</>
	);
};

export default Contact;
