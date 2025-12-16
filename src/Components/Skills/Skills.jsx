import React from 'react';
import './Skills.css';

// Local icons
import htmlIcon from '../../assets/html.svg';
import cssIcon from '../../assets/css.svg';
import javascriptIcon from '../../assets/javascript.svg';
import phpmyadmminIcon from '../../assets/phpmyadmin.svg';

const Skills = () => {
    return (
        <div id='Skills' className='Skills'>
            <h1>Tools, Languages & Frameworks</h1>
            <p></p>
            <div className="icon-grid">
                {/* Frontend & Languages */}
                <img src={htmlIcon} alt="HTML" title="HTML" />
                <img src={cssIcon} alt="CSS" title="CSS" />
                <img src={javascriptIcon} alt="JS" title="JS" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="REACT" title="REACT"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="JAVA" title="JAVA"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" title="C"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" title="C++"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" title="PHP"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="PYTHON" title="PYTHON"/>
                <img src={phpmyadmminIcon} alt="PHPMYADMIN" title="PHPMYADMIN" />
                
                {/* Frameworks & DBs */}
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="VITEJS" title="VITEJS"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MONGODB" title="MONGODB"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MYSQL" title="MYSQL"/>  
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="SQLITE" title="SQLITE"/> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="POSTMAN" title="POSTMAN"/>  
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" alt="NODEJS" title="NODEJS"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="EXPRESS" title="EXPRESS"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="DJANGO" title="DJANGO"/>

                {/* Mobile & UI */}
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" alt="Android Studio" title="Android Studio"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" alt="KOTLIN" title="KOTLIN"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="FLUTTER" title="FLUTTER"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="FIGMA" title="FIGMA"/>  
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="FIREBASE" title="FIREBASE"/>

                {/* DevOps Tools */}
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="GIT" title="GIT"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GITHUB" title="GITHUB"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="DOCKER" title="DOCKER"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" alt="KUBERNETES" title="KUBERNETES"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" alt="JENKINS" title="JENKINS"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="LINUX" title="LINUX"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" alt="BASH" title="BASH"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" alt="NGINX" title="NGINX"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" alt="TERRAFORM" title="TERRAFORM"/>
            </div>
        </div>
    );
};

export default Skills;
