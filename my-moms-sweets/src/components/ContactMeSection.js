import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-container">
      <h1>Contact Sofiya</h1>
      <form action="http://localhost:3001/send" method="POST">
        <textarea name="message" rows="4" cols="50" placeholder="Write your message here"></textarea>
        <button type="submit">Send Email</button>
      </form>
      <p>Or call us at: +1 123-456-7890</p>
    </div>
  );
};

export default ContactSection;
