import React from 'react';
import Burger from './Burger';

const MenuType = ({ menuState, setMenuState }) => {
	return <Burger setMenuState={setMenuState} menuState={menuState} />;
};
export default MenuType;
