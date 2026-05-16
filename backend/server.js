const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(cors());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'work.fit.wellnesss@gmail.com',
    pass: process.env.EMAIL_PASS || 'your_app_password' // Needs real app password in .env
  }
});

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/yoga_db';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Auth Routes
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Send confirmation emails asynchronously
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER || 'work.fit.wellnesss@gmail.com',
        to: email,
        subject: 'Registration Confirmation - LiveFit',
        text: `Hi ${name},\n\nThank you for registering with LiveFit! Your account has been successfully created.\n\nWelcome to our wellness community!`
      };

      const adminMailOptions = {
        from: process.env.EMAIL_USER || 'work.fit.wellnesss@gmail.com',
        to: process.env.EMAIL_USER || 'work.fit.wellnesss@gmail.com',
        subject: 'New User Registration - LiveFit',
        text: `A new user has registered on LiveFit.\n\nName: ${name}\nEmail: ${email}`
      };

      transporter.sendMail(mailOptions).catch(err => console.error('Error sending user email:', err));
      transporter.sendMail(adminMailOptions).catch(err => console.error('Error sending admin email:', err));
    } catch (err) {
      console.error('Email error:', err);
    }

    // Create JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    res.status(201).json({ token, user: { id: user._id, name, email } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    res.json({ token, user: { id: user._id, name: user.name, email } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Payment Route
app.post('/api/payment/create-checkout-session', async (req, res) => {
  try {
    const { items, successUrl, cancelUrl } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.amount * 100, // amount in cents
        },
        quantity: item.quantity || 1,
      })),
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    res.json({ id: session.id, url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/api/contact/inquiry', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const userMailOptions = {
      from: process.env.EMAIL_USER || 'work.fit.wellnesss@gmail.com',
      to: email,
      subject: 'Inquiry Received - LiveFit',
      text: `Hi ${name},\n\nYour inquiry request has been sent successfully!\n\nDetails provided:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n\nOur team will review your request and get back to you shortly.\n\nBest regards,\nLiveFit Team`
    };

    const adminMailOptions = {
      from: process.env.EMAIL_USER || 'work.fit.wellnesss@gmail.com',
      to: process.env.EMAIL_USER || 'work.fit.wellnesss@gmail.com',
      subject: 'New Inquiry - LiveFit',
      text: `A new inquiry has been submitted.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);
    
    res.status(200).json({ message: 'Inquiry sent successfully' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ message: 'Failed to send inquiry' });
  }
});

app.post('/api/contact/schedule', async (req, res) => {
  try {
    const { inquiryFor, timezone, time, email, phone, message } = req.body;

    const userMailOptions = {
      from: process.env.EMAIL_USER || 'work.fit.wellnesss@gmail.com',
      to: email,
      subject: 'Schedule Request Received - LiveFit',
      text: `Hi,\n\nYour schedule/booking request has been sent successfully!\n\nDetails provided:\nInquiry For: ${inquiryFor}\nTimezone: ${timezone}\nPreferred Time: ${time}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}\n\nWe will contact you within 24 hours to confirm your session details.\n\nBest regards,\nLiveFit Team`
    };

    const adminMailOptions = {
      from: process.env.EMAIL_USER || 'work.fit.wellnesss@gmail.com',
      to: process.env.EMAIL_USER || 'work.fit.wellnesss@gmail.com',
      subject: 'New Schedule Request - LiveFit',
      text: `A new schedule request has been submitted.\n\nInquiry For: ${inquiryFor}\nTimezone: ${timezone}\nPreferred Time: ${time}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}`
    };

    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ message: 'Schedule request sent successfully' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ message: 'Failed to send schedule request' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
