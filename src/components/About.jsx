import React from 'react';
import '../assets/css/style.css';
import malcolmImage from '../assets/images/Malcolm.jpg';  // Make sure this path is correct

const About = () => {
  return (
    <div id="about">
      {/* <h2 className="main-heading">About Me</h2> */}
      <p id='malcolm'>Malcolm Franklin</p>
      <img src={malcolmImage} alt="Handsome black man" id='main-photo' />
      <div id="about-text">
        <figcaption>
        Hello! I'm Malcolm Franklin, a full-stack web developer with a passion for creating dynamic and user-friendly web applications. I recently completed the University of Denver's intensive bootcamp, where I developed a versatile skill set that spans both front-end and back-end development. <br/>

What sets me apart is my commitment to quality and my collaborative approach. I believe the best results come from working closely with clients and team members to turn their vision into reality. My goal is to elevate your web applications, ensuring they are efficient, innovative, and impactful. <br/>

I'm excited to bring my skills and enthusiasm to a dynamic team where I can contribute to exciting projects and continue to grow as a developer. Let's build something extraordinary together!
        </figcaption>
        <ul className='contactInfo'>
          <li>
            <a id='email' href="mailto:malcolm.franklin.m@gmail.com">Email</a>
          </li>
          <li>
            <a id='phone' href="tel:3605257403">Call me</a>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default About;
