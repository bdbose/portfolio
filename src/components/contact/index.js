/** @format */

import React, { useState } from 'react';
import Navbar from '../../container/navbar';
import Axios from 'axios';
import Footer from '../../container/footer';
import './style.scss';

const Social = [
	{
		url: '/social/lin.svg',
		link: 'https://www.linkedin.com/in/bidipto-bose-981b541b6',
	},
	{
		url: '/social/github.svg',
		link: 'https://github.com/bdbose',
	},
	{
		url: '/social/fb.svg',
		link: 'https://www.facebook.com/bidipto.bose',
	},
	{
		url: '/social/tweet.svg',
		link: 'https://twitter.com/bdbose123',
	},
	{
		url: '/social/yt.svg',
		link: 'https://www.youtube.com/channel/UC-8SZhRIyLvv2TMHkpghjCQ',
	},
	{
		url: '/social/insta.svg',
		link: 'https://www.instagram.com/bdbose/',
	},
];

const Contact = () => {
	const [email, setEmail] = useState('');
	const [msg, setMsg] = useState('');
	const Submit = async (e) => {
		e.preventDefault();
		await Axios.post('https://email-contact.herokuapp.com/', {
			email,
			msg,
		}).then((data) => {
			console.log(data.data);
			if (data.data === 'successful') {
				console.log(data);
			} else {
				console.log('Failed');
			}
		});
		e.reset();
	};
	return (
		<div className='contact'>
			<Navbar />

			<div className='contact-title'>Contact Me</div>
			<div className='contact-wrapper'>
				<div className='contact-box'>
					<div className='small-title'>Contact</div>
					<form onSubmit={(e) => Submit(e)}>
						<input
							type='email'
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Email'
							required
						/>
						<textarea
							onChange={(e) => setMsg(e.target.value)}
							placeholder='Message'
							required
						/>
						<button>Submit</button>
					</form>
				</div>
				<div className='contact-box'>
					<div className='small-title'>Location</div>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29496.883549489605!2d88.37266057865214!3d22.462483615142773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271a00d52ca53%3A0x84c91e76a182e37a!2sGaria%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1600107478021!5m2!1sen!2sin'
						width='100%'
						height='300'
						frameBorder='0'
						style={{ border: '0', margin: '30px 0' }}
						allowFullScreen=''
						aria-hidden='false'
						tabIndex='0'
						key='1'
						title='map'
					/>
					<div className='loc-detail'>
						Garia , Kolkata , West Bengal
						<br />
						India - 700084
					</div>
				</div>
			</div>

			<div className='contact-title'>Socail Contacts</div>
			<div className='social-link'>
				{Social.map((i) => {
					return (
						<a
							href={i.link}
							target='_blank'
							rel='noopener noreferrer'
							key={i.url}>
							<img src={i.url} alt={i.url} />
						</a>
					);
				})}
			</div>
			<Footer />
		</div>
	);
};
export default Contact;
