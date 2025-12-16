import React, { useState, useEffect } from 'react';

import './MyWork.css';

import project1_img from '../../assets/salon.png';
import project2_img from '../../assets/lemon111.png';
import project3_img from '../../assets/studybuddy.png';
import project4_img from '../../assets/project8.png';
import project5_img from '../../assets/project5.png';
import project6_img from '../../assets/project6.png';
import project8_img from '../../assets/FinFlow.png';
import project9_img from '../../assets/skilledge.png';
import arrow_icon from '../../assets/arrow_icon.svg';
import project7_img from '../../assets/taskpro2.png';

const mywork_data = [
  
    {
        w_no: 2,
        w_name:"AutoNation",
        w_img:project5_img,
        w_desc: "AUTONATION is a Python and Django platform that simplifies car buying, selling, and related automotive services with an intuitive, seamless user experience.",
        w_link: "https://github.com/GehanFonseka/AutoNation-car-market-django",
    },
    {
        w_no: 1,
        w_name: "FinFlow",
        w_img: project8_img,
        w_desc: "FinFlow is a smart finance manager built with the MERN stack, helping users track income, manage expenses, plan budgets, and set goals enhanced with voice input and AI insights.",
        w_link: "https://github.com/GehanFonseka/FinFlow"
    },
   
    {
        w_no: 7,
        w_name:"Go-Tours",
        w_img: project6_img,
        w_desc: "Go Tours is a robust, user-friendly web-based system for booking and managing travel packages, built with PHP, MySQL, offering secure PayPal transactions.",
        w_link: "https://github.com/GehanFonseka/Go-Tours-and-Travel-Management-System-with-PayPal-Payment",
    },
   
    {
        w_no: 4,
        w_name: "FashionHub",
        w_img: project1_img,
        w_desc: "FashionHub is a scalable MERN stack e-commerce platform for fashion businesses, using Docker, Jenkins, and AWS to optimize operations and deliver a seamless user experience.",
        w_link: "https://github.com/GehanFonseka/ITP_Project_FashionHub"
    },
    {
        w_no: 5,
        w_name: "Little Lemon",
        w_img: project2_img,
        w_desc: "Little Lemon is a family-owned Mediterranean restaurant. This booking application was developed as the final capstone project for the Meta Front-End Developer Certification.",
        w_link: "https://github.com/GehanFonseka/Little-Lime-Meta-Frontend"
    },
      {
        w_no: 8,
        w_name: "TaskPro",
        w_img: project7_img,
        w_desc: "Cloud-native task management system on GCP demonstrating CI/CD automation, Docker, Kubernetes, secure deployment, monitoring, and enterprise-grade DevOps practices.",
        w_link: "https://github.com/GehanFonseka/Devops-Task-App"
    },
    {
        w_no: 6,
        w_name: "Study Buddy",
        w_img: project3_img,
        w_desc: "This is a Task Management Application developed in Android Studio using Kotlin, created as part of a second-year Mobile Application Development project.",
        w_link: "https://github.com/GehanFonseka/MAD-ToDo-List-App--Kotlin"
    },
    
    {
        w_no: 3,
        w_name: "SkillEdge",
        w_img: project9_img,
        w_desc: "Skilledge is a full-stack platform built with React and Java Spring Boot, enabling users to manage posts, receive notifications, create learning plans, and track progress effectively.",
        w_link: "https://github.com/GehanFonseka/SkillEdge"
    },
];  

const MyWork = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const defaultCount = isMobile ? 4 : 6;
    const visibleProjects = showAll ? mywork_data : mywork_data.slice(0, defaultCount);

    const toggleProjects = () => {
        setShowAll(prev => !prev);
    };

    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Projects</h1>
                <p>Discover my projects, highlighting creative and impactful solutions.</p>
            </div>

            <div className="mywork-container">
                {visibleProjects.map((work, index) => (
                    <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer" className="mywork-card">
                        <img src={work.w_img} alt={work.w_name} className="project-image" />
                        <div className="project-details">
                            <h2>{work.w_name}</h2>
                            <p>{work.w_desc}</p>
                        </div>
                    </a>
                ))}
            </div>

            <button className="mywork-showmore" onClick={toggleProjects}>
                <span>{showAll ? "Show Less" : "Show More"}</span>
                <img
                    src={arrow_icon}
                    alt="Arrow Icon"
                    className={showAll ? "arrow-rotate" : ""}
                />
            </button>
        </div>
    );
};

export default MyWork;
