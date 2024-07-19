import React from 'react';
import '../assets/css/style.css';
import malcolmImage from '../assets/images/Malcolm.jpg';  // Make sure this path is correct

const About = () => {
  return (
    <div id="about">
      <h1 className="main-heading">About Me</h1>
      <p>Malcolm Franklin</p>
      <img src={malcolmImage} alt="Handsome black man" />
      <div id="about-text">
        <figcaption>
          Hello! I'm Malcolm Franklin, a dedicated and driven full-stack web developer currently enrolled in the University of Denver's intensive bootcamp...
          {/* Continue with the rest of your about text */}
        </figcaption>
      </div>
    </div>
  );
};

export default About;
