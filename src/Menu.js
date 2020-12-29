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

	useEffect(() => {
		const contentOpacity = document.getElementsByClassName(
			'opacity-content'
		);

		if (menuState && mobile.portrait) {
			setLogoType(<LogoHMenuOpen />);
		} else {
			setLogoType(<LogoHeaderReg />);
		}

		if (menuState) {
			contentOpacity[0].style.opacity = '0.3';
		} else {
			contentOpacity[0].style.opacity = '1';
		}
	}, [menuState]);
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
