import React from 'react';
import './ContactMeSection.css';

const ContactMeSection = () => {
  return (
    <div className="contact-me-container">
      <h1>Contact Me</h1>
      <p>If you're interested in placing an order or have any inquiries, please fill out the form below:</p>
      <form className="contact-me-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="tel" placeholder="Your Phone Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /> {/* Added phone number field */}
        <textarea placeholder="Your Message" rows="5"></textarea> {/* Made the textarea larger */}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactMeSection;
