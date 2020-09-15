/** @format */

import React from 'react';
import './style.scss';
const Timeline = () => {
	return (
		<div className='timeline-wrapper' id='education-wrapper'>
			<div className='education'>Education</div>
			<div className='timeline'>
				<div className='container right'>
					<div className='content'>
						<p>
							South Point High School <br />
							Class X CBSE 2016
						</p>
					</div>
				</div>
				<div className='container left'>
					<div className='content'>
						<p className='p-left'>
							Delhi Public School,Ruby Park
							<br />
							Class XII CBSE 2018
						</p>
					</div>
				</div>
				<div className='container right'>
					<div className='content'>
						<p>
							Calcutta Institute of Engineering And Management <br />
							CSE Dept <br />
							Joinning 2018
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Timeline;
