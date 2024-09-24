// src/components/MyProject.js
import React from 'react';
import './MyProjects.css';
import TCPImage from '../images/TCP1.png'
import TextImage from '../images/texts.jpg'
import DBMSImage from '../images/DBMS.jpg'
import SwiftUI from '../images/SwiftUI.jpg'
const MyProjects = () => {
  // Example completed projects array
  const completedProjects = [
    {
      id: 1,
      title: 'Text Messaging Web-Application',
      description: 'A messaging app with real-time chat features.',
      imageUrl: TextImage,
      githubLink: 'https://github.com/YahyaMajd/Text-Messaging-Application',
    },
    {
      id: 2,
      title: 'TCP Communication Instance',
      description: <ul>
                <li>Designed and Implemented a TCP Protocol.</li>
                <li> Sender sends a text file and receiver prints in output file.</li>
                <li> Includes packet retransmission and congestion control.</li> 
                </ul>,
      imageUrl: TCPImage,
      githubLink: 'https://github.com/YahyaMajd/yayaammar-pa1',
    },
    {
      id: 3,
      title: 'Video Game Library DBMS',
      description: <ul>
      <li>Designed a relational database to describe a video game library </li>
      <li> Includes a PHP web interface, enabling users to edit the database as they please.</li> 
      </ul>,
      imageUrl: DBMSImage,
      githubLink: 'https://github.com/YahyaMajd/Video-Game-Library-DBMS',
    },
  ];

  // Example projects in progress array
  const projectsInProgress = [
    {
      id: 4,
      title: 'Job Application Tracker Mobile Application ',
      description:  <ul>
      <li>SwiftUI app implemented on xcode </li>
      <li>Makes tracking, following up on, and organizing job applications easy.</li> 
      </ul>,
      imageUrl: SwiftUI,
      githubLink: 'https://github.com/YahyaMajd/IOSapp',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Completed Projects</h2>
      <p>Here are some of the projects I have worked on recently. More information on other projects on my resume!</p>
      <div className="projects-container">
        {completedProjects.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => window.open(project.githubLink, "_blank")} // Opens GitHub link in a new tab
          >
            <div className="project-image-wrapper">
              <img src={project.imageUrl}  alt= "" className="project-image" />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Projects in Progress.....</h2>
      <p>These are projects I'm currently working on.</p>
      <div className="projects-container">
        {projectsInProgress.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => window.open(project.githubLink, "_blank")}
          >
            <div className="project-image-wrapper">
              <img src={project.imageUrl} alt= "" className="project-image" />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;