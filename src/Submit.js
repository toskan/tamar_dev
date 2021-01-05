import React, { useRef } from 'react';
import axios from 'axios';
import * as yup from 'yup';

const Submit = ({ setInputShow, setInputValues, inputValues, errorRef }) => {
	const nameRef = useRef();
	const messageRef = useRef();

	const onInputChange = (e) => {
		setInputValues({ ...inputValues, [e.target.name]: e.target.value });
		let activeInputStyle = {
			backgroundColor: 'white',
			border: '1.5px solid #1d1d1d',
			color: '#1d1d1d',
		};
		e.target.style = activeInputStyle;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let schema = yup.object().shape({
			name: yup.string().min(2).required('name is required'),
			email: yup.string().email('email is not valid'),
			message: yup
				.string()
				.min(10)
				.required('your message must be 10 characters or longer'),
		});

		schema
			.validate({
				name: inputValues.name,
				email: inputValues.email,
				message: inputValues.message,
			})
			.then((res) => {
				errorRef.current.style.visibility = 'hidden';
				submitOk();
			})
			.catch(function (err) {
				if (err.message.length === 38 && inputValues.name.length > 1) {
					messageRef.current.style.border = '1.5px solid red';
					errorRef.current.innerText =
						'message must be at least 10 characters';
				}
				if (inputValues.name.length < 2 && err.message.length !== 38) {
					nameRef.current.style.border = '1.5px solid red';
					errorRef.current.innerText = 'add your name';
				}
				if (err.message.length === 38 && inputValues.name.length < 2) {
					errorRef.current.innerText =
						'add your name and message must be at least 10 characters';
					nameRef.current.style.border = '1.5px solid red';
					messageRef.current.style.border = '1.5px solid red';
				}
				errorRef.current.style.visibility = `visible`;
				errorRef.current.style.width = `${nameRef.current.offsetWidth}px`;
			});

		const submitOk = () => {
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
	};
	return (
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
					className="text-fields"
					name="name"
					placeholder="name"
					ref={nameRef}
					value={inputValues.name}
					onChange={onInputChange}
				/>
				<label htmlFor="exampleInputEmail1" className="visually-hidden">
					Email:
				</label>
				<input
					type="email"
					id="email email-input"
					className="text-fields"
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
					className="text-fields"
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
					className="text-fields"
					name="message"
					placeholder="message"
					rows="5"
					ref={messageRef}
					value={inputValues.message}
					onChange={onInputChange}
				></textarea>
				<label htmlFor="submit" className="visually-hidden">
					Send your Message:
				</label>
				<input type="submit" value="send" id="submit" />
			</form>
		</div>
	);
};

export default Submit;
