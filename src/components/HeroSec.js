import './HeroSecStyles.css';
import React from 'react';
import IntroImg from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';

const HeroSec = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='BackgroundImg'></img>
      </div>
      <div className='content'>
        <p>Test</p>
        <h1>Test</h1>
        <div>
          <Link to='/Projects' className='btn'>Projects</Link>
          <Link to='/Contact' className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSec
