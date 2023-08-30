import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from './components/Header';  // Importing Header
import NavBar from './components/NavBar';  // Importing NavBar
import HeroSection from './components/HeroSection';  
import AboutSection from './components/AboutSection';
import HowToOrderSection from './components/HowToOrderSection'; 
import Footer from './components/Footer';  
import ContactSection from './components/ContactSection'; 


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />  {/* Your NavBar here */}

      <div id="heroSection">
        <HeroSection />
      </div>

      <div id="aboutSection">
        <AboutSection />
      </div>
      
      <div id="howToOrderSection">
        <HowToOrderSection />
      </div>

      <div id="contactSection">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}

export default App;
