/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import CloseAndLink from './CloseAndLink';

const Slide = ({
	content,
	height,
	setNailSelect,
	setActiveIndex,
	setTranslate,
	gitHubUrl,
}) => (
	<div
		css={css`
			height: ${height === 'portrait' ? `80%` : `55%`};
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
		<div className="project-link-div">
			<a href={gitHubUrl}>
				<img
					className="project-link-img"
					alt="Project Link"
					src="https://img-tamar-dev.s3.us-east-2.amazonaws.com/GitHub-Mark-64px.png"
				/>
			</a>
		</div>
		<CloseAndLink
			setNailSelect={setNailSelect}
			setActiveIndex={setActiveIndex}
			setTranslate={setTranslate}
		/>
	</div>
);

export default Slide;
