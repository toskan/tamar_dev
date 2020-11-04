import React from 'react';
import { Link } from 'react-router-dom';

function OpenMenu() {
	return (
		<div id="menu-header-div">
			<div className="main-header-div">
				<div className="main-header-div-top">
					<div className="title-div">
						<h1 className="title">tamar</h1>
						<div className="circle"></div>
						<h1 className="title">dev</h1>
					</div>
					<div className="lines-top">
						<div></div>
						<div></div>
					</div>
				</div>
				<div className="main-header-div-bottom">
					<div className="lines-bottom">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
			<div className="open-menu">
				<h2 className="menu">menu</h2>
				<ul className="menu-list" id="shrunken-bar-menu">
					<li className="menu-list-item">
						<Link to="/">home&nbsp;&nbsp;&nbsp;&nbsp;</Link>
					</li>
					<li className="menu-list-item">
						<Link to="/work">portfolio</Link>
					</li>
					<li className="menu-list-item">
						<Link to="/contact">contact&nbsp;&nbsp;</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default OpenMenu;
