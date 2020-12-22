import React, { useState, useEffect } from 'react';
import MenuType from './MenuType';
import './Sidebar.css';
import HelloCircle from './HelloCircle';

const Menu = () => {
	const [menuState, setMenuState] = useState(false);
	useEffect(() => {
		const content = document.getElementsByClassName('content');
		const portfolioDiv = document.getElementsByClassName('portfolio');
		const titleDiv = document.getElementsByClassName('title-div');
		const title = document.getElementsByClassName('title');
		const circle = document.getElementsByClassName('circle');
		if (menuState) {
			titleDiv[0].classList.toggle('title-div-burger', true);
			circle[0].classList.toggle('circle-burger', true);
			for (let i = 0; i < title.length; i++) {
				title[i].classList.toggle('title-burger', true);
			}
		} else {
			titleDiv[0].classList.toggle('title-div-burger', false);
			circle[0].classList.toggle('circle-burger', false);
			for (let i = 0; i < title.length; i++) {
				title[i].classList.toggle('title-burger', false);
			}
			titleDiv[0].classList.toggle('title-div-menu-full-burger', true);
			circle[0].classList.toggle('circle-menu-full-burger', true);
			for (let i = 0; i < title.length; i++) {
				title[i].classList.toggle('title-menu-full-burger', true);
			}
		}

		if (content.length > 0) {
			if (menuState) {
				content[0].style.opacity = '0.3';
			} else {
				content[0].style.opacity = '1';
			}
		}
		if (portfolioDiv.length > 0) {
			if (menuState) {
				portfolioDiv[0].style.opacity = '0.3';
			} else {
				portfolioDiv[0].style.opacity = '1';
			}
		}
	}, [menuState]);
	return (
		<div id="menu-header-div">
			<MenuType menuState={menuState} setMenuState={setMenuState} />
			<div className="main-header-div">
				<HelloCircle />
				<div className="main-header-div-top">
					<div className="title-div">
						<h1 className="title">tamar</h1>
						<div className="circle"></div>
						<h1 className="title">dev</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
