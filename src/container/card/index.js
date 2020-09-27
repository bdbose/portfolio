/** @format */

import React from 'react';
import './style.scss';
import ProjectCard from '../project-cards';

const Internship = [
	{
		url: '/projects/henlo.png',
		title: 'Henlo - A Secure Video and Messaging Calling App',
		tech: 'UI/UX + Reactjs + React Native + Electron + Nodejs + Nextjs',
		link: 'https://henlo.in/',
	},
	{
		url: '/projects/needenergy.png',
		title: 'Need Energy - Using Data Intelligence To Provide Energy Solution',
		tech: 'UI/UX + Reactjs + AWS + Nextjs',
		link: 'https://www.needenergy.io/',
	},
	{
		url: '/projects/beetract.png',
		title: 'Beetract - Another Way To Freelance and Prelance',
		tech: 'UI/UX + Reactjs + Django + Postgresql',
		link: 'https://beetract2.netlify.app/',
	},
];

const Personal = [
	{
		url: '/projects/Covid19.png',
		title: 'COVID 19 Data Visualizer For Different Country',
		tech: 'ReactJs + Api',
		link: 'https://bdbose.github.io/Covid19/',
	},
	{
		url: '/projects/portfolio.png',
		title: 'My Personal Portfolio Website',
		tech: 'ReactJs + NodeJs',
		link: '/',
	},
	{
		url: '/projects/socket.png',
		title: 'Chatting App',
		tech: 'ReactJs + Nodejs + SocketIO',
		link: 'https://bosechat.netlify.app/chat',
	},
	{
		url: '/projects/blog.png',
		title: 'Writing and Creating Blog Posts',
		tech: 'NextJs',
		link: 'https://blog-teal-tau.vercel.app',
	},
	{
		url: '/projects/login.png',
		title: 'Simple SignUp and Login',
		tech: 'ReactJs + Firebase',
		link: 'https://bdbose.github.io/test/#/',
	},
	{
		url: '/projects/sort.png',
		title: 'Visualization Of Different Sorting Methods',
		tech: 'Vanilla Javascript',
		link:
			'https://bdbose.github.io/Sorting-Virtualization/SortingVisualization.html ',
	},
	{
		url: '/projects/todo.png',
		title: 'Simple To-do-list',
		tech: 'Vanilla Javascript',
		link: 'https://bdbose.github.io/to-do-list/',
	},
];

const Card = () => {
	return (
		<div className='project-wrapper'>
			<div className='project-titles'>Internship Projects</div>
			<div className='project-display'>
				{Internship.map((i) => {
					return <ProjectCard data={i} key={i.title} />;
				})}
			</div>

			<div className='project-titles'>Personal Projects</div>
			<div className='project-display'>
				{Personal.map((i) => {
					return <ProjectCard data={i} key={i.title} />;
				})}
			</div>
		</div>
	);
};
export default Card;
