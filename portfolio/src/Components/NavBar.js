import React from "react";

export default function NavBar() {
   
    return (
      <header>
        <div className="social-links">
            <a href="https://github.com/YoanaAriasMagana">
              <i className="icon ion-social-github" />
            </a>
            <a href="https://www.linkedin.com/in/yarias-magana/">
              <i className="icon ion-social-linkedin" />
            </a>
      </div>
        
          <div className="nav-bar">
          <ul>
              <a href="#about-section">About</a>
              <a href="#skills-section">Skills</a>
              <a href="#projects-section">Projects</a>
              <a href="#contact-section">Contact</a>
          </ul>
          </div>
    </header>
    );
}

