import React, { useState, useEffect } from 'react';
import MenuType from './MenuType';
import './Sidebar.css';
import HelloCircle from './HelloCircle';
import mobile from './mobile';
import LogoHeaderReg from './LogoHeaderReg';
import LogoHMenuOpen from './LogoHMenuOpen';

const Menu = () => {
	const [menuState, setMenuState] = useState(false);
	const [logoType, setLogoType] = useState(null);
	const [mobilePortrait, setMobilePortrait] = useState(mobile.portrait);

	useEffect(() => {
		const contentOpacity = document.getElementsByClassName(
			'opacity-content'
		);

		if (menuState) {
			contentOpacity[0].style.opacity = '0.3';
		} else {
			contentOpacity[0].style.opacity = '1';
		}
	}, [menuState]);

	useEffect(() => {
		window.addEventListener('orientationchange', function (e) {
			if (
				e.currentTarget.screen.orientation.type ===
					'portrait-primary' &&
				e.currentTarget.screen.availWidth < 414
			)
				setMobilePortrait(true);
			else {
				setMobilePortrait(false);
			}
		});

		if (menuState && mobilePortrait) {
			setLogoType(<LogoHMenuOpen />);
		} else {
			setLogoType(<LogoHeaderReg />);
		}
	}, [menuState, mobilePortrait, setMobilePortrait]);

	return (
		<div id="menu-header-div">
			<MenuType menuState={menuState} setMenuState={setMenuState} />
			<div className="main-header-div">
				<HelloCircle />
				{logoType}
			</div>
		</div>
	);
};

export default Menu;
