const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const {
    getCharacters,
    getCharacterById 

} = require('../controllers/marvel.controller');

const router = express.Router();

router.get('/getAll', authMiddleware, getCharacters);
router.get('/getOneById/:id', authMiddleware, getCharacterById);

module.exports = router;