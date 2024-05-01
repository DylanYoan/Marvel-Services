// controllers/marvelController.js
const axios = require('axios');

const healthCtrl = {};

const MARVEL_SERVICE = process.env.MARVEL_SERVICE;

healthCtrl.getCharacters = async (req, res) => {

  axios.get(`${MARVEL_SERVICE}/getAll`).then(response => {
    res.status(200).json(response.data);
  }).catch(error => {
    res.status(500).json(error);
  });
  
}

healthCtrl.getCharacterById = async (req, res) => {
  
  let id = req.params.id;

  axios.get(`${MARVEL_SERVICE}/getOneById/${id}`).then(response => {
    res.status(200).json(response.data);
  }).catch(error => {
    res.status(500).json(error);
  });
  
}


module.exports = healthCtrl;