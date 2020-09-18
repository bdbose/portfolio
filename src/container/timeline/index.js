/** @format */

import React from 'react';
import './style.scss';

const Edu = [
	{
		align: 'container right',
		des: ['South Point High School', ' Class X CBSE 2016'],
		p: 'p-right',
	},
	{
		align: 'container left',
		des: ['Delhi Public School,Ruby Park', 'Class XII CBSE 2018'],
		p: 'p-left',
	},
	{
		align: 'container right',
		des: [
			'Calcutta Institute of Engineering And Management',
			'CSE Dept',
			'Joinning 2018',
		],
		p: 'p-right',
	},
];

const Timeline = () => {
	return (
		<div className='timeline-wrapper' id='education-wrapper'>
			<div className='education'>Education</div>
			<div className='timeline'>
				{Edu.map((i) => {
					return (
						<div className={i.align} key={i.des}>
							<div className='content'>
								<p className={i.p}>{i.des.join('\n')}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Timeline;
