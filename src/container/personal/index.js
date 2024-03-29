/** @format */

import React from 'react';
import './style.scss';
import Img from '../img';
import './style.scss';

const tech = [
  {
    img: '/logo/react.svg',
    txt: 'React Js',
  },
  {
    img: '/logo/node.svg',
    txt: 'Node Js',
  },
  {
    img: '/logo/mongodb.svg',
    txt: 'MongoDB',
  },
  {
    img: '/logo/firebase.svg',
    txt: 'Firebase',
  },
  {
    img: '/logo/amazon.svg',
    txt: ['Amazon', 'Web Services'],
  },
  {
    img: '/logo/python.svg',
    txt: 'Python',
  },
  {
    img: '/logo/javascript.svg',
    txt: 'Javascript',
  },
  {
    img: '/logo/html.svg',
    txt: 'HTML',
  },
  {
    img: '/logo/css.svg',
    txt: 'CSS',
  },
  {
    img: '/logo/typescript.svg',
    txt: 'Typescript',
  },
  {
    img: '/logo/sass.svg',
    txt: 'Sass',
  },
  {
    img: '/logo/ui.svg',
    txt: ['UI/UX', 'Design'],
  },
  {
    img: '/logo/mysql.svg',
    txt: 'Mysql',
  },
  {
    img: '/logo/c++.svg',
    txt: 'C++',
  },
  {
    img: '/logo/android.svg',
    txt: ['Android', 'Studio'],
  },
  {
    img: '/logo/ml.svg',
    txt: ['Machine', 'Learning'],
  },
  {
    img: '/logo/java.svg',
    txt: 'Java',
  },
  {
    img: '/logo/cloud.svg',
    txt: ['Cloud', 'Computing'],
  },
];

const des = {
  info: 'Hi , I am Bidipto Bose from Kolkata , India . I am currently a 4th year student in Calcutta Institute of Engineering and Management , pursuing B.Tech in Computer Science and Engineering. Coding is like a Hobby to me and learning new programming language is like my passion. Mainly focused on Website Development . Already 3 years of experience in Website Development and also have experience in multiple internships .',
  title: 'My Tech Stack',
};
const PersonalDetails = () => {
  const DowloadPdf = () => {
    const url = '/resume.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'BidiptoBose_Resume.pdf');
    document.body.appendChild(link);
    link.click();
  };
  return (
    <div className='personal-details' id='personal'>
      <Img />
      <div className='stack'>
        <div className='personal-info'>
          {des.info}
          <div className='title-wrapper'>
            <div className='texh-title'>{des.title}</div>
            <div className='portfolio' onClick={DowloadPdf}>
              <span>Download Resume</span>
              <img
                src={'/logo/download.svg'}
                alt='download'
                height='auto'
                width='auto'
              />
            </div>
          </div>
        </div>
        <div className='tech-stack'>
          <div className='tech-stack-container'>
            {tech.map(({ txt, img }) => {
              return (
                <div className='tech-wrapper' key={txt}>
                  <img src={img} alt={txt} height='auto' width='auto' />
                  <div className='tech-txt'>
                    {Array.isArray(txt) ? txt.join('\n') : txt}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalDetails;
