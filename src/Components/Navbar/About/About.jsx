import React from 'react'
import './About.css'
import theme_pattern from '../../../assets/theme_pattern.svg'
import profile_img from '../../../assets/profileimg5.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an software developer,a dedicated and enthusiastic Undergraduate Student at SLIIT University</p>
                        <p> My passion for Software Development,I am committed to leveraging my academic knowledge and practical experiences to solve real-world challenges.</p>
                    </div>
                    <div className="about-skills">

                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>PHP</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievments">
                <div className="about-achievment">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievment">
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
           
               
                
            </div>
        </div>
    )
}

export default About