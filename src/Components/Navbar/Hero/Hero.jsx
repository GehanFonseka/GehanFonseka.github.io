import React from 'react';
import './Hero.css';
import profile_img from '../../../assets/dp10-img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-content">
        <h1><span>I'm Gehan Fonseka,</span><br></br> Software Developer.</h1>
        <p>I am an undergraduate software developer with proficiency in frameworks such as React and Node.js. I also have hands-on experience with programming languages including Python, Java, C, and C++. As a quick learner, I am constantly seeking opportunities to enhance my skills and grow professionally. I am eager to leverage my expertise to contribute positively and advance my career in the field of Information Technology.</p>
        <div className="hero-action">
          <AnchorLink className="hero-connect" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
          <a href="/path-to-resume" className="hero-resume" target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>
      </div>
      <div className="hero-image-container">
    <img src={profile_img} alt="Profile" className="hero-image" />
</div>

    </div>
  );
};

export default Hero;
