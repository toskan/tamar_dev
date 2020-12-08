import React, { useState, useEffect } from 'react';
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
	const [dimensions, setDimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});
	console.log(dimensions);
	useEffect(() => {
		const debouncedHandleResize = debounce(function handleResize() {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		}, 1000);

		window.addEventListener('resize', debouncedHandleResize);

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
