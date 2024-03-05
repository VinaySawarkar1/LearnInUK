const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

// Replace with your actual MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/Learninuk';
mongodb://localhost:27017
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define the Contact model for MongoDB schema
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model('Contact', ContactSchema);

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Enable CORS to allow requests from different origins
app.use(cors());

// Secret key for JWT signing (replace with a strong random string)
const secretKey = '123456';

// Function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
};

// **User model and registration endpoint** (optional, for user accounts)
// - Add code to create a User model and implement a POST /api/register endpoint

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email }); // Modify if using user model

    if (!user) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    // Compare password hashes using bcrypt
    const isMatch = await bcrypt.compare(password, user.password); // Modify if using user model

    if (!isMatch) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    // Generate and send JWT token
    const token = generateToken(user._id); // Modify if using user model
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Server error' });
  }
});

// Protected route for fetching contact information (requires valid JWT token)
app.get('/api/contacts', verifyToken, async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Server error' });
  }
});

// Middleware to verify JWT token for protected routes
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(401).send({ message: 'Unauthorized' });

    req.userId = decoded.userId;
    next();
  });
}

const port = process.env.PORT || 5000; // Set port using
