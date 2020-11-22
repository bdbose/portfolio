/** @format */

import React from 'react';
import './style.scss';

const ProjectCard = (props) => {
	// console.log(props);
	return (
		<div className='project-cards'>
			<div className='project-img'>
				<img src={props.data.url} alt={props.data.title} />
			</div>
			<div className='project-details'>
				<div className='project-name'>{props.data.title}</div>
				<div className='project-tech'>{props.data.tech}</div>
				{props.data.myPart ? (
					<div className='project-mypart'>
						{props.data.myPart.map((i) => {
							return <li>{i}</li>;
						})}
					</div>
				) : null}
				<div className='project-chechkout'>
					Check out:{' '}
					<a href={props.data.link} target='_blank' rel='noopener noreferrer'>
						{props.data.link}
					</a>
				</div>
			</div>
		</div>
	);
};
export default ProjectCard;
