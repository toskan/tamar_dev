import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import './Reset.css';
import './App.css';
import Header from './Header';
import Router from './Router';

function debounce(fn, ms) {
	let timer;
	return (_) => {
		clearTimeout(timer);
		timer = setTimeout((_) => {
			timer = null;
			fn.apply(this, arguments);
		}, ms);
	};
}

const App = () => {
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
		height: window.innerHeight,
		width: window.innerWidth,
	});
	useEffect(() => {
		const debouncedHandleResize = debounce(function handleResize() {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		}, 1000);

		window.addEventListener('resize', debouncedHandleResize);
		console.log(dimensions.width);
		return (_) => {
			window.removeEventListener('resize', debouncedHandleResize);
		};
	});

	return (
		<div className="main">
			<Header />
			<Router />
		</div>
	);
};

export default App;
