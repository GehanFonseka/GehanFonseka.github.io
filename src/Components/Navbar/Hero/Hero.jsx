import React from 'react'
import './Hero.css'
import profile_img from '../../../assets/profile_img.jpg'

const Hero = () => {
  return (
     
    <div className='hero'>
    <img src={profile_img} alt=" "/>
        
        <h1><span>I'm Gehan Fonseka,</span>Undergraduate<br></br> Student at SLIIT.</h1>
        <p>I am a dedicated and enthusiastic undergraduate pursuing a degree in Software Engineering at SLIIT University.</p>
        <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
    </div>
    </div>
  )
}

export default Hero