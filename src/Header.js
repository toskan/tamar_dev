import React from 'react';
import OpenMenu from './OpenMenu';

class Header extends React.Component {
	render() {
		return (
			<div className="header-div">
				<OpenMenu />
			</div>
		);
	}
}

export default Header;
