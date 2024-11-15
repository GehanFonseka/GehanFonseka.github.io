import React, { useState } from 'react';
import './Certifications.css';
import arrow_icon from '../../assets/arrow_icon.svg'
import oop from '../../assets/oop1.png';
import Python from '../../assets/Python1.png';
import github from '../../assets/github.png';
import frontend from '../../assets/frontend.png';
import react from '../../assets/react.png';
import flutter from '../../assets/flutter.png';
import git from '../../assets/git.png';
import css from '../../assets/css.png';
import api from '../../assets/api.png';
import react1 from '../../assets/react1.png';

const certifications = [
    { 
      id: 1, 
      title: "JavaScript OOP", 
      image: oop, 
      link: "https://www.udemy.com/certificate/UC-dd363551-1b11-4a45-8885-c00fa6595024/"
    },
    { 
      id: 2, 
      title: "Python For Beginners", 
      image: Python, 
      link: "https://drive.google.com/file/d/1hzCTpjuCAkkbDKew-XzLxLH4NezNmhSf/view"
    },
    { 
      id: 3, 
      title: "Version Control", 
      image: github, 
      link: "https://www.coursera.org/account/accomplishments/verify/RCM04FAWFP06"
    },
    { 
      id: 4, 
      title: "Front-End Developer Capstone", 
      image: frontend, 
      link: "https://www.coursera.org/account/accomplishments/verify/UYQZZ6RA116B"
    },
    { 
      id: 5, 
      title: "React Basics", 
      image: react, 
      link: "https://www.coursera.org/account/accomplishments/verify/ADJRPGR1975F?"
    },
    {
      id: 6, 
      title: "Flutter App Development", 
      image: flutter, 
      link: "https://verify.letsupgrade.in/certificate/LUEFLTMAY1241110" 
    },
    { 
      id: 7, 
      title: "Git & Github Bootcamp", 
      image: git, 
      link: "https://verify.letsupgrade.in/certificate/LUEGGAPR1241539"
    },
    { 
      id: 8, 
      title: "Postman API Student Expert", 
      image: api, 
      link: "https://badgr.com/public/assertions/NzrwliGIQv6OkjCjp22fGQ" 
      },
    { 
      id: 9, 
      title: "Tailwind CSS Bootcamp", 
      image: css, 
      link: "https://verify.letsupgrade.in/certificate/LUETCMAR124989" 
    },
    { 
        id: 10, 
        title: "React Bootcamp", 
        image: react1, 
        link: "https://verify.letsupgrade.in/certificate/LUERJSJUL124427" 
    },
    // Add more certificates if needed
];

const Certifications = () => {
    const [showAll, setShowAll] = useState(false);

    // Split certifications into initial and additional
    const initialCertificates = certifications.slice(0, 8);
    const additionalCertificates = certifications.slice(8);

    return (
        <div className="certifications" id="Certifications">
            <h1>Certifications</h1>
            <p>Explore my professional certifications and achievements.</p>
            <div className="certificate-grid">
                {initialCertificates.map(cert => (
                    <a 
                        key={cert.id} 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="certificate-card"
                    >
                        <img src={cert.image} alt={cert.title} className="certificate-image" />
                        <div className="certificate-title">{cert.title}</div>
                    </a>
                ))}
                {showAll && additionalCertificates.map(cert => (
                    <a 
                        key={cert.id} 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="certificate-card"
                    >
                        <img src={cert.image} alt={cert.title} className="certificate-image" />
                        <div className="certificate-title">{cert.title}</div>
                    </a>
                ))}
            </div>
            {!showAll && (
                <button className="certificate-showmore" onClick={() => setShowAll(true)}>
                    <span>Show More</span> 
                    <img src={arrow_icon} alt="Arrow Icon" className="arrow" />
                </button>
            )}
        </div>
    );
};

export default Certifications;
