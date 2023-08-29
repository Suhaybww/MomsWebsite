const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send', (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "suhaybw1@gmail.com", // Replace with your email
      pass: "faaidah55ABC$", // Replace with your password
    },
  });

  let mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-mom-email@gmail.com',
    subject: 'New Halwa Order',
    text: req.body.message
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log('Error: ', err);
    } else {
      console.log('Email sent!!!');
    }
  });
  res.send('Email sent');
});

app.listen(3001, () => console.log('Server is running...'));