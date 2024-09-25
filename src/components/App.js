// src/components/App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import MyWorkExperience from './MyWorkExperience';
import TechStack from './TechStack';
import Typewriter from './Typewriter'; // Import the Typewriter component

function App() {
  const onButtonClick = () => {
    const pdfUrl = "RESUME_REFACTOR.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Yahya-Abouelmagd_Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="App">
     <div class="star"></div>
     <div class="star"></div>
      <Navbar />
      <header className="app-header">
        <div className="header-content">
          <div className="header-info">

            {/* Use the Typewriter component */}
            <h1>
              Yahya Abouelmagd
            </h1>
            <h2>
              <Typewriter 
                texts={['Computer Engineering Student. Vancouver, BC']} 
                typingSpeed={100} 
                erasingSpeed={50} 
                delay={2000}
              />
            </h2>
            <a href = "mailto:yaya.almajd@gmail.com" className = "cta-button">  Contact Me </a>
            {/* <a href={`${process.env.PUBLIC_URL}/RESUMEREFACTOR.pdf`} download="Yahya_Resume.pdf" className='cta-button'> Download My Resume </a> */}
            <button onClick={onButtonClick } className = "cta-button"> Download My Resume </button>
          </div>
          <div className="header-techstack"> {/* Container for tech stack */}
            <TechStack />
          </div>
        </div>
      </header>
      <main>
        <AboutMe />
        <MyWorkExperience />
        <div class="star"></div>
        <div class="star"></div>
        <div style={{ height: '90px' }}></div>
        <MyProjects />
      </main>
      <footer>
        
        <p style={{ color: 'white' }}>© 2024 Yahya Abouelmagd. All Rights Reserved.</p>
      </footer>
      
    </div>
  );
}

export default App;
