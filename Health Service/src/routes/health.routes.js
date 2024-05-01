const express = require('express');
const router = express.Router();

const {
    checkServices

} = require("../controllers/health.controller");

router.get("/getStatusServices", checkServices);


module.exports = router;