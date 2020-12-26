import React, { useState, useEffect } from 'react';

const HelloCircle = () => {
	const parev = '\u0562\u0561\u0580\u0565\u0582';
	const txt = ` ${parev} ${parev} ${parev} ${parev} `.split('');
	const deg = 360 / txt.length;
	const [startOrigin, setStartOrigin] = useState(0);
	const [degArr, setDegArr] = useState([]);
	const [elementsPop, setElementsPop] = useState(false);

	useEffect(() => {
		const letterTimer = setTimeout(() => {
			setStartOrigin(startOrigin + deg);
		}, 3950);

		if (elementsPop) {
			for (let i = 0; i < degArr.length; i++) {
				document.getElementById(`hello-p-${i}`).animate(
					[
						{ transform: `rotate(${startOrigin + deg * i}deg)` },
						{
							transform: `rotate(${
								startOrigin + deg * i + deg
							}deg)`,
						},
					],
					{
						duration: 4000,
						iterations: 1,
					}
				);
			}
		}

		return () => {
			clearTimeout(letterTimer);
		};
	}, [deg, degArr.length, elementsPop, startOrigin]);

	useEffect(() => {
		const circularText = (txt, radius, classIndex) => {
			classIndex = document.getElementsByClassName('hello-circ-text')[
				classIndex
			];
			let value = startOrigin;
			let origin = value;
			txt.forEach((ea, index) => {
				ea = `<p id='hello-p-${index}' style='height:${radius}px;position:absolute;transform-origin:0 100%'>${ea}</p>`;
				classIndex.innerHTML += ea;
				setDegArr((degArray) => [...degArray, origin]);
				origin += deg;
			});
			setElementsPop(true);
		};

		if (!elementsPop) {
			circularText(txt, 200, 0);
		}
	}, [elementsPop, startOrigin, deg, txt]);

	return (
		<div className="hello-container">
			<div className="hello-circ-text" id="test"></div>
		</div>
	);
};

export default HelloCircle;

//transform:rotate(${origin}deg);
