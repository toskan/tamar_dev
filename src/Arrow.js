/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import leftArrow from './img/left-arrow.svg';
import rightArrow from './img/right-arrow.svg';
import mobile from './mobile';

const Arrow = ({ direction, handleClick }) => {
	const [size, setSize] = React.useState(0);
	const [margin, setMargin] = React.useState(0);
	React.useEffect(() => {
		if (mobile.eitherOr) {
			setSize('35px');
			setMargin('15px');
		}
		if (!mobile.eitherOr) {
			setSize('50px');
			setMargin('25px');
		}
	}, []);
	return (
		<div
			onClick={handleClick}
			css={css`
				display: flex;
				position: fixed;
				top: 50%;
				${direction === 'right'
					? `right: ${margin}`
					: `left: ${margin}`};
				height: ${size};
				width: ${size};
				justify-content: center;
				background: white;
				border-radius: 50%;
				cursor: pointer;
				align-items: center;
				transition: transform ease-in 0.1s;
				&:hover {
					transform: scale(1.1);
				}
				img {
					transform: translateX(
						${direction === 'left' ? '-2' : '2'}px
					);
					&:focus {
						outline: 0;
					}
				}
			`}
		>
			{direction === 'right' ? (
				<img src={rightArrow} alt="right arrow" />
			) : (
				<img src={leftArrow} alt="left arrow" />
			)}
		</div>
	);
};

export default Arrow;
