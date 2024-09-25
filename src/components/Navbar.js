// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a href="#about" className="navbar-link">About Me</a>
        </li>
        <li>
          <a href="#projects" className="navbar-link">My Projects</a>
        </li>
        <li>
          <a href="#work-experience" className="navbar-link">Work Experience</a>
        </li>
        {/* <li>
        <a href="/my_portfolio/Resume_REFACTOR.pdf" target="_blank" rel="noopener noreferrer" className="navbar-link">My Resume</a>

        </li> */}
        <li> 
          <a href = "https://www.linkedin.com/in/yahya-abouelmagd/" className = "navbar-link"> My LinkedIn </a>
        </li>
        <li> 
          <a href = "mailto:yaya.almajd@gmail.com" className = "navbar-link">  Contact </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
