import React from 'react';
import SideNav from './SideNav';

function OpenMenu() {
	return (
		<div id="menu-header-div">
			<SideNav />
			<div className="main-header-div">
				<div className="main-header-div-top">
					<div className="title-div">
						<h1 className="title">tamar</h1>
						<div className="circle"></div>
						<h1 className="title">dev</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OpenMenu;
