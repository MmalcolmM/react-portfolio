import React from 'react';
import '../assets/css/style.css';
import darkWhisperImage from '../assets/images/darkwhispers.png';
import placeholderImage from '../assets/images/img-placeholder.webp';
import radiantSoulImage from '../assets/images/radiantsoul.png';

const MyWork = () => {
  return (
    <div id="my-work">
      <h1 className="main-heading">My Work</h1>
      <img src={darkWhisperImage} alt="Dark Whisper" />
      <img src={placeholderImage} alt="Placeholder" />
      <img src={radiantSoulImage} alt="Radiant Soul" />
    </div>
  );
};

export default MyWork;
