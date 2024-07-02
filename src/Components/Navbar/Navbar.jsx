import React, { useState , useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo(3).png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {

  const[menu,SetMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0"
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px"
  }
  return (
    
    <div className='navbar'> 
    <div className="logo">
    <img src={logo} alt='' />
    </div>
    
    <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
    <ul ref={menuRef} className='nav-menu'>
      <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link'offset={50} href='#home'><p onClick={()=>SetMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link'offset={50} href='#about'><p onClick={()=>SetMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link'offset={50} href='#work'><p onClick={()=>SetMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link'offset={50} href='#contact'><p onClick={()=>SetMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
    </ul>
    <div className="nav-connect" ><AnchorLink className='anchor-link'offset={50} href='#contact'>Connect With Me</AnchorLink></div>


    </div>
  )//add logo to 9 line instead logo.svg
}

export default Navbar