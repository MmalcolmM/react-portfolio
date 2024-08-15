import React from 'react';
import '../assets/css/style.css';
import darkWhisperImage from '../assets/images/darkwhispers.png';
import placeholderImage from '../assets/images/img-placeholder.webp';
import radiantSoulImage from '../assets/images/radiantsoul.png';

const MyWork = () => {
  // Define an array of project objects, each containing information about the project
  const projects = [

    {
      imgSrc: radiantSoulImage,
      alt: "Radiant Soul",
      name: "Radiant Soul",
      projectLink: "https://rsesthetics.com/",
      repoLink: "https://github.com/MmalcolmM/radiant-soul-esthetics"
    },
    
    {
      imgSrc: darkWhisperImage,  // Image source for the project
      alt: "Dark Whisper",       // Alt text for the image
      name: "Dark Whisper",      // Project name
      projectLink: "https://darkwhispers.onrender.com/",  // Link to the project website
      repoLink: "https://github.com/sentorus67/DarkWhispers"  // Link to the project repository
    },
   
    {
      imgSrc: placeholderImage,
      alt: "Placeholder",
      name: "Placeholder Project",
      projectLink: "https://your-placeholder-project-website-link.com",
      repoLink: "https://github.com/your-repo-link"
    }
  ];

  return (
    <div id="my-work">
      <h1 className="main-heading">My Work</h1>
      <div className="work-images">
        {/* Iterate over the projects array to dynamically generate project elements */}
        {projects.map((project, index) => (
          <div className="project" key={index}>
            {/* Link wrapping the entire project, pointing to the project website */}
            <a href={project.projectLink} className="project-link">
              <img src={project.imgSrc} alt={project.alt} /> {/* Project image */}
              <div className="overlay">
                <div className="text">
                  <h2>{project.name}</h2>
                  {/* Link to the project repository */}
                  <a 
                    href={project.repoLink} 
                    className="repo-link" 
                    onClick={(e) => e.stopPropagation()}  // Prevent click from propagating to the parent link
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
