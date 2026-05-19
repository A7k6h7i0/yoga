const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const https = require('https');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(cors());

const EMAIL_FROM = process.env.EMAIL_USER || 'work.fit.wellnesss@gmail.com';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || EMAIL_FROM;
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || '';
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || '';

const PLANS = {
  starter: {
    id: 'starter',
    name: 'Starter',
    amount: 29,
    description: '3 Live Sessions/week, Access to Video Library, Community Support, Mobile App Access',
  },
  premium: {
    id: 'premium',
    name: 'Premium',
    amount: 59,
    description: 'Unlimited Live Sessions, One-on-One Consultation, Personalized Diet Plan, Priority Support',
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise',
    amount: 199,
    description: 'Corporate Wellness Program, Unlimited User Accounts, Dedicated Account Manager, Custom Analytics',
  },
};

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_FROM,
    pass: process.env.EMAIL_PASS || 'your_app_password', // Needs real app password in .env
  },
});

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/yoga_db';
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    seedAdmin();
  })
  .catch((err) => console.error('MongoDB connection error:', err));

async function seedAdmin() {
  try {
    const adminEmail = 'admin@livefit.com';
    const existingAdmin = await User.findOne({ email: adminEmail, role: 'admin' });
    if (!existingAdmin) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('adminpassword123', salt);
      const newAdmin = new User({
        name: 'LiveFit Admin',
        phone: '9999999999',
        email: adminEmail,
        password: hashedPassword,
        role: 'admin',
        focusAreas: ['admin']
      });
      await newAdmin.save();
      console.log('Successfully seeded default admin user (admin@livefit.com / adminpassword123)');
    }
  } catch (err) {
    console.error('Error seeding admin user:', err);
  }
}

// User Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['livefit', 'workfit', 'admin'], default: 'livefit' },
  focusAreas: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

