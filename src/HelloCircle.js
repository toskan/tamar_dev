import React, { useState, useEffect } from 'react';

const HelloCircle = () => {
	// const parev = '\u0562\u0561\u0580\u0565\u0582';
	// const parev = `\u0532\u0531\u0550\u0535\u0552`;
	const parev = '\u0532\u0561\u0580\u0565\u0582';
	const txt = ` ${parev} ${parev} ${parev} ${parev} `.split('');
	const txtMinusOne = txt.slice(0, txt.length - 1);
	const deg = 360 / txt.length;
	const [startOrigin, setStartOrigin] = useState(0);

	useEffect(() => {
		const letterTimer = setTimeout(() => {
			setStartOrigin(startOrigin + deg);
		}, 7900);

		for (let i = 0; i < txt.length; i++) {
			document.getElementById(`hello-p-${i}`).animate(
				[
					{ transform: `rotate(${startOrigin + deg * i}deg)` },
					{
						transform: `rotate(${startOrigin + deg * i + deg}deg)`,
					},
				],
				{
					duration: 8000,
					iterations: Infinity,
				}
			);
		}

		return () => {
			clearTimeout(letterTimer);
		};
	}, [deg, startOrigin, txt.length]);

	return (
		<div className="hello-container">
			<div className="hello-circ-text" id="test">
				{txtMinusOne.map((item, i) => (
					<p
						id={`hello-p-${i}`}
						className="hello-p"
						key={`${i}_${item}`}
					>
						{item}
					</p>
				))}
				<p id={`hello-p-${txt.length - 1}`} className="hello-p">
					{txt[txt.length - 1]}
				</p>
			</div>
		</div>
	);
};

export default HelloCircle;
