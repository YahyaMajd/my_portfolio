// src/components/MyProject.js
import React from 'react';
import './MyProjects.css';
import TCPImage from '../images/TCP1.png'
import TextImage from '../images/texts.jpg'
import DBMSImage from '../images/DBMS.jpg'
import SwiftUI from '../images/SwiftUI.jpg'
import ProxyImage from '../images/Proxy.jpg'
import GolangIamge from '../images/Golang.png'
import JavaImage from '../images/JavaNotification.jpg'
import RESTAPI from '../images/RESTAPI.jpg'
const MyProjects = () => {
  // Example completed projects array
  const completedProjects = [
    {
      id: 1,
      title: 'Text Messaging Web-Application',
      description:<ul>
        <li> A messaging app with real-time chat features</li>
        <li> Click to access Github!</li>
      </ul> 
      ,
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
                <li> Click to access Github!</li>
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
      <li> Click to access Github!</li>
      </ul>,
      imageUrl: DBMSImage,
      githubLink: 'https://github.com/YahyaMajd/Video-Game-Library-DBMS',
    },
    {
      id: 5,
      title: 'Load Balancing Proxy Service',
      description: <ul>
      <li> A simple proxying server that can be integrated seamlessy. Note: </li>
      <li>Load Balancing Algorithms: round-robin, least connections.</li>
      <li>Health Checks: Periodically check the health of the placeholding ExpressJs backend servers I created.</li> 
      <li>Includes rate limiting.</li>
      <li> Click to access Github!</li>
      </ul>,
      imageUrl: ProxyImage,
      githubLink: 'https://github.com/YahyaMajd/NodeJs-Load-Balancer',
    },
    {
      id: 8,
      title: ' Java-based RESTAPI ',
      
      description: <ul>
      <li> A simple REST API built with Spring Boot for managing employee data, supporting CRUD operations. </li>
      <li> Uses local H2 Database</li>
      <li> Click to access Github!</li>
      </ul>,
      imageUrl: RESTAPI,
      githubLink: 'https://github.com/YahyaMajd/Java-REST-API.git',
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
      <li> Click to access Github!</li>
      </ul>,
      imageUrl: SwiftUI,
      githubLink: 'https://github.com/YahyaMajd/JobSimple',
    },
    {
      id: 6,
      title: 'Golang File Synchronizer ',
      description:  <ul>
      <li>Terminal based Go program monitoring changes in directories and synchronizing them. </li>
      <li> A good exercise to learn Golang's syntax, file I/O, and concurrency.</li>
      <li> Click to access Github!</li> 
      </ul>,
      imageUrl: GolangIamge,
      githubLink: 'https://github.com/YahyaMajd/Golang-FileSynchronizer.git',
    },
    {
      id: 7,
      title: ' Java-based Hybrid Notification Service ',
      description:  <ul>
      <li> User sets reminders in Android app and push notifications, or even different types of notifications are used to alert the user of the reminder. </li>
      <li> Goal : allows users to configure their preferred notification channel (email, push, or both).</li> 
      <li> An android app is built for users to set reminders and receive notifications by using firebase as a middleman.</li> 
      <li> Click to access Github!</li>
      <li> Github for android app will be added soon.</li> 
      </ul>,
      imageUrl: JavaImage,
      githubLink: 'https://github.com/YahyaMajd/Hybrid-Notification-Service.git',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h1>Completed Projects</h1>
      <p> Here are some of the projects I have worked on recently. More information on other projects on my resume!</p>
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