// Enforce unique combinations of email and role
userSchema.index({ email: 1, role: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);

const paymentSchema = new mongoose.Schema({
  planId: { type: String, required: true },
  planName: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true, default: 'INR' },
  customer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  receipt: { type: String, required: true },
  razorpayOrderId: { type: String, required: true, unique: true },
  razorpayPaymentId: { type: String, required: true, unique: true },
  razorpaySignature: { type: String, required: true },
  status: { type: String, enum: ['created', 'paid', 'failed'], default: 'paid' },
  paidAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

const Payment = mongoose.model('Payment', paymentSchema);

const contentSchema = new mongoose.Schema({
  page: { type: String, required: true, unique: true },
  data: { type: mongoose.Schema.Types.Mixed, required: true },
  updatedAt: { type: Date, default: Date.now }
});

const Content = mongoose.model('Content', contentSchema);

function formatCurrency(amount, currency = 'INR') {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function createRazorpayOrder(options) {
  if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
    return Promise.reject(new Error('Razorpay credentials are missing'));
  }

  const body = JSON.stringify(options);
  const auth = Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString('base64');

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'api.razorpay.com',
        path: '/v1/orders',
        method: 'POST',
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (res) => {
        let responseBody = '';

        res.on('data', (chunk) => {
          responseBody += chunk;
        });

        res.on('end', () => {
          try {
            const parsed = JSON.parse(responseBody || '{}');
            if (res.statusCode >= 400) {
              return reject(new Error(parsed.error?.description || parsed.error?.reason || 'Failed to create Razorpay order'));
            }
            resolve(parsed);
          } catch (error) {
            reject(error);
          }
        });
      }
    );

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function buildPaymentEmail(payment) {
  const paymentDate = new Date(payment.paidAt).toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  });

  const lines = [
    `Hi ${payment.customer.name},`,
    '',
    'Your payment has been received successfully.',
    '',
    `Plan: ${payment.planName}`,
    `Amount: ${formatCurrency(payment.amount, payment.currency)}`,
    `Payment ID: ${payment.razorpayPaymentId}`,
    `Order ID: ${payment.razorpayOrderId}`,
    `Receipt: ${payment.receipt}`,
    `Status: ${payment.status}`,
    `Paid At: ${paymentDate}`,
    '',
    'Thank you for choosing LiveFit.',
  ];

  const adminLines = [
    'A new payment has been completed.',
    '',
    `Customer Name: ${payment.customer.name}`,
    `Customer Email: ${payment.customer.email}`,
    `Customer Phone: ${payment.customer.phone}`,
    `Plan: ${payment.planName}`,
    `Amount: ${formatCurrency(payment.amount, payment.currency)}`,
    `Payment ID: ${payment.razorpayPaymentId}`,
    `Order ID: ${payment.razorpayOrderId}`,
    `Receipt: ${payment.receipt}`,
    `Status: ${payment.status}`,
    `Paid At: ${paymentDate}`,
  ];

  return {
    userMailOptions: {
      from: EMAIL_FROM,
      to: payment.customer.email,
      subject: `Payment Received - LiveFit ${payment.planName} Plan`,
      text: lines.join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin: 0 0 16px;">Payment Received</h2>
          <p>Hi ${payment.customer.name},</p>
          <p>Your payment has been received successfully.</p>
          <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 560px;">
            <tr><td style="padding: 8px 0; font-weight: bold;">Plan</td><td>${payment.planName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Amount</td><td>${formatCurrency(payment.amount, payment.currency)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Payment ID</td><td>${payment.razorpayPaymentId}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Order ID</td><td>${payment.razorpayOrderId}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Receipt</td><td>${payment.receipt}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Status</td><td>${payment.status}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Paid At</td><td>${paymentDate}</td></tr>
          </table>
          <p style="margin-top: 20px;">Thank you for choosing LiveFit.</p>
        </div>
      `,
    },
    adminMailOptions: {
      from: EMAIL_FROM,
      to: ADMIN_EMAIL,
      subject: `Payment Completed - ${payment.customer.name} - ${payment.planName}`,
      text: adminLines.join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin: 0 0 16px;">New Payment Completed</h2>
          <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 640px;">
            <tr><td style="padding: 8px 0; font-weight: bold;">Customer Name</td><td>${payment.customer.name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Customer Email</td><td>${payment.customer.email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Customer Phone</td><td>${payment.customer.phone}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Plan</td><td>${payment.planName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Amount</td><td>${formatCurrency(payment.amount, payment.currency)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Payment ID</td><td>${payment.razorpayPaymentId}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Order ID</td><td>${payment.razorpayOrderId}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Receipt</td><td>${payment.receipt}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Status</td><td>${payment.status}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Paid At</td><td>${paymentDate}</td></tr>
          </table>
        </div>
      `,
    },
  };
}

async function sendPaymentNotifications(payment) {
  const { userMailOptions, adminMailOptions } = buildPaymentEmail(payment);
  await Promise.allSettled([transporter.sendMail(userMailOptions), transporter.sendMail(adminMailOptions)]);
}

// Auth Routes
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, phone, email, password, role, focusAreas } = req.body;

    // Check if user exists for this specific role
    let user = await User.findOne({ email, role: role || 'livefit' });
    if (user) return res.status(400).json({ message: 'A user with this email and login type already exists' });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    user = new User({ 
      name, 
      phone, 
      email, 
      password: hashedPassword,
      role: role || 'livefit',
      focusAreas: focusAreas || []
    });
    await user.save();

    // Send confirmation emails asynchronously
    try {
      const mailOptions = {
        from: EMAIL_FROM,
        to: email,
        subject: 'Registration Confirmation - LiveFit',
        text: `Hi ${name},\n\nThank you for registering with LiveFit! Your account has been successfully created.\n\nWelcome to our wellness community!`,
      };

      const adminMailOptions = {
        from: EMAIL_FROM,
        to: ADMIN_EMAIL,
        subject: 'New User Registration - LiveFit',
        text: `A new user has registered on LiveFit.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nRole: ${role || 'livefit'}`,
      };

      transporter.sendMail(mailOptions).catch((err) => console.error('Error sending user email:', err));
      transporter.sendMail(adminMailOptions).catch((err) => console.error('Error sending admin email:', err));
    } catch (err) {
      console.error('Email error:', err);
    }

    // Create JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    res.status(201).json({ 
      token, 
      user: { 
        id: user._id, 
        name, 
        phone, 
        email,
        role: user.role,
        focusAreas: user.focusAreas
      } 
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const normalizedEmail = email ? email.trim().toLowerCase() : '';

    const user = await User.findOne({ email: normalizedEmail, role: role || 'livefit' });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    res.json({ 
      token, 
      user: { 
        id: user._id, 
        name: user.name, 
        phone: user.phone, 
        email,
        role: user.role,
        focusAreas: user.focusAreas
      } 
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Payment Routes
app.post('/api/payment/create-order', async (req, res) => {
  try {
    const { planId, customer } = req.body;
    const plan = PLANS[planId];

    if (!plan) {
      return res.status(400).json({ message: 'Invalid plan selected' });
    }

    let planAmount = plan.amount;
    try {
      const plansContent = await Content.findOne({ page: 'plans' });
      if (plansContent && plansContent.data && plansContent.data[planId]) {
        planAmount = plansContent.data[planId].price || plan.amount;
      }
    } catch (dbErr) {
      console.error('Error reading dynamic plans for payment:', dbErr);
    }

    if (!customer?.name || !customer?.email || !customer?.phone) {
      return res.status(400).json({ message: 'Customer name, email, and phone are required' });
    }

    const receipt = `livefit_${planId}_${Date.now()}`;
    const order = await createRazorpayOrder({
      amount: planAmount * 100,
      currency: 'INR',
      receipt,
      payment_capture: 1,
      notes: {
        planId: plan.id,
        planName: plan.name,
        customerName: customer.name,
        customerEmail: customer.email,
        customerPhone: customer.phone,
      },
    });

    res.json({
      keyId: RAZORPAY_KEY_ID,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
      },
      plan: {
        id: plan.id,
        name: plan.name,
        amount: planAmount,
        currency: 'INR',
      },
    });
  } catch (err) {
    console.error('Razorpay order error:', err);
    res.status(500).json({ message: err.message || 'Internal Server Error' });
  }
});

app.post('/api/payment/verify', async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      planId,
      customer,
      receipt,
    } = req.body;

    const plan = PLANS[planId];
    if (!plan) {
      return res.status(400).json({ message: 'Invalid plan selected' });
    }

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ message: 'Missing payment verification details' });
    }

    const expectedSignature = crypto
      .createHmac('sha256', RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    const isValid =
      expectedSignature.length === razorpay_signature.length &&
      crypto.timingSafeEqual(Buffer.from(expectedSignature), Buffer.from(razorpay_signature));

    if (!isValid) {
      return res.status(400).json({ message: 'Invalid payment signature' });
    }

    const paymentRecord = await Payment.findOneAndUpdate(
      { razorpayPaymentId: razorpay_payment_id },
      {
        planId: plan.id,
        planName: plan.name,
        amount: plan.amount,
        currency: 'INR',
        customer: {
          name: customer?.name || 'Customer',
          email: customer?.email || '',
          phone: customer?.phone || '',
        },
        receipt: receipt || razorpay_order_id,
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        status: 'paid',
        paidAt: new Date(),
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      }
    );

    await sendPaymentNotifications(paymentRecord);

    res.json({
      message: 'Payment verified successfully',
      payment: {
        planId: paymentRecord.planId,
        planName: paymentRecord.planName,
        amount: paymentRecord.amount,
        currency: paymentRecord.currency,
        customer: paymentRecord.customer,
        receipt: paymentRecord.receipt,
        razorpayOrderId: paymentRecord.razorpayOrderId,
        razorpayPaymentId: paymentRecord.razorpayPaymentId,
        status: paymentRecord.status,
        paidAt: paymentRecord.paidAt,
      },
    });
  } catch (err) {
    console.error('Payment verification error:', err);
    res.status(500).json({ message: 'Failed to verify payment' });
  }
});

