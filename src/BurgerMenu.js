import React from 'react';

function BurgerMenu() {
	return (
		<div className="burger-header-div">
			<div className="main-header-div">
				<div className="main-header-div-top">
					<div className="title-div">
						<h1 className="title">tamar</h1>
						<div className="circle"></div>
						<h1 className="title">dev</h1>
					</div>
				</div>
				<div className="main-header-div-bottom"></div>
			</div>
			<div className="burger">
				<div className="burger-button"></div>
				<div className="burger-button"></div>
				<div className="burger-button"></div>
			</div>
		</div>
	);
}
export default BurgerMenu;
