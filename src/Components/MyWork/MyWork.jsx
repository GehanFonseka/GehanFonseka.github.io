import React from 'react';
import project1_img from '../../assets/salon.png';
import project2_img from '../../assets/lemon111.png';
import project3_img from '../../assets/Cover2.png';
import project4_img from '../../assets/motor.png';


import './MyWork.css';

import arrow_icon from '../../assets/arrow_icon.svg';

const mywork_data = [
    {
        w_no: 1,
        w_name: "FashionHub",
        w_img: project1_img,
        w_desc: "This project was developed using React, Node.js, Express, and MongoDB as part of the second-year, second-semester IT project at SLIIT.",
        w_link: "https://github.com/GehanFonseka/ITP_Project_FashionHub"  // Add GitHub link here
    },
    {
        w_no: 2,
        w_name: "Little Lemon",
        w_img: project2_img,
        w_desc: "Little Lemon is a family-owned Mediterranean restaurant. This booking application was developed as the final capstone project for the Meta Front-End Developer Certification.",
        w_link: "https://github.com/GehanFonseka/Little-Lime-Meta-Frontend"
    },
    {
        w_no: 3,
        w_name: "Study Buddy",
        w_img: project3_img,
        w_desc: "This is a Task Management Application developed in Android Studio using Kotlin, created as part of a second-year Mobile Application Development project.",
        w_link: "https://github.com/GehanFonseka/MAD-ToDo-List-App--Kotlin"
    },
    {
        w_no: 4,
        w_name: "MotorMart",
        w_img: project4_img,
        w_desc: "This project was developed using Java as part of the first-year, first-semester IWT project at SLIIT.",
        w_link: "https://github.com/GehanFonseka/Vehical-Spare-Parts-Shop---JAVA"
    },
 
];

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Projects</h1>
                <p>Discover my projects, highlighting creative and impactful solutions.</p>
        
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer" className="mywork-card">
                        <img src={work.w_img} alt={work.w_name} className="project-image"/>
                        <div className="project-details">
                            <h2>{work.w_name}</h2>
                            <p>{work.w_desc}</p>
                        </div>
                    </a>
                ))}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="Arrow Icon" />
            </div>
        </div>
    );
};

export default MyWork;
