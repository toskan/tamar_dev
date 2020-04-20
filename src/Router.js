import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Work from './Work';
import Home from './Home';
import Contact from './Contact';

class Router extends React.Component {
	render() {
		return (
			<Routes>
				<Route element={<Home />} />
				<Route path="/work" element={<Work />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		);
	}
}

export default Router;

// removed path (wasn't showing on home-page) path="/"
