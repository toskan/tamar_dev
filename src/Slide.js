/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';

const Slide = ({ content, orientation, mobile }) => {
	const [height, setHeight] = useState(0);

	// const mobilePortrait =
	// 	window.matchMedia('(max-width: 414px)').matches &&
	// 	window.matchMedia('(orientation: portrait)').matches;

	// const mobileLandscape =
	// 	window.matchMedia('(max-width: 823px)').matches &&
	// 	window.matchMedia('(orientation: landscape)').matches;
	useEffect(() => {
		if (mobile.portrait && orientation === 'portrait') {
			setHeight('45%');
		}
		if (mobile.portrait && orientation === 'landscape') {
			setHeight('25%');
		}
		if (!mobile.eitherOr && orientation === 'portrait') {
			setHeight('80%');
		}
		if (!mobile.eitherOr && orientation === 'landscape') {
			setHeight('55%');
		}
	}, [orientation, mobile]);

	return (
		<div
			css={css`
				height: ${height};
				width: 100%;
				display: flex;
				justify-content: center;
				margin-top: 2em;
			`}
		>
			<img
				css={css`
					height: 100%;
					width: auto;
				`}
				src={content}
				alt="portfolio slide"
			/>
		</div>
	);
};

export default Slide;
