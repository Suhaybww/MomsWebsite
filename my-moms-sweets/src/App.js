import React from 'react';
import './App.css';
import './Header.css';  // import the header CSS
import HeroSection from './components/HeroSection';  
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';  // import the Footer component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Fatima's Traditional Somali Halwa
      </header>

      <HeroSection />  
      
      <AboutSection />  
      
      {/* Other sections or components can go here */}

      <Footer />  {/* Your Footer here */}
    </div>
  );
}

export default App;
