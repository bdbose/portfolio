/** @format */

import React from 'react';
import './style.scss';
const info = {
	url: '/social/info.svg',
	title: 'Information',
	des: [
		'	I Build Websites With Both Secure Backends And Wonderful UIs In Frontend. You Can Check Out My Works From The Projects Link In The Navbar . And If You Need To Contact Or Hire Me For Website Development All The Links Are Here In The Website',
		'Thank You For Visiting !',
	],
};

const Info = () => {
	return (
		<div className='info'>
			<div className='info-container'>
				<div className='info-svg'>
					<img src={info.url} alt={info.title} />
				</div>
				<div className='info-text'>
					<div className='info-title'>{info.title}</div>
					<div className='info-msg'>{info.des.join('\n')}</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
