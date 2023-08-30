import React, { useEffect } from 'react';
import heroImage from '../images/hero-image.jpg';

const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.getElementById('heroSection');
      let scrollPosition = window.pageYOffset;
      parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="heroSection" style={{ backgroundAttachment: 'fixed' }}>
      <img src={heroImage} alt="Traditional Somali Sweets" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to Safiyo's Traditional Somali Halwa Sweets!</h1>
        <p>Experience the taste of authentic Somali Halwa, made with love.</p>
      </div>
    </div>
  );
};

export default HeroSection;
