const router = require("express").Router();

const {
    singup,

} = require("../controllers/users.controller");

router.post("/user/signup", singup);

module.exports = router;