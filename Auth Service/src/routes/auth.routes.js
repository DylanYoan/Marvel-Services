const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const {
    login 

} = require('../controllers/auth.controller');

const router = express.Router();

router.post('/auth/login', login);


module.exports = router;