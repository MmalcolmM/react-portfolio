// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Header from './components/Header'; 
import './assets/css/style.css';

function App() {
  return (
    <Router>
      <Header /> {/* Include the Header component */}
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="my-work" element={<MyWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
