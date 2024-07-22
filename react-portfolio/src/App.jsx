import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './assets/css/style.css';

function App() {
  return (
    <Router>
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




// How It Works:
// <Route path="/" element={<About />} />:

// This route matches the root URL (/).
// When the URL is exactly /, the About component is rendered.
// <Route path="/my-work" element={<MyWork />} />:

// This route matches the /my-work URL.
// When the URL is /my-work, the MyWork component is rendered.
// <Route path="/contact" element={<Contact />} />:

// This route matches the /contact URL.
// When the URL is /contact, the Contact component is rendered.
// <Route path="/resume" element={<Resume />} />:

// This route matches the /resume URL.
// When the URL is /resume, the Resume component is rendered.
// Benefits:
// Single Page Application (SPA): By using <Routes> and <Route>, you maintain a single-page application where different components are rendered within the same tab based on the URL path.
// URL-based Navigation: Users can navigate to different sections of your app by changing the URL path, and the appropriate component will be rendered without reloading the page or opening a new tab.
// Ensuring Proper Functionality:
// To ensure this setup works correctly:

// Router Setup: Wrap your application with <Router> to enable routing.
// Correct Paths: Define paths in the <Route> elements that match the intended URLs.
// Component Rendering: Ensure each element attribute correctly references the component to render for that path.
// By making these changes, we ensured that navigating to /my-work, /contact, or any other defined path renders the appropriate component within the same window, providing a seamless user experience.