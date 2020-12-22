import React, { useEffect } from 'react';

const HelloCircle = () => {
	useEffect(() => {
		function circularText(txt, radius, classIndex) {
			txt = txt.split('');
			classIndex = document.getElementsByClassName('hello-circ-text')[
				classIndex
			];

			let deg = 360 / txt.length;
			setTimeout(() => {
				let origin = 0;
				txt.forEach((ea) => {
					ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
					classIndex.innerHTML += ea;
					origin += deg;
				});
			}, 500);
		}

		circularText(' hello hello hello hello hello', 200, 0);
	});

	return (
		<div className="hello-container">
			<div className="hello-circ-text" id="test"></div>
		</div>
	);
};

export default HelloCircle;

// useEffect(() => {
// 	const timerId = setTimeout(() => {
// 		setDebouncedText(text);
// 	}, 500);

// 	return () => {
// 		clearTimeout(timerId);
// 	};
// }, [text]);
