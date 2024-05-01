const express = require('express');

const router = express.Router();

const {
    getCharacters,
    getCharacterById

} = require("../controllers/marvel.controller");

router.get("/getAll", getCharacters);
router.get("/getOneById/:id", getCharacterById);


module.exports = router;