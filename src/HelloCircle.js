import React, { useState, useEffect } from 'react';

const HelloCircle = () => {
	const parev = '\u0532\u0561\u0580\u0565\u0582';
	const txt = ` ${parev} ${parev} ${parev} ${parev} `.split('');
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
			<div className="hello-circ-text">
				{txt.map((item, i) => (
					<p
						id={`hello-p-${i}`}
						className="hello-p"
						key={`${i}_${item}`}
					>
						{item}
					</p>
				))}
			</div>
		</div>
	);
};

export default HelloCircle;
