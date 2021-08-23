/** @format */

import React from 'react';
import './style.scss';
import ProjectCard from '../project-cards';

const Temp = [
  {
    url: 'https://i.ibb.co/ThqtzSm/image.png',
    title: 'Najwa Zebian',
    link: 'https://najwazebian.com/',
  },
  {
    url: 'https://i.ibb.co/TWFjKzg/image.png',
    title: 'Royal Diagnostic Centre',
    link: 'https://www.rdckolkata.com/',
  },
  {
    url: 'https://i.ibb.co/Jy6BkLY/image.png',
    title: 'Buy Online Fruits Vegetables and Meat | Grocery Shop in Kolkata',
    link: 'https://briskbasket.com/',
  },
];

const Internship = [
  {
    url: '/projects/henlo.png',
    title: 'Henlo - A Secure Video and Messaging Calling App',
    tech: 'UI/UX + Reactjs + React Native + Electron + Nodejs + Nextjs',
    link: '',
    myPart: ['Created the landing pages', 'Fixed Bugs on Frontend'],
  },
  {
    url: '/projects/needenergy.png',
    title: 'Need Energy - Using Data Intelligence To Provide Energy Solution',
    tech: 'UI/UX + Reactjs + AWS + Nextjs',
    link: 'https://www.needenergy.io/',
    myPart: [
      'Created All the landing pages',
      'Worked on AWS(Cognitio,Amplify,App Sync) and GraphQL',
      'Created CMS',
    ],
  },
  {
    url: '/projects/beetract.png',
    title: 'Beetract - Another Way To Freelance and Prelance',
    tech: 'UI/UX + Reactjs + Django + Postgresql',
    link: 'https://beetract2.netlify.app/',
    myPart: ['Worked on the Frontend', 'Created CMS and Authentication'],
  },
  {
    url: '/projects/close.png',
    title: 'Close Company - 1-Tap Checkout Fast. Safe. Rewarding',
    tech: 'UI/UX + Reactjs + NodeJs + MongoDb',
    link: 'https://letsdooit.in/',
    myPart: ['Worked on Frontend and Backend Fixes'],
  },
  {
    url: '/projects/Salesbook.png',
    title: 'SalesBook - 100% free Customer and Lead Manager',
    tech: 'Flutter + NodeJs + MongoDb',
    link: 'https://play.google.com/store/apps/details?id=com.theclosecompany.sales_book',
    myPart: [
      'Created entire backend and database handling',
      'Server Handling on Aws(EC2)',
      'Worked on S3 bucket to store files',
    ],
  },
  {
    url: '/projects/closely.png',
    title: 'Closely - Upto 80% off on best online brands',
    tech: 'Flutter + NodeJs + MongoDb',
    link: 'https://play.google.com/store/apps/details?id=com.theclosecompany.closely',
    myPart: ['Created backend Apis and database handling', 'Fixing Bugs'],
  },
  {
    url: '/projects/dcoder.png',
    title: 'Dcoder, Compiler IDE :Code & Programming on mobile',
    tech: 'Java + ReactJs(Razzle) + NodeJs + MongoDb',
    link: 'http://code.dcoder.tech/',
    myPart: [
      'Restructing the present Website',
      'Adding new features',
      'Fixing some bugs',
    ],
  },
  {
    url: 'https://i.ibb.co/JptdhRV/image.png',
    title: 'SaffronStays: Where Families Bond',
    tech: 'ReactJs + NodeJs + MongoDb',
    link: 'https://www.saffronstays.com/',
    myPart: [
      'Restructing the present Website',
      'Working in a team of 8',
      'Adding new features on based of research and user experience',
    ],
  },
];

const Personal = [
  {
    url: 'https://copy-landing.vercel.app/assets/copylanding.jpg',
    title: `AI Powered Chatbot - 
I am Cai - I am a AI powered
chatbot ! You can ask me any
questions . Join me lets have
a great chat!`,
    tech: 'NextJs + ReactJs + Styled + Sass + Nodejs + Firebase + SocketIo + Python + Flask + Tensorflow',
    link: 'https://copy-landing.vercel.app/',
  },
  {
    url: '/projects/news24.png',
    title: 'Automated News Website',
    tech: 'NextJs + NodeJs + Firebase',
    link: 'https://newstoday24.tech/',
  },
  {
    url: 'https://i.ibb.co/s9HG5Gw/image.png',
    title: 'NewsToday - Top News, Top News Today, Top Stories',
    tech: 'React Native + NodeJs + Firebase',
    link: 'https://play.google.com/store/apps/details?id=com.newstodayapp',
  },
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
    url: 'https://github.com/bdbose/image/raw/master/public/si1.png',
    title: 'Search Unlimited Images - Unsplash Api',
    tech: 'ReactJs + Api',
    link: 'https://unsplash-image.netlify.app/',
  },
  {
    url: '/projects/socket.png',
    title: 'Chatting App',
    tech: 'ReactJs + Nodejs + SocketIO',
    link: 'https://bosechat.netlify.app/chat',
  },
  {
    url: '/projects/splash.png',
    title: 'Unsplash Clone',
    tech: 'ReactJs + RestApi + Sass + HTML',
    link: 'https://elegant-albattani-709e8b.netlify.app/',
  },
  {
    url: '/projects/ui.png',
    title: 'UI/UX Development',
    tech: 'ReactJs + Sass + HTML',
    link: 'https://wizardly-goldberg-75effd.netlify.app/home',
  },
  {
    url: '/projects/ui2.png',
    title: 'UI/UX Development',
    tech: 'ReactJs + Sass + HTML',
    link: 'https://festive-banach-78e2c2.netlify.app/',
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
    link: 'https://bdbose.github.io/Sorting-Virtualization/SortingVisualization.html ',
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
      <div className='project-titles'>Industry Projects</div>
      <div className='project-display'>
        {Temp.reverse().map((i) => {
          return <ProjectCard data={i} key={i.title} />;
        })}
      </div>
      <div className='project-titles'>Internship Projects</div>
      <div className='project-display'>
        {Internship.reverse().map((i) => {
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
