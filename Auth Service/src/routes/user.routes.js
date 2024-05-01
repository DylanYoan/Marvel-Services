const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const {
    getUsers 

} = require('../controllers/user.controller');

const router = express.Router();

router.get('/getUsers', authMiddleware, getUsers);


module.exports = router;