import React from 'react';
import './style.scss';
import Hero from '../../container/hero';
import Info from '../../container/info';
import PersonalDetails from '../../container/personal';
import Timeline from '../../container/timeline';
import Footer from '../../container/footer';
import Navbar from '../../container/navbar';
import Particles from 'react-particles-js';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Particles
        height='calc(100vh - 57px)'
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 1803.4120608655228,
              },
            },
          },
          interactivity: {
            detect_on: 'window',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: false,
                mode: 'bubble',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
        style={{
          position: 'absolute',
          background: 'linear-gradient(0deg, #4123E9 -46.76%, #3F3D56 84.28%)',
        }}
      />
      <Hero />
      <PersonalDetails />
      <Timeline />
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
