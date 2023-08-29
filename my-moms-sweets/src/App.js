import React from 'react';
import './App.css';
import Header from './components/Header'; 
import HeroSection from './components/HeroSection';  
import AboutSection from './components/AboutSection';
import HowToOrderSection from './components/HowToOrderSection'; 
import Footer from './components/Footer';  
import ContactSection from './components/ContactSection'; 
import ContactMeSection from './components/ContactMeSection';  


function App() {
  return (
    <div className="App">
      <Header />

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
