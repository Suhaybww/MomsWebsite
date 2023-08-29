import React from 'react';
import './App.css';
import './Header.css';  
import HeroSection from './components/HeroSection';  
import AboutSection from './components/AboutSection';
import HowToOrderSection from './components/HowToOrderSection'; 
import Footer from './components/Footer';  
import ContactSection from './components/ContactSection'; 
import ContactMeSection from './components/ContactMeSection';  


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Sofiya's Traditional Somali Halwa
      </header>

      <HeroSection />  
      
      <AboutSection />  

      <HowToOrderSection /> 

      <ContactSection /> 

      <ContactMeSection />

      <Footer /> 
    </div>
  );
}

export default App;
