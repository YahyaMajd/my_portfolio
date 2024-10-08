// src/components/TechStack.js
import React from 'react';
import './TechStack.css';

// Import images
import ReactLogo from '../images/react.jpg';
import NodeJsLogo from '../images/NodeExpress.jpg';
import CLogo from '../images/c++.jpg';
import FirebaseLogo from '../images/FIREBASE.jpg';
import GitLogo from '../images/GIT.jpg';
import JavaLogo from '../images/java.jpg';
import NodeExpressLogo from '../images/NodeExpress.jpg';
import Python from '../images/pytrhon.jpg';
import REST from '../images/REST.jpg';
import SQL from '../images/SQL.jpg';
import Spring from '../images/Springboot.jpg';
import AWS from '../images/AWS.jpg';
const TechStack = () => {
  const techStack = [
    { name: 'React', logo: ReactLogo },
    { name: 'Node.js', logo: NodeJsLogo },
    { name: 'C++', logo: CLogo },
    { name: 'Firebase', logo: FirebaseLogo },
    { name: 'Git', logo: GitLogo },
    { name: 'Java', logo: JavaLogo },
    { name: 'Node & Express', logo: NodeExpressLogo },
    {name : 'Python', logo : Python},
    {name : 'REST', logo : REST},
    {name : 'SQL', logo : SQL},
    {name : 'Spring', logo : Spring},
    {name : 'AWS', logo : AWS},
    // Add more tech stack items if needed
  ];

  return (
    <section id="tech-stack" className="tech-stack-section">
      <h2 className="tech-stack-title">My Tech Stack</h2>
      <div className="tech-stack-container">
        {techStack.map((tech, index) => (
          <div key={index} className="tech-card">
            <img src={tech.logo} alt={`${tech.name} logo`} className="tech-logo" />
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
