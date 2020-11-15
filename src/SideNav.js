import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
	return (
		<div className="side-nav-div">
			<h2 className="menu">menu</h2>
			<ul className="menu-list" id="shrunken-bar-menu">
				<li className="menu-list-item">
					<Link to="/">home</Link>
				</li>
				<li className="menu-list-item">
					<Link to="/work">portfolio</Link>
				</li>
				<li className="menu-list-item">
					<Link to="/contact">contact</Link>
				</li>
			</ul>
		</div>
	);
};
export default SideNav;
