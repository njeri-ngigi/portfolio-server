const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
const { validateMail } = require('./validate');

dotenv.config();

const app = express();
const corsOptions = { origin: process.env.CORS_ORIGIN };

app.use(cors(corsOptions))
app.use(express.json());

app.post('/', validateMail, (req, res) => {
  try {
    const { email, message } = req.body;
    const body = {
      to: process.env.recepient_email,
      from: email,
      subject: 'Portfolio Response from a Potential Client',
      text: message,
      html: `<strong>${message}</strong>`,
    };
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
    sgMail.send(body);

    return res.status(200).send({ message: 'Email sent successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: 'Something went wrong. Try Again.' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
