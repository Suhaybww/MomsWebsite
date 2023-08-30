import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Details</h1>
        <p>To place an order or for any inquiries, you can reach Safiyo through:</p>
        <ul className="contact-info">
          <li><strong>Phone:</strong> +6103697952</li>
          <li><strong>Email:</strong> safiyo1973@gmail.com</li>
        </ul>

        <h2 className="contact-option-header">Or you can submit an enquiry using this form below:</h2>

        <form action="http://localhost:3001/send" method="POST" className="contact-me-form">
          <h1>Contact Safiyo</h1>
          <textarea name="message" rows="4" cols="50" placeholder="Write your message here"></textarea>
          <button type="submit">Send Email</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
