import React from 'react';
import OpenMenu from './OpenMenu';
import BurgerMenu from './BurgerMenu';

const MenuChange = (props) => {
	const { MenuState } = props;
	if (
		(window.matchMedia('(max-width: 414px)').matches &&
			window.matchMedia('(orientation: portrait)').matches) ||
		(window.matchMedia('(max-width: 823px)').matches &&
			window.matchMedia('(orientation: landscape)').matches &&
			!MenuState)
	) {
		return <BurgerMenu />;
	} else {
		return <OpenMenu />;
	}
};

export default MenuChange;
