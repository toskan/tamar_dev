/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

const Slide = ({ content, orientation, mobile }) => {
	const [height, setHeight] = React.useState(0);

	React.useEffect(() => {
		if (mobile.portrait && orientation === 'portrait') {
			setHeight('100%');
		}
		if (mobile.portrait && orientation === 'landscape') {
			setHeight('30%');
		}
		if (mobile.landscape && orientation === 'portrait') {
			setHeight('90%');
		}
		if (mobile.landscape && orientation === 'landscape') {
			setHeight('90%');
		}
		if (!mobile.eitherOr && orientation === 'portrait') {
			setHeight('100%');
		}
		if (!mobile.eitherOr && orientation === 'landscape') {
			setHeight('40%');
		}
	}, [orientation, mobile]);

	return (
		<div
			css={css`
				height: ${height};
				width: 100%;
				display: flex;
				justify-content: center;
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
