/** @format */

import React, { useState, useEffect } from 'react';
import './style.scss';

const Navbar = () => {
  const [open, setOpen] = useState('close');
  const Dropdown = () => {
    const icon = document.getElementById('nav-icon-id');
    const mob = document.getElementById('mob-bar');
    if (open === 'close') {
      icon.style.transform = 'rotate(90deg)';
      mob.style.display = 'block';
      setOpen('open');
    } else {
      icon.style.transform = 'rotate(180deg)';
      mob.style.display = 'none';
      setOpen('close');
    }
  };
  useEffect(() => {
    window.addEventListener('resize', () => {
      const mob = document.getElementById('mob-bar');
      const icon = document.getElementById('nav-icon-id');

      if (window.outerWidth >= 800) {
        mob.style.display = 'none';
        if (open === 'close') {
          icon.style.transform = 'rotate(180deg)';
        }
      }
    });
  });
  return (
    <div
      className='navbar'
      id='nav-id'
      style={{ backgroundColor: 'rgb(63, 61, 86)' }}>
      <div className='nav-container'>
        <div className='title-icon'>BOSE.CODE</div>
        <div className='nav-links'>
          <a className='links' href='/'>
            Home
          </a>
          <a className='links' href='/projects'>
            Projects
          </a>
          <a className='links' href='/contact'>
            Contact
          </a>
          <a className='links' href='/blogs'>
            Blogs
          </a>
        </div>
        <div className='nav-icon' id='nav-icon-id' onClick={Dropdown}>
          <img src='/logo/menu.svg' alt='' height='auto' width='auto' />
        </div>
      </div>
      <div className='nav-links-mob' id='mob-bar'>
        <a className='links' href='/'>
          Home
        </a>
        <a className='links' href='/projects'>
          Projects
        </a>
        <a className='links' href='/contact'>
          Contact
        </a>
        <a className='links' href='/blogs'>
          Blogs
        </a>
      </div>
    </div>
  );
};

export default Navbar;
