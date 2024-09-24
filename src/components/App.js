// src/components/App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import MyWorkExperience from './MyWorkExperience';
import TechStack from './TechStack';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="app-header">
        <div className="header-content">
          <div className="header-info">
            <h1>Yahya Abouelmagd</h1>
            <h2>Computer Engineering Student</h2>
            <h3>Vancouver, BC</h3>
            <a href="#about" className="cta-button">Learn About Me</a>
          </div>
          <div className="header-techstack"> {/* Container for tech stack */}
            <TechStack />
          </div>
        </div>
      </header>
      <main>
        <AboutMe />
       
        <MyWorkExperience />
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