app.post('/api/contact/inquiry', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const userMailOptions = {
      from: EMAIL_FROM,
      to: email,
      subject: 'Inquiry Received - LiveFit',
      text: `Hi ${name},\n\nYour inquiry request has been sent successfully!\n\nDetails provided:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n\nOur team will review your request and get back to you shortly.\n\nBest regards,\nLiveFit Team`,
    };

    const adminMailOptions = {
      from: EMAIL_FROM,
      to: ADMIN_EMAIL,
      subject: 'New Inquiry - LiveFit',
      text: `A new inquiry has been submitted.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
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
      from: EMAIL_FROM,
      to: email,
      subject: 'Schedule Request Received - LiveFit',
      text: `Hi,\n\nYour schedule/booking request has been sent successfully!\n\nDetails provided:\nInquiry For: ${inquiryFor}\nTimezone: ${timezone}\nPreferred Time: ${time}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}\n\nWe will contact you within 24 hours to confirm your session details.\n\nBest regards,\nLiveFit Team`,
    };

    const adminMailOptions = {
      from: EMAIL_FROM,
      to: ADMIN_EMAIL,
      subject: 'New Schedule Request - LiveFit',
      text: `A new schedule request has been submitted.\n\nInquiry For: ${inquiryFor}\nTimezone: ${timezone}\nPreferred Time: ${time}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}`,
    };

    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ message: 'Schedule request sent successfully' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ message: 'Failed to send schedule request' });
  }
});
// Content Management API Routes
app.get('/api/content/:page', async (req, res) => {
  try {
    const { page } = req.params;
    let content = await Content.findOne({ page });
    
    // If not found in database, seed default values and return them
    if (!content) {
      let defaultData = {};
      if (page === 'home') {
        defaultData = {
          heroTitle: 'Yoga For Corporate Wellness & Personal Health',
          heroSubtitle: 'Elevate Mind, Body & Focus',
          heroDescription: 'Transforming corporate productivity and personal lifestyle with evidence-based yoga practices, habit coaching, and active restoration.',
          heroImage: '/globall.png',
          whyUsTitle: 'Why Choose LiveFit',
          whyUsText: 'We bridge the gap between traditional yoga wisdom and modern lifestyle needs, focusing on ergonomic alignment, stress mitigation, and sustainable habits.',
          ourStoryTitle: 'Our Story & Philosophy',
          ourStoryText: 'Founded with a single mission: to make wellness accessible, engaging, and transformational. We integrate clinical insights, expert guidance, and custom challenges to support teams globally.',
          ourStoryImage: '/flowerlogo2.png'
        };
      } else if (page === 'solutions') {
        defaultData = {
          'low-employee-engagement': {
            title: 'Low Employee Engagement',
            problem: 'Disconnected teams lead to low morale, low participation, and weak culture.',
            image: '/Wc4.png'
          },
          'hybrid-work-challenges': {
            title: 'Hybrid Work Challenges',
            problem: 'Remote & hybrid teams struggle with wellness, connection and routines.',
            image: '/Wc6.png'
          },
          'high-healthcare-costs': {
            title: 'High Healthcare Costs',
            problem: 'Lifestyle issues lead to rising healthcare costs and sick leaves.',
            image: '/Wc7.png'
          },
          'boring-wellness-programs': {
            title: 'Boring Wellness Programs',
            problem: 'Generic wellness programs fail to engage employees and deliver results.',
            image: '/Wc8.png'
          }
        };
      } else if (page === 'testimonials') {
        defaultData = [
          {
            id: '1',
            author: 'Sarah Jenkins',
            role: 'VP of HR',
            company: 'TechCorp',
            text: 'LiveFit completely transformed our team dynamic. Burnout dropped by 40% and our remote employees feel connected again.',
            rating: 5,
            avatar: '/office2.png'
          },
          {
            id: '2',
            author: 'David Chen',
            role: 'Operations Director',
            company: 'Innovate Solutions',
            text: 'The hybrid challenges got everyone moving! Simple, engaging, and incredibly positive for company culture.',
            rating: 5,
            avatar: '/office3.png'
          },
          {
            id: '3',
            author: 'Amara Okafor',
            role: 'People Lead',
            company: 'Global Design',
            text: 'Highly professional instructors, seamless scheduling, and beautiful sessions that everyone looks forward to weekly.',
            rating: 5,
            avatar: '/office4.png'
          }
        ];
      } else if (page === 'plans') {
        defaultData = {
          starter: {
            price: 29,
            description: '3 Live Sessions/week, Access to Video Library, Community Support, Mobile App Access'
          },
          premium: {
            price: 59,
            description: 'Unlimited Live Sessions, One-on-One Consultation, Personalized Diet Plan, Priority Support'
          },
          enterprise: {
            price: 199,
            description: 'Corporate Wellness Program, Unlimited User Accounts, Dedicated Account Manager, Custom Analytics'
          }
        };
      } else {
        defaultData = {
          title: 'Dynamic Page',
          description: 'Initial seeded description for page content.'
        };
      }
      
      content = new Content({ page, data: defaultData });
      await content.save();
    }
    
    res.json(content.data);
  } catch (err) {
    console.error('Error fetching content:', err);
    res.status(500).json({ message: 'Failed to fetch content' });
  }
});

app.put('/api/content/:page', async (req, res) => {
  try {
    const { page } = req.params;
    const { data } = req.body;
    
    // Auth Check
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'No authorization token provided' });
    }
    
    const token = authHeader.split(' ')[1];
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    } catch (tokenErr) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
    
    const user = await User.findById(decoded.id);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied: Admin permissions required' });
    }
    
    const updatedContent = await Content.findOneAndUpdate(
      { page },
      { data, updatedAt: new Date() },
      { new: true, upsert: true }
    );
    
    res.json({ message: 'Content updated successfully', data: updatedContent.data });
  } catch (err) {
    console.error('Error updating content:', err);
    res.status(500).json({ message: 'Failed to update content' });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
