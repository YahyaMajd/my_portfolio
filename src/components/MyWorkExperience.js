// src/components/WorkExperience.js
import React from 'react';
import './MyWorkExperience.css';
import useInView from '../hooks/useInView';
import '../reveal.css';
import DELLImage from '../images/Dell.jpg'
import TFSImage from '../images/TFS.jpg'
import BroadcomImage from '../images/Broadcom.png'
const WorkExperience = () => {
  
  const workExperience = [
     {
      id: 0,
      title: 'Software Engineer Co-op',
      company: 'Broadcom Ltd.',
      duration: 'January 2025 - August 2025',
      description: (
        <ul>
        <li>Layer7 Gateway team</li>
      </ul>
      ),
      imageUrl: BroadcomImage,
      docLink: ''
    },
    {
      id: 1,
      title: 'Computer Engineer Co-op',
      company: 'Terraforma Systems Inc.',
      duration: 'September 2024 - Decemeber 2024',
      description: (
        <ul>
        <li>Click here to view my documentation!</li>
      </ul>
      ),
      imageUrl: TFSImage,
      docLink: 'https://docs.google.com/document/d/1sglPDKqv0ySVf38fhNGxYGe3SlbZX0CnMIqCIKE-gD8/edit'
    },
    {
      id: 2,
      title: 'Channel Services Intern and Networking Developer',
      company: 'Dell Technologies',
      duration: 'July 2024 - September 2024',
      description: (
        ""
      ),
      imageUrl: DELLImage,
      docLink: ''
    }
  ];

  const [ref, inView] = useInView({ threshold: 0.18, once: false });

  return (
    <section
      id="work-experience"
      ref={ref}
      className={`work-experience-section reveal ${inView ? 'visible' : ''}`}
    >
      <h2>Work Experience</h2>
      <p>Here are some of the roles I have held during my career.</p>
      <div className={`work-experience-container reveal-stagger ${inView ? 'visible' : ''}`}>
        {workExperience.map((experience, idx) => (
          <div 
            key={experience.id || idx} 
            className="work-card"
            style={{ ['--reveal-delay']: `${idx * 180}ms` }}
            onClick={() => experience.docLink && window.open(experience.docLink, "_blank")} // Opens Google Doc link in a new tab if available
          >
            <div className="work-image-wrapper">
              <img src={experience.imageUrl} alt={experience.company} className="work-image" />
            </div>
            <div className="work-info">
              <h3>{experience.title}</h3>
              <h4>{experience.company}</h4>
              <p className="work-duration">{experience.duration}</p>
              <div className="work-description">{experience.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
