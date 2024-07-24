import React from 'react';
import '../assets/css/style.css';
import darkWhisperImage from '../assets/images/darkwhispers.png';
import placeholderImage from '../assets/images/img-placeholder.webp';
import radiantSoulImage from '../assets/images/radiantsoul.png';

const MyWork = () => {
  return (
    <div id="my-work">
      <h1 className="main-heading">My Work</h1>
      <div className="work-images">
        <a href='https://darkwhispers.onrender.com/'> <img src={darkWhisperImage} alt="Dark Whisper" /></a>
        <a href=""><img src={placeholderImage} alt="Placeholder" /></a>
        <a href="https://rsesthetics.com/" > <img src={radiantSoulImage} alt="Radiant Soul" /> </a>
      </div>
    </div>
  );
};

export default MyWork;
