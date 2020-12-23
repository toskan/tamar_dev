import React, { useState, useEffect } from 'react';

const HelloCircle = () => {
	const parev = '\u0562\u0561\u0580\u0565\u0582';
	const txt = ` ${parev} ${parev} ${parev} ${parev} `.split('');
	const deg = 360 / txt.length;
	const [startOrigin, setStartOrigin] = useState(0);

	useEffect(() => {
		const letterTimer = setTimeout(() => {
			document
				.querySelectorAll('.hello-circ-text')
				.forEach((e) => (e.innerHTML = ''));
			setStartOrigin(startOrigin + deg);
		}, 2500);

		const circularText = (txt, radius, classIndex) => {
			classIndex = document.getElementsByClassName('hello-circ-text')[
				classIndex
			];
			let value = startOrigin;
			let origin = value;
			txt.forEach((ea) => {
				ea = `<p className='hello-p' style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
				classIndex.innerHTML += ea;
				origin += deg;
			});
		};
		circularText(txt, 200, 0);

		return () => {
			clearTimeout(letterTimer);
		};
	}, [deg, startOrigin, txt]);

	return (
		<div className="hello-container">
			<div className="hello-circ-text" id="test"></div>
		</div>
	);
};

export default HelloCircle;
