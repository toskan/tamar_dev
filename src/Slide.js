/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const Slide = ({ content }) => (
	<div
		css={css`
			height: 100vh;
			width: 100%;
			display: flex;
			justify-content: center;
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

export default Slide;
