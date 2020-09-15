/** @format */

import React from 'react';
import './style.scss';
const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				<div className='logo-wrapper'>
					<span className='footer-logo'>BOSE.CODE</span>
				</div>
				<div>
					<span className='footer-title'>Social Links</span>
					<ul>
						<li>
							<a
								href='https://www.linkedin.com/in/bidipto-bose-981b541b6'
								target='_blank'
								rel='noopener noreferrer'>
								Linkedin
							</a>
						</li>
						<li>
							<a
								href='https://github.com/bdbose'
								target='_blank'
								rel='noopener noreferrer'>
								Github
							</a>
						</li>
						<li>
							<a
								href='https://www.facebook.com/bidipto.bose'
								target='_blank'
								rel='noopener noreferrer'>
								Facebook
							</a>
						</li>
						<li>
							<a
								href='https://twitter.com/bdbose123'
								target='_blank'
								rel='noopener noreferrer'>
								Twitter
							</a>
						</li>
						<li>
							<a
								href='https://www.youtube.com/channel/UC-8SZhRIyLvv2TMHkpghjCQ'
								target='_blank'
								rel='noopener noreferrer'>
								Youtube
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/bdbose/'
								target='_blank'
								rel='noopener noreferrer'>
								Instagram
							</a>
						</li>
						<li>
							<span>Email:</span>
							<span style={{ display: 'block', opacity: '0.7' }}>
								bidiptobose123@gmail.com
							</span>
						</li>
					</ul>
				</div>
				<div>
					<span className='footer-title'>Links</span>

					<ul>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/projects'>Projects</a>
						</li>
						<li>
							<a href='/contact'>Contact</a>
						</li>
						<li>
							<a href='/#personal'>Personal Details</a>
						</li>
						<li>
							<a href='/#education-wrapper'>Education</a>
						</li>
						<li>
							<a href='/blogs'>Blogs</a>
						</li>
						<li>
							<a href='/*'>404</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='copyright'>COPYRIGHT © 2020 BIDIPTO BOSE</div>
		</div>
	);
};

export default Footer;
