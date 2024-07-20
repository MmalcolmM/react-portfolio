import React from 'react';
import '../assets/css/style.css';
import malcolmImage from '../assets/images/Malcolm.jpg';  // Make sure this path is correct

const About = () => {
  return (
    <div id="about">
      <h1 className="main-heading">About Me</h1>
      <p>Malcolm Franklin</p>
      <img src={malcolmImage} alt="Handsome black man" id='main-photo'/>
      <div id="about-text">
        <figcaption>
        Hello! I'm Malcolm Franklin, a dedicated and driven full-stack web developer currently enrolled in the University of Denver's intensive bootcamp, with an anticipated graduation date of August 13th. Through this rigorous program, I have honed a diverse skill set that spans both front-end and back-end development, making me a versatile asset in the tech industry.
                    
                    I specialize in:
                    
                    Full-Stack Web Development: Proficient in both front-end and back-end technologies, I can handle every aspect of web application development.<br/>
                    Front-End Technologies: Expert in HTML, CSS, and JavaScript, with advanced knowledge of React.js for building dynamic and responsive user interfaces.<br/>
                    Back-End Technologies: Skilled in Node.js and Express.js, enabling me to create robust and scalable server-side applications.<br/>
                    Database Management: Experienced with SQL, allowing me to design and manage complex databases efficiently.<br/>
                    API Integration: Proficient in integrating and creating APIs to enhance functionality and connectivity in web applications.<br/>
                    Version Control: Adept at using GitHub for version control, ensuring seamless collaboration and project management.<br/>
                    Responsive Web Design: Committed to a mobile-first mindset, ensuring all applications are fully responsive and provide an optimal user experience across all devices.<br/>
                    My approach to web development is both strategic and creative. I am passionate about crafting solutions that are not only functional but also visually appealing and user-friendly. I thrive on tackling challenging problems and continuously seek to learn and grow in this ever-evolving field.<br/>
                    
                    What sets me apart is my dedication to quality and my collaborative spirit. I believe that the best results come from working closely with clients and team members to understand their vision and bring it to life. My goal is to elevate your web applications to the next level, ensuring they are efficient, innovative, and impactful.<br/>
                    
                    I am eager to bring my skills and enthusiasm to a dynamic team where I can contribute to exciting projects and continue to grow as a developer. Let's work together to build something extraordinary!<br/>
                    
                    This introduction highlights your skills, experience, and passion for web development, making it clear that you are a valuable candidate who can bring significant contributions to any team.          {/* Continue with the rest of your about text */}
        </figcaption>
      </div>
    </div>
  );
};

export default About;
