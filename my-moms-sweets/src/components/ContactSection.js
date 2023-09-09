import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const isValidEmail = email => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const isValidAusPhoneNumber = number => {
    const regex = /^\+61\d{8,9}$/;
    return regex.test(number);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name) {
      alert("Name is required");
      return;
    }

    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!isValidAusPhoneNumber(formData.number)) {
      alert("Please enter a valid Australian phone number");
      return;
    }

    if (!formData.message) {
      alert("Message is required");
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email has been sent!");
        // Clear form
        setFormData({
          name: '',
          email: '',
          number: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('There was an error sending the email', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }
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

        <form onSubmit={handleSubmit} className="contact-me-form">
          <h1>Contact Safiyo</h1>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="number">Your Number</label>
          <input
            id="number"
            name="number"
            type="tel"
            placeholder="Your Number"
            value={formData.number}
            onChange={handleChange}
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Email</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
