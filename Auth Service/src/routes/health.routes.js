const express = require('express');
const {
    checkServices 

} = require('../controllers/health.controller');

const router = express.Router();

router.get('/getStatusServices', checkServices);


module.exports = router;