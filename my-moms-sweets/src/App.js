import React from 'react';
import './App.css';
import './Header.css';  // import the header CSS
import HeroSection from './components/HeroSection';  
import AboutSection from './components/AboutSection';
import HowToOrderSection from './components/HowToOrderSection'; // Importing HowToOrderSection
import Footer from './components/Footer';  // import the Footer component
import ContactSection from './components/ContactSection'; // Don't forget to import!

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

      <Footer />  {/* Your Footer here */}
    </div>
  );
}

export default App;
