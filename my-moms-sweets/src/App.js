import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from './components/Header'; 
import NavBar from './components/NavBar';  
import HeroSection from './components/HeroSection';  
import AboutSection from './components/AboutSection';
import HowToOrderSection from './components/HowToOrderSection'; 
import Footer from './components/Footer';  
import ContactSection from './components/ContactSection'; 
import FadeInSection from './components/FadeInSection';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <div id="heroSection">
        <HeroSection />
      </div>

      <FadeInSection>
        <AboutSection />
      </FadeInSection>

      <FadeInSection>
        <HowToOrderSection />
      </FadeInSection>

      <FadeInSection>
        <ContactSection />
      </FadeInSection>

      <Footer />
    </div>
  );
}

export default App;
