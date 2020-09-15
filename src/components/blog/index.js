/** @format */

import React from 'react';
import './style.scss';
import Navbar from '../../container/navbar';
import Footer from '../../container/footer';

import animationData from '../../assets/9621-waves.json';
const Blog = () => {
	return (
		<div className='blog'>
			<Navbar />
			<div className='text-cover'>
				<h1 className='glitch' data-text='COMING SOON !'>
					COMING SOON !
				</h1>
			</div>
			<Footer />
		</div>
	);
};
export default Blog;
