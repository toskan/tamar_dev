import React from 'react';
import { scaleDown as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const Burger = ({ menuState, setMenuState }) => {
	return (
		<div id="outer-container" onClick={() => setMenuState((prev) => !prev)}>
			<Menu width={175} isOpen={menuState}>
				<main id="page-wrap">
					<div className="burger-nav-div">
						<h2 className="menu burger-menu">menu</h2>
						<ul
							className="menu-list burger-menu-list"
							id="shrunken-bar-menu"
						>
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
				</main>
			</Menu>
		</div>
	);
};
export default Burger;