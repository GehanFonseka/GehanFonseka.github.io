import React from 'react'
import './Hero.css'
import profile_img from '../../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
     
    <div id='home' className='hero'>
    <img src={profile_img} alt=" "/>
        
        <h1><span>I'm Gehan Fonseka,</span>Undergraduate<br></br> Student at SLIIT.</h1>
        <p>I am a dedicated and enthusiastic undergraduate pursuing a degree in Software Engineering at SLIIT University.</p>
        <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect With Me
        </AnchorLink></div>
        <div className="hero-resume">My Resume</div>
    </div>
    </div>
  )
}

export default Hero