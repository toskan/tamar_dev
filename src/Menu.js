import React, { useState } from 'react';
import MenuChange from './MenuChange';

const Menu = () => {
	const [MenuState, setIsMenuOpen] = useState(false);
	return (
		<div
			onClick={() => {
				setIsMenuOpen((prev) => !prev);
			}}
		>
			<MenuChange MenuState={MenuState} />
		</div>
	);
};

export default Menu;
