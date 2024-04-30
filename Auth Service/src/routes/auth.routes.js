const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.get('/auth/login', authMiddleware, authController.login);


module.exports = router;