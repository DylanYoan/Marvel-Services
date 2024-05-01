const router = require("express").Router();

const {
    singup,
    getUsers
} = require("../controllers/user.controller");

router.post("/signup", singup);
router.get("/getUsers", getUsers);

module.exports = router;