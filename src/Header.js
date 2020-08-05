import React from 'react';
import HeaderLeft from './HeaderLeft';
import Menu from './Menu';

class Header extends React.Component {
	render() {
		return (
			<div>
				<Menu />
			</div>
		);
	}
}

export default Header;
