/** @format */

import React from 'react';
import './style.scss';
const Scroll = () => {
	return (
		<div
			className='scroll-box'
			onClick={() => {
				window.scrollTo(0, 700);
			}}>
			<span></span>
		</div>
	);
};
export default Scroll;
