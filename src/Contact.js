import React, { useState, useEffect } from 'react';
import './Contact.css';
import Confetti from 'react-confetti';
import axios from 'axios';

const Contact = () => {
	const [inputValues, setInputValues] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [inputShow, setInputShow] = useState(true);

	const onInputChange = (e) => {
		setInputValues({ ...inputValues, [e.target.name]: e.target.value });
	};

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
			}, 10000);
		}
	}, [inputShow]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			inputValues.name === '' ||
			inputValues.message === '' ||
			inputValues.subject === ''
		) {
			alert('Fill in all required fields');
			return;
		}

		var realName = /[A-Za-z]{1}[A-Za-z]/;
		if (!realName.test(inputValues.name)) {
			alert('Fill in a valid name');
			return;
		}

		axios({
			method: 'post',
			url:
				'https://j6ehcj6s7j.execute-api.us-east-1.amazonaws.com/test/contact',
			data: JSON.stringify(inputValues),
			crossDomain: true,
		})
			.then((res) => {
				console.log(res.status);
				setInputShow(false);
			})
			.catch((err) => {
				console.log(err.message ? err.message : 'Unknown error');
			});
	};

	return (
		<>
			{inputShow && (
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
							<label
								htmlFor="subject"
								className="visually-hidden"
							>
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
							<label
								htmlFor="message"
								className="visually-hidden"
							>
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
			)}
			{!inputShow && (
				<div className="success-div">
					<h2 className="success-message">
						Thank you for your message!
					</h2>
					<p className="success-paragraph">
						I will get back to you about {inputValues.subject} soon.
					</p>
					<Confetti
						colors={['#1d1d1d', '#ffffff', ' #727983', '#297a4d']}
					/>
				</div>
			)}
		</>
	);
};

export default Contact;
