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
         I am an enthusiastic undergraduate specializing in DevOps, with a strong foundation in software engineering and computer science. I have hands-on experience with CI/CD automation, containerization, and cloud-based deployment workflows, alongside practical development experience using React, Node.js, Python, Java, and C++. I am passionate about building and deploying scalable, reliable applications by effectively bridging development and operations. As a fast learner committed to continuous improvement, I am eager to contribute to real-world projects and grow within the Information Technology industry.
        </p>
        <br></br>
        <div className="hero-action">
          <AnchorLink className="hero-connect" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
          <a
  href="/Gehan Fonseka.pdf"
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
