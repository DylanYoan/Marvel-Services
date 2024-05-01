// controllers/authController.js
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 
const secret = process.env.JWT_SECRET;


exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !user.matchPassword(password)) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });
  res.json({ token });
};