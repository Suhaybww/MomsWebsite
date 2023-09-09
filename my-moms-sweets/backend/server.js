require('dotenv').config(); // For using environment variables
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// CORS
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// Body Parser Middleware
app.use(bodyParser.json());

app.post('/send', (req, res) => {
  const { name, email, number, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // Verify the connection configuration
  transporter.verify((error, success) => {
    if (error) {
      console.log('Transporter Error:', error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: 'your-mom-email@gmail.com',
    subject: 'New Halwa Order',
    text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log('Error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent');
      res.status(200).send('Email sent');
    }
  });
});

app.listen(3001, () => console.log('Server is running...'));
