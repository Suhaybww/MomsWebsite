import React from 'react';
import './HeroSection.css'; 
import heroImage from '../images/hero-image.jpg';  


const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="Traditional Somali Sweets" className="hero-image" />  
      <div className="hero-content">
        <h1>Welcome to Safiyo's Traditional Somali Halwa Sweets!</h1>
        <p>Experience the taste of authentic Somali Halwa, made with love.</p>
      </div>
    </div>
  );
};

export default HeroSection;

