import React from 'react';
import './HeroSection.css'; // We will create this CSS file next
import heroImage from '../images/hero-image.jpg';  // Importing the image


const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="Traditional Somali Sweets" className="hero-image" />  {/* Using the image */}
      <div className="hero-content">
        <h1>Welcome to My Mom's Traditional Somali Sweets!</h1>
        <p>Experience the taste of authentic Somali Halwa, made with love.</p>
      </div>
    </div>
  );
};

export default HeroSection;
