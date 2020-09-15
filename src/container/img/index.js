/** @format */

import React from 'react';
import profile from '../../assets/bidiptobose.png';
import './style.scss';
const Img = () => {
	return (
		<div className='image'>
			<img src={`${profile}`} alt='' />
		</div>
	);
};
export default Img;
