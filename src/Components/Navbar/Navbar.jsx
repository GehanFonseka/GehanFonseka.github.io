import React, { useState } from 'react';
import './Navbar.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logoImage from '../../assets/gf5.png'; // Keep your logo image

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <img src={logoImage} alt="Logo" className="navbar-logo" />
      
      {/* Mobile Toggle Button (using span elements) */}
      <div
        className={`nav-mob-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        <li className={menu === "home" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => { setMenu("home"); setMenuOpen(false); }}>About me</p>
          </AnchorLink>
        </li>
        
        <li className={menu === "Skills" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#Skills">
            <p onClick={() => { setMenu("Skills"); setMenuOpen(false); }}>Skills</p>
          </AnchorLink>
        </li>
        
        <li className={menu === "work" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => { setMenu("work"); setMenuOpen(false); }}>Portfolio</p>
          </AnchorLink>
        </li>
        
        <li className={menu === "Certifications" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#Certifications">
            <p onClick={() => { setMenu("Certifications"); setMenuOpen(false); }}>Certifications</p>
          </AnchorLink>
        </li>

        <li className={menu === "contact" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => { setMenu("contact"); setMenuOpen(false); }}>Contact</p>
          </AnchorLink>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://github.com/GehanFonseka" target="_blank" rel="noopener noreferrer"><FaGithub /> </a>
        <a href="https://www.instagram.com/gehan_fonseka_?igsh=MWI3eDYzamx2bzIzYQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/gehan-fonseka-aa61a7288" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </div>
  );
};

export default Navbar;
