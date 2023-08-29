import React from 'react';
import './HowToOrderSection.css';

const HowToOrderSection = () => {
  return (
    <div className="order-container">
      <h1>How to Order</h1>
      <div className="order-content">
        <p>
          Ordering your favorite Halwa has never been easier. Follow these simple steps to enjoy a taste of tradition.
        </p>
        <ol className="order-steps">
          <li>Contact Sofiya via phone or email to discuss your order.</li>
          <li>Choose from a variety of traditional flavors.</li>
          <li>Book a time slot for pick-up or delivery.</li>
          <li>Enjoy your delicious, homemade Halwa!</li>
        </ol>
      </div>
    </div>
  );
};

export default HowToOrderSection;
