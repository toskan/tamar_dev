import React, { useState } from 'react';
import './Contact.css';
// import axios from 'axios';

const Contact = () => {
	const [inputValues, setInputValues] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const onInputChange = (e) => {
		setInputValues({ ...inputValues, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValues.name === '' || inputValues.message === '') {
			alert('Please Fill All Required Field');
			return false;
		}

		let xmlhttp = new XMLHttpRequest();
		xmlhttp.open(
			'POST',
			'https://cq2cepim09.execute-api.us-east-1.amazonaws.com'
		);
		xmlhttp.setRequestHeader('Content-Type', 'application/json');
		xmlhttp.send(JSON.stringify(inputValues));
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState === 4) {
				// let response = JSON.parse(xmlhttp.responseText);
				if (xmlhttp.status === 200) {
					console.log('successful');
					setInputValues('');
				} else {
					console.log('failed');
				}
			}
		};

		// axios({
		// 	method: 'POST',
		// 	url:
		// 		'https://wtujjafwfl.execute-api.us-east-1.amazonaws.com/default/sendEmailFunction',
		// 	data: inputValues,
		// }).then((response) => {
		// 	if (response.data.status === 'success') {
		// 		alert('Message Sent.');
		// 		setInputValues('');
		// 	} else if (response.data.status === 'fail') {
		// 		alert('Message failed to send.');
		// 	}
		// });
	};

	return (
		<div className="content-contact">
			<div className="contact-me">
				<h3>get in touch</h3>
			</div>
			<div className="form-div">
				<form
					className="form-contact"
					action="action_page.php"
					onSubmit={handleSubmit}
					method="POST"
				>
					<label htmlFor="name" className="visually-hidden">
						Name:
					</label>
					<input
						type="text"
						id="name name-input"
						name="name"
						placeholder="name"
						value={inputValues.name}
						onChange={onInputChange}
					/>
					<label
						htmlFor="exampleInputEmail1"
						className="visually-hidden"
					>
						Email:
					</label>
					<input
						type="email"
						id="email email-input"
						name="email"
						placeholder="email"
						aria-describedby="emailHelp"
						value={inputValues.email}
						onChange={onInputChange}
					/>
					<label htmlFor="subject" className="visually-hidden">
						Subject:
					</label>
					<input
						type="text"
						id="subject subject-input"
						name="subject"
						placeholder="subject"
						value={inputValues.subject}
						onChange={onInputChange}
					/>
					<label htmlFor="message" className="visually-hidden">
						Write your Message:
					</label>
					<textarea
						id="message description-input"
						name="message"
						placeholder="message"
						rows="5"
						value={inputValues.message}
						onChange={onInputChange}
					></textarea>
					<label htmlFor="submit" className="visually-hidden">
						Send your Message:
					</label>
					<input type="submit" value="send" id="submit" />
				</form>
			</div>
		</div>
	);
};

export default Contact;

// (e) => setInputValues({ name: e.target.value });
