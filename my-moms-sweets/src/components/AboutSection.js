import React from 'react';
import './AboutSection.css';
import momMakingHalwa from '../images/momMakingHalwa.jpg';  // assuming you have this image

const AboutSection = () => {
  return (
    <div className="about-container">
      <h1>About the Maker</h1>
      <div className="about-content">
        <p>
          Meet Sofiya, a dedicated and passionate chef who specializes in making traditional Somali Halwa.
          Her journey began over 20 years ago, learning from the elders of her community.
          Today, she has perfected the art of Halwa making and is eager to share her delightful creations with you.
        </p>
        <img src={momMakingHalwa} alt="Sofiya making Halwa" className="about-image"/>
      </div>
    </div>
  );
};

export default AboutSection;
