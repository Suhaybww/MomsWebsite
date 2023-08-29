import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Details</h1>
        <p>To place an order or for any inquiries, you can reach Sofiya through:</p>
        <ul className="contact-info">
          <li><strong>Phone:</strong> +1 (555) 555-5555</li>
          <li><strong>Email:</strong> sofia@example.com</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSection;
