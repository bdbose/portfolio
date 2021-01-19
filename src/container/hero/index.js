/** @format */
import React from 'react';
import './style.scss';
import Lottie from 'react-lottie';
import animationData from '../../assets/laptop.json';
import Scroll from '../scrolldown';

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

const Hero = () => {
  const defaultOptions = {
    loop: 0,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className='hero-cover'>
      <div className='hero-main'>
        <div className='hero-container'>
          <div className='hero-title-container'>
            <div className='hero-title'>
              I Am<span style={{ color: '#ffd32a' }}> Bidipto Bose </span>, A
              Fullstack Website Developer.
            </div>
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
          </div>
          <div className='hero-svg'>
            <div className='hero-svg-container'>
              <Lottie options={defaultOptions} />
            </div>
          </div>
        </div>
        <Scroll />
      </div>
    </div>
  );
};

export default Hero;
