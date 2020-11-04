import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Slider from './Slider';
import Home from './Home';
import Contact from './Contact';

class Router extends React.Component {
	render() {
		return (
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/work" element={<Slider />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		);
	}
}

export default Router;
