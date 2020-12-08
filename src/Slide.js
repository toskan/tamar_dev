/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

const Slide = ({ content, orientation, mobile }) => {
	const [height, setHeight] = React.useState(0);
	React.useEffect(() => {
		if (mobile.portrait && orientation === 'portrait') {
			setHeight('45%');
		}
		if (mobile.portrait && orientation === 'landscape') {
			setHeight('25%');
		}
		if (mobile.landscape && orientation === 'portrait') {
			setHeight('45%');
		}
		if (mobile.landscape && orientation === 'landscape') {
			setHeight('50%');
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
			<video
				css={css`
					height: 100%;
					width: auto;
				`}
				playsInline
				autoPlay
				loop
			>
				<source src={content} type="video/mp4" />
			</video>
		</div>
	);
};

export default Slide;
