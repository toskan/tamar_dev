import React from 'react';
import Burger from './Burger';
import SideNav from './SideNav';

const MenuType = ({ menuState, setMenuState }) => {
	if (
		(window.matchMedia('(max-width: 414px)').matches &&
			window.matchMedia('(orientation: portrait)').matches) ||
		(window.matchMedia('(max-width: 823px)').matches &&
			window.matchMedia('(orientation: landscape)').matches &&
			!menuState)
	) {
		return <Burger setMenuState={setMenuState} menuState={menuState} />;
	} else {
		return <SideNav />;
	}
};
export default MenuType;
