import React from 'react';
import '../assets/css/style.css';

const Resume = () => {
  return (
    <div id="resume">
      <h1>Resume</h1>
      <p>Download my <a href="path/to/resume.pdf" download>resume</a>.</p>
      <h2>Proficiencies</h2>
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
