import React, { useState, useEffect } from 'react';
import './Hero.css';
import profile_img from '../../../assets/dp10-img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const titles = ['Software Engineer', 'DevOps Engineer'];
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const delayBetween = 1500;

  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && text.length < titles[index].length) {
      timeout = setTimeout(() => {
        setText(titles[index].slice(0, text.length + 1));
      }, typingSpeed);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(titles[index].slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && text.length === titles[index].length) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetween);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, titles]);

  return (
    <div id="home" className="hero">
      <div className="hero-content">
      <h1>
        <span>
        Hi, I'm <br className="mobile-break" />
        <span className="no-wrap">Gehan Fonseka,</span>
        </span>
      </h1>
        <h2 className="typing-text">{text}</h2>
        <br></br>
        <p>
         I am an enthusiastic undergraduate software developer with a strong foundation in computer science, programming, and DevOps. Proficient in frameworks like React and Node.js, and experienced in Python, Java, C++. I'm a quick learner and I am always looking for opportunities to learn and grow as a developer, and I am excited to use my skills to make a positive impact and continue my career in the field of Information Technology.
        </p>
        <br></br>
        <div className="hero-action">
          <AnchorLink className="hero-connect" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
          <a
  href="/Gehan Kaushalya Fonseka-1.pdf"
  className="hero-resume"
  target="_blank"
  rel="noopener noreferrer"
>
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
