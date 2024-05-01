// controllers/marvelController.js
const axios = require('axios');
const crypto = require('crypto');

const marvelCtrl = {};

const PUBLIC_KEY = '8570c3c398c907158f3c1a0180de9a8a';
const PRIVATE_KEY = 'a124e9f6b30c17094e3cc8634cd8ead54193daa7';

const timestamp = Date.now().toString();
// Genera el hash
const hash = crypto.createHash('md5').update(timestamp + PRIVATE_KEY + PUBLIC_KEY).digest('hex');

marvelCtrl.getCharacters = async (req, res) => {
  try {
    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`);
    res.json(response.data.data.results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

marvelCtrl.getCharacterById = async (req, res) => {
  try {
    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${req.params.id}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`);
    res.json(response.data.data.results[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = marvelCtrl;
