/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Nail = ({ content }) => (
	<div
		css={css`
			display: flex;
			width: 10%;
		`}
	>
		<img
			css={css`
				height: auto;
				width: 80%;
			`}
			src={content}
			alt="portfolio slide"
		/>
	</div>
);

export default Nail;
