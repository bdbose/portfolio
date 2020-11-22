/** @format */

import React from 'react';
import './style.scss';
import Hero from '../../container/hero';
import Info from '../../container/info';
import PersonalDetails from '../../container/personal';
import Timeline from '../../container/timeline';
import Footer from '../../container/footer';
import Navbar from '../../container/navbar';

const Home = () => {
	return (
		<div className='home'>
			<Navbar />
			<Hero />
			<PersonalDetails />
			<Timeline />
			<Info />
			<Footer />
		</div>
	);
};

export default Home;
