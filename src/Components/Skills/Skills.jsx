import React from 'react';
import './Skills.css';

// Icons import (example paths, adjust accordingly)
import htmlIcon from '../../assets/html.svg';
import cssIcon from '../../assets/css.svg';
import javascriptIcon from '../../assets/javascript.svg';
import phpmyadmminIcon from '../../assets/phpmyadmin.svg';



// Add more imports as needed

const Skills = () => {
    return (
        <div id='Skills' className='Skills'>
            <h1>Languages and Frameworks</h1>
            <p>Never miss a task, deadline, or idea</p>
            <div className="icon-grid">
                <img src={htmlIcon} alt="HTML" title="HTML" />
                <img src={cssIcon} alt="CSS" title="CSS" />
                <img src={javascriptIcon} alt="JS" title="JS" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="REACT" title="REACT"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"  alt="JAVA" title="JAVA"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" title="C"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" title="C++"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" title="PHP"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="PYTHON" title="PYTHON"/>
                <img src={phpmyadmminIcon} alt="PHPMYADMIN" title="PHPMYADMIN" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="VITEJS" title="VITEJS"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MONGODB" title="MONGODB"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MYSQL" title="MYSQL"/>  
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="SQLITE" title="SQLITE"/> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="POSTMAN" title="POSTMAN"/>  
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" alt="NODEJS" title="NODEJS"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"  alt="EXPRESS" title="EXPRESS"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" alt="Android Studio" title="Android Studio"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" alt="KOTLIN" title="KOTLIN"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="FLUTTER" title="FLUTTER"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="FIGMA" title="FIGMA"/>  
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="FIREBASE" title="FIREBASE"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="DJANGO" title="DJANGO"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="GIT" title="GIT"/>
                    
                   
          
          
                
          
          
               
          
                
          
                
                {/* Add more icons as needed */}
            </div>
        </div>
    );
};

export default Skills;
