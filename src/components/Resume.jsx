import React from 'react';
import '../assets/css/style.css';

const Resume = () => {
  return (
    <div id="resume">
      <h2>Resume</h2>
      <p>Download my <a href="/resume.pdf" download>resume</a>.</p>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>SQL</li>
      </ul>
    </div>
  );
};

export default Resume;
