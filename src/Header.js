import React from 'react';
import Menu from './Menu';

class Header extends React.Component {
	render() {
		return (
			<div className="header-div">
				<Menu />
			</div>
		);
	}
}

export default Header;
