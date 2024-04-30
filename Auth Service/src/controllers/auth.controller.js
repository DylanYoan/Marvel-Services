// controllers/authController.js
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 
const secret = process.env.JWT_SECRET;


exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Aquí deberías buscar al usuario en tu base de datos y verificar la contraseña
  const user = await User.findOne({ username });
  if (!user || !user.isValidPassword(password)) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Si las credenciales son válidas, crea un JWT y devuélvelo en la respuesta
  const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });
  res.json({ token });
};