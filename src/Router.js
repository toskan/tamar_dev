import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import Home from './Home';
import Contact from './Contact';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/portfolio" element={<Portfolio />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
};

export default Router;
