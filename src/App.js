import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import './Reset.css';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Router from './Router';
import debounce from 'lodash/debounce';

const handleResize = () => {
	debounce(
		(height, width) => height(window.innerWidth)(width(window.innerHeight)),
		1000
	);
};

function App() {
	const location = useLocation();
	const ref = useRef({
		renderCount: 0,
		boolean: false,
	});
	useEffect(() => {
		if (location.pathname) {
			ref.current.renderCount += 1;
			ref.current.boolean = true;
			if (ref.current.renderCount > 1 && ref.current.boolean) {
				document.getElementsByClassName(`opacity-content`)[0].animate(
					[
						{ opacity: `0.3` },
						{
							opacity: `1`,
						},
					],
					{
						duration: 300,
						iterations: 1,
					}
				);
			}
		}
	}, [location, location.pathname]);

	const [dimensions, setDimensions] = useState({
		height: null,
		width: null,
	});
	useEffect(() => {
		window.onresize = handleResize(
			setDimensions.height,
			setDimensions.width
		);

		return (_) => {
			window.removeEventListener('resize', handleResize);
		};
	}, [dimensions.height, dimensions.width]);

	return (
		<div className="main">
			<Header />
			<Router />
			<Footer />
		</div>
	);
}

export default App;
