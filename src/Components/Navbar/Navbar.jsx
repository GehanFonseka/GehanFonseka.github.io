import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo2.png'

const Navbar = () => {
  return (
    
    <div className='navbar'> 
    <img src={logo} alt='' />
    <ul className='nav-menu'>
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
    </ul>
    <div className="nav-connect">Connect With Me</div>


    </div>
  )//add logo to 9 line instead logo.svg
}

export default Navbar